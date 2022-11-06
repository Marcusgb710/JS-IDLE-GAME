class Inventory{
    constructor({
        position, width, height
    }){
        this.position = position;
        this.width = width;
        this.height = height;
        this.Ypos = this.height - 90;
        this.imgeIndex = 0;
        this.maxAmount = 56;
        this.charBox = {
            position:{
                x: this.position.x+15,
                y: this.position.y+15,
            },
            width: this.width/2 - 30,
            height: this.height - 30,
        }

        this.itemBox = {
            position:{
                x:this.position.x + this.width/2,
                y: this.position.y + 5
            },
            width: this.width - 30,
            height:this.height-30,
        }
        this.leftArrowButton = new Button({
            position:{
                x:this.charBox.position.x + this.charBox.width/2 - 180,
                y:this.Ypos,
            },
            text:"←"

        })
        this.rightArrowButton = new Button({
            position:{
                x:this.charBox.position.x + this.charBox.width/2 + 5,
                y:this.Ypos,
            },
            text:"→"
        })
        this.hero = heroContainer[this.imgeIndex].character;
            this.image = new Image();
            this.image.onload = () => {
                this.imgW = this.image.width * 0.9;
                this.imgH= this.image.height * 0.9;
            }
            this.image.src = this.hero._img;

            this.armourPosition = {
                    bDim: 64,
                    boxPos:[
                        {
                            x: this.charBox.position.x + 100,
                            y: 155,
                        },
                        {
                            x: this.charBox.position.x + 100,
                            y: this.rightArrowButton.position.y - 100,
                        },
                        {
                            x: this.charBox.position.x + this.charBox.width - 164,
                            y: 155,
                        },
                        {
                            x: this.charBox.position.x + this.charBox.width - 164,
                            y: this.rightArrowButton.position.y - 100,
                        }
                    ]
                    
                    
                }

            this.items = this.createItemDebug();
    }
    createItemDebug = () => {
        const _items = [];

        let numberOfItems = 40;
        let x = this.itemBox.position.x;
        let y = this.itemBox.position.y + 10;
        let item_;

        for (let i = 0; i < numberOfItems; i++){
            
            if(x + 70 >= this.position.x + this.width){
                x = this.itemBox.position.x;
                y += 70;
            }
            const item = items;
            const keys = Object.keys(item)
            const itemChoice = keys[Math.floor(Math.random() * keys.length)];
            const _item = item[itemChoice];
            const _keys = Object.keys(_item)
            const rarity = _item[_keys[Math.floor(Math.random() * _keys.length)]]
            const __keys = Object.keys(rarity)
            const __item = rarity[__keys[Math.floor(Math.random() * __keys.length)]]
            const ___keys = Object.keys(__item);
            const ___item = __item[___keys[Math.floor(Math.random() * ___keys.length)]];
            if (itemChoice === "weapons"){
                const wepaonsKeys = Object.keys(___item);
                const weapon = ___item[wepaonsKeys[Math.floor(Math.random() * wepaonsKeys.length)]]
                item_ = weapon;
            }
            else{
                item_ = ___item;
            }
            
            _items.push( new GameItem({
                position:{
                    x:x,
                    y:y,
                },
                itemName:item_.name,
                rarity:item_.rarity,
                damageBoost:item_.damageBoost,
                defenseBoost:item_.defenseBoost,
                speedBoost:item_.speedBoost,
                imgSrc:item_._img,
                imgWidth: 64,
                imgHeight:64,
                imageIndx:this.imgeIndex,
                inv:this,
            }));

            x += 70
        }

        return _items;
    }

    draw = () => {
        let char = heroContainer[this.imgeIndex];
        this.hero = char.character;
        this.image.src = this.hero._img;
        c.fillStyle = "red";


        c.fillRect(this.charBox.position.x, this.charBox.position.y, this.charBox.width, this.charBox.height)
        //←→

        menuOverlay.menuDraw.inventory?.items.forEach((item) => {
            item.dropEvent(this.imgeIndex);
        })
        c.strokeStyle = "blue";
        
        this.armourPosition.boxPos.forEach((box) => {
            c.strokeRect(box.x, box.y, this.armourPosition.bDim, this.armourPosition.bDim)
        })

        for (let i = 0; i < heroContainer[this.imgeIndex].statBooster.length; i ++){
            const item = heroContainer[this.imgeIndex].statBooster[i];
            //console.log(char);
            item.draw();
        }

        
        this.items.forEach((item) => {
            item.draw();
            c.strokeRect(item.position.x, item.position.y, item.imgWidth, item.imgHeight)

        })

        if(this.hero)c.drawImage(this.image, this.charBox.position.x + this.charBox.width/2 - this.imgW/2, this.charBox.position.y + this.charBox.height / 2 - this.imgH / 2, this.imgW, this.imgH)
        else {};
        this.rightArrowButton.draw();
        this.leftArrowButton.draw();
    }
}