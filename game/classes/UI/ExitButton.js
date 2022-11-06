class ExitButton extends Button{
    constructor({position,
        text="X", radius=16,
        color="red", fontSize=18, textColor="white",
    }){
        super({position, text, color, fontSize});
        this.textColor = textColor;
        this.radius = radius;
        this.hitBox = {
            x:this.position.x-this.radius-5,
            y:this.position.y-this.radius+5,
            width:this.radius*2,
            height:this.radius*2,
        }
    }

    clickEvent = (event) => {
        const mx = event.offsetX;
        const my = event.offsetY;
        if(mx > this.hitBox.x && mx < this.hitBox.x + this.hitBox.width&&
            my > this.hitBox.y && my < this.hitBox.y + this.hitBox.height){
                game_commands(this);
            }
    }

    draw = () => {
        c.fillStyle = this.color;
        c.arc(this.position.x-5, this.position.y+5, this.radius, 0, 2 * Math.PI)
        c.fill();
        c.fillStyle=this.textColor
        c.font=`${this.fontSize}px comicsans`
        c.textAlign = "center";
        c.fillText(this.text, this.position.x-5, this.position.y + this.radius / 2+2.5)

        //c.strokeRect(this.hitBox.x, this.hitBox.y, this.hitBox.width, this.hitBox.height);
    }
}