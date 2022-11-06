class Card{
    constructor({position, hero, width=250, 
        height=375, imgSrc=null, textPadding=25}){
        this.position = position;
        this.width = width;
        this.height = height;
        this.color = 'rgb(163, 145, 144)'
        this.linePaddingX = 3;
        this.linePaddingY = 10;
        this.textPadding = textPadding;
        this.imgSrc = imgSrc;
        this.img = new Image();

        this.img.onload = () => {
            
            this.imgWidth = this.img.width*0.6;
            this.imgHeight = this.img.height*0.6;
            
        }  
        
        this.picDimensions = {
            x: this.position.x + this.width / 2,
            y: this.position.y + 70,
        }

        this.textDimensions = {
            x: this.picDimensions.x,
            y: this.picDimensions.y,
   
        }

        this.hero = hero;
        this.img.src = this.hero._img;
        this.name = this.#generateName();
        this._class = this.hero._class;
        this.damage = this.hero.damage;
        this.defense = this.hero.defense;
        this.attack = this.hero.attackName;
        this.specialAttack = this.hero.specialAttack;
        this.clickable = true;
    }


    clickEvent = (event) => {

        
        const mx = event.offsetX;
        const my = event.offsetY;

        if(mx > this.position.x && mx < this.position.x + this.width &&
            my > this.position.y && my < this.position.y + this.height){
                
                if(heroContainer.length <= player.maxHeros){
                    player.gold -= this.hero.goldCost;
                    heroContainer.push(new Hero({
                        position:{
                            x: Math.random() * 300 + 400,
                            y: 350
                        },
                        hero: this.hero,
                        imgSrc: "./imgs/anim/char_a_p1_0bas_humn_v01.png",
                        frameRate: 8,
                        frameBuffer:10,
                        frameCol:6,
                        frameStop:5,
                    }));
                    cards = cards.filter(card => card != this);
                
                }
            }
    }

    
    

    #generateName = () => {
        const lastNameLen = names['lastNames'].length; 
        let name = "";
    
        if(this.hero.gender === "female"){
            const nameLen = names['femaleFirstNames'].length;
            const nameChoice = Math.floor(Math.random() * nameLen);
            const _name = names['femaleFirstNames'][nameChoice]; 
            name += _name + " ";
        }
        else if(this.hero.gender === "male"){
            const nameLen = names['maleFirstNames'].length;
            const nameChoice = Math.floor(Math.random() * nameLen);
            const _name = names['maleFirstNames'][nameChoice];
            name += _name + " ";
        }

        const lastNameChoice = Math.floor(Math.random() * lastNameLen);
        const _name = names['lastNames'][lastNameChoice];

        name += _name;

        return name;
    }

    draw = () => {
        c.fillStyle = this.color;

        c.fillRect(this.position.x, this.position.y, this.width, this.height);

        c.drawImage(this.img, this.picDimensions.x - this.imgWidth/2, this.picDimensions.y, this.imgWidth, this.imgHeight);
        
        c.fillStyle='red'
        c.font='28px comicsans'
        c.textAlign = "center";
        
        
        c.fillText(this.name, this.textDimensions.x,this.textDimensions.y+ this.imgHeight+this.textPadding);
        c.fillText(this.attack, this.textDimensions.x ,this.textDimensions.y+ this.imgHeight + this.textPadding*2);
        c.fillText(this.specialAttack, this.textDimensions.x ,this.textDimensions.y + this.imgHeight+ this.textPadding*3);
        
        c.strokeStyle = 'rgb(227, 183, 89)';
        c.lineWidth = 2.5;

        c.beginPath();

        c.moveTo(this.position.x + this.linePaddingX, this.position.y + this.linePaddingY);
        c.lineTo(this.position.x + this.width - this.linePaddingX, this.position.y+this.linePaddingY);

        c.moveTo(this.position.x + this.linePaddingY, this.position.y + this.linePaddingX);
        c.lineTo(this.position.x + this.linePaddingY, this.position.y + this.height - this.linePaddingX);

        c.moveTo(this.position.x + this.linePaddingX, this.position.y + this.height - this.linePaddingY);
        c.lineTo(this.position.x + this.width - this.linePaddingX, this.position.y + this.height - this.linePaddingY);
        
        c.moveTo(this.position.x + this.width - this.linePaddingY, this.position.y + this.linePaddingX);
        c.lineTo(this.position.x + this.width - this.linePaddingY, this.position.y + this.height - this.linePaddingX);

        c.stroke();
        
        
    }
}