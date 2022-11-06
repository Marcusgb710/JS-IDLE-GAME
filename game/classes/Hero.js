class Hero extends Character{
    constructor({position, hero,
        imgSrc="./imgs/anim/DUMMYIMG.png",
        frameRate=3, frameBuffer=2, frameCol, frameStop = 5}){
        super({
            position, 
            character:hero,
            imgSrc,
            frameRate, frameBuffer, frameCol,
            frameStop,
        });
        this.totalHealth = this.health + (this.defense/this.health);
        this.statBooster = [];
    }

    update = () => {
        this.clamp();

        if(this.position.x + this.velocity <= this.minXPos){
            this.velocity = 0;
            this.speed = -this.speed;
            this.frameCol = 6;
        }
        else if (this.position.x + this.width + this.velocity >= this.maxXPos){
            this.velocity = 0;
            this.speed = -this.speed;
            this.frameCol = 7;
        }
        this.velocity += this.speed;
        this.position.x += this.velocity;
    }

    dungeonUpdate = () => {
        this.clamp();
        this.velocity += this.speed;
        this.position.x += this.velocity;
    }

    guildClickEvent(event){
        const mx = event.offsetX;
        const my = event.offsetY;
        if(mx > this.position.x && mx < this.position.x + this.width &&
            my > this.position.y && my < this.position.y + this.height){
                this.velocity = 0;
                this.position.x = mx - this.width / 2;
                this.position.y = my - this.height/2;
            }
    }

    guildDropEvent(){
        if (this.position.x < sideBar.position.x + sideBar.width &&
            this.position.x + this.width > sideBar.position.x &&
            this.position.y + this.height > sideBar.position.y&&
            this.position.y < sideBar.position.y + sideBar.height &&
            !mouseDown){
                heroContainer = heroContainer.filter((hero) => hero !== this);
                dungeonContainer.push(this);
                guild.heroIcons.push(new Icon({
                    position:{x:0,y:0},
                    width:32,
                    height:32,
                }))
            }
    }
}