class Character extends Sprite{
    constructor({
        position,
        color='red',
        character=undefined,
        imgSrc="./imgs/anim/DUMMYIMG.png",
        frameRate=2, frameBuffer=1.5, frameCol,
        frameStop = 5
    }){
        super({position, character,imgSrc,
        frameRate, frameBuffer, frameCol, frameStop});
        this.character = character;
        this.width = 25;
        this.height = 25;
        this.color = color;
        this.speed = Math.random() * 0.1;
        this.velocity = 0;
        this.maxVelocity = 1.5;
        this.maxXPos = guild.width+276.1;
        this.minXPos = guild.position.x;
        this.direction = {
            left: false,
            right: true,
        }
        this.midPoint = (guild.position.x + guild.width)/2;
        if(this.character){
            this.image.src = this.character.animation;
            this.health = this.character.health;
            this.defense = this.character.defense;
            this.damage = this.character.damage;
        }

        
        
    }
    clamp = () => {
        if(this.velocity >= this.maxVelocity){ 
            this.velocity = this.maxVelocity;
        }
        else if(this.velocity <= -this.maxVelocity){
            this.velocity = -this.maxVelocity;
        }
    }

    // draw = () => {
    //     c.fillStyle = this.color;
    //     c.fillRect(this.position.x, this.position.y, this.width, this.height);
    // }
}