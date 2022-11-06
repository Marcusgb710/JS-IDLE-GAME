class GameItem extends Sprite{
    constructor({
        position, itemName,
        rarity, damageBoost, defenseBoost, speedBoost,          
        imgSrc, imgWidth=32, imgHeight=32, imageIndx, inv
    }){
        super({position, imgSrc, frameCol:0,frameStop:0,frameRate:0,frameBuffer:0,
        loop:false, frames:0})
        this.itemName = itemName;
        this.rarity = rarity;
        this.damageBoost = damageBoost;
        this.defenseBoost = defenseBoost;
        this.speedBoost = speedBoost;
        this.imgWidth = imgWidth;
        this.imgHeight = imgHeight;
        this.imageIndx = imageIndx;
        this.imgSrc=imgSrc;
        this.inv = inv;
    }
    clickEvent = (event) => {
        const mx = event.offsetX;
        const my = event.offsetY;
        if(mx > this.position.x && mx < this.position.x + this.imgWidth &&
            my > this.position.y && my < this.position.y + this.imgHeight){
                this.position.x = mx - this.imgWidth / 2;
                this.position.y = my - this.imgHeight/2;
            }}

    dropEvent = (idx) => {
        for(let i = 0; i < this.inv.armourPosition.boxPos.length; i++){
            const pos = this.inv.armourPosition.boxPos[i];
            if (this.position.x <pos.x + this.imgWidth &&
                this.position.x + this.imgWidth > pos.x &&
                this.position.y + this.imgHeight > pos.y&&
                this.position.y < pos.y + this.imgHeight &&
                !mouseDown){
                    const hero = heroContainer[idx];
                    this.inv.items = this.inv.items.filter((item) => item !== this);
                    this.position.x = pos.x;
                    this.position.y = pos.y
                    hero.statBooster.push(
                        new GameItem({
                            position:{
                                x:this.position.x,
                                y:this.position.y,
                            },
                            itemName:this.itemName,
                            rarity:this.rarity,
                            damageBoost:this.damageBoost,
                            defenseBoost:this.defenseBoost,
                            speedBoost:this.speedBoost,
                            imgSrc:this.imgSrc,
                            imgWidth: 64,
                            imgHeight:64,
                            imageIndx:idx,
                            inv:this,
                        })
                    )
                    let x = this.inv.itemBox.position.x;
                    let y = this.inv.itemBox.position.y + 10;
                    this.inv.items.forEach((item) => {
                        if(x + 70 >= this.inv.position.x + this.inv.width){
                            x = this.inv.itemBox.position.x;
                            y += 70;
                        }
                        item.position.x = x;
                        item.position.y = y;

                        x += 70;
                    })
                    
                    break;
                }
        }
       
    }
    draw = () => {
        c.drawImage(this.image, this.position.x, this.position.y, this.imgWidth, this.imgHeight);
    }
}