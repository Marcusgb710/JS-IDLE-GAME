class Enemy extends Character{
    constructor({position}){
        super({position});
        this.image.src = "./imgs/anim/char_a_p1_0bas_humn_v01.png"
        this.frameRate = 8;
        this.frameBuffer = 10;
        this.frameCol = 7;
        this.frameStop = 5;
        this.damage = Math.random() * 8+5;
        this.health = Math.random() * 20;
        this.defense = Math.random() * 20+15;
        this.color="blue";
        this.velocity = 5;
        
    }

    update = () => {

        this.clamp();

        // if(this.position.x+this.velocity <= this.midPoint){
        //     this.speed = 0;
        //     this.velocity = 0;
        // }
        
        this.velocity += this.speed;
        this.position.x -= this.velocity;
    }
}