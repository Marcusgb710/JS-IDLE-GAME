class OverlayButton extends Button {
    constructor({position, text = "DEFAULT", 
    width = 175, height = 75,}){
        super({position, text, width, height})
    }

    clickEvent = (event) => {
        const mx = event.offsetX;
        const my = event.offsetY;
        if(mx > this.position.x && mx < this.position.x + this.width &&
            my > this.position.y && my < this.position.y + this.height){
                game_commands(this);
                btnovrly.opened = false;
                btnovrly.runEvent = false;
            }
    }
    draw = () => {
        //console.log(this.hover)
        // if(this.hover){
            
        //     c.fillStyle = this.color;
            
        //     c.fillRect(this.position.x, this.position.y, this.width, this.height);
            
        // }
        this.textPosition = {
            x: this.position.x +this.width/2,
            y: this.position.y + this.height/2 + this.fontSize/2,
        };
        //console.log(this.text)
        c.strokeStyle = 'rgb(227, 183, 89)';
        c.lineWidth = 2.5;
        
        c.beginPath();

        c.moveTo(this.position.x, this.position.y);
        c.lineTo(this.position.x + this.width, this.position.y);

        c.moveTo(this.position.x, this.position.y + this.height);
        c.moveTo(this.position.x + this.width, this.position.y + this.height);
        
        c.stroke();

        c.fillStyle = "rgb(163, 145, 144)";
        c.font=`${this.fontSize}px comicsans`;
        c.textAlign='center';
        c.fillText(this.text, this.textPosition.x, this.textPosition.y);
        
    }
}