class Button{
    constructor({position, text = "DEFAULT", 
    width = 175, height = 75, color = "rgb(227, 183, 89)",
    fontSize = 24,
    }){
        this.position = position;
        this.width = width;
        this.height = height;
        this.color = color;
        this.text = text;
        this.fontSize = fontSize;
        this.textPosition = {
            x: this.position.x +this.width/2,
            y: this.position.y + this.height/2 + this.fontSize/2,
        };
        
    }
   

    draw = () => {
        //console.log(this.width*this.height)
        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
        c.fillStyle = "rgb(163, 145, 144)";
        c.font=`${this.fontSize}px comicsans`;
        c.textAlign='center';
        c.fillText(this.text, this.textPosition.x, this.textPosition.y);
        
    }

    clickEvent = (event) => {
        //console.log(event)
        const mx = event.offsetX;
        const my = event.offsetY;

        if(mx > this.position.x && mx < this.position.x + this.width &&
            my > this.position.y && my < this.position.y + this.height){
                game_commands(this);
            }
    }


}