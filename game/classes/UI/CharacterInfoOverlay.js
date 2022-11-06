class CharacterOverlay extends Overlay{
    constructor({
        position, width, height, color='rgba(255, 255, 0, 0.5)',
    }){
        super({position, width, height, color})
        
        
        
    }

    draw(){

        
        this.textPos = {
            x: this.position.x + this.width * 0.5,   
        }
        
        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.width, this.height);

        c.beginPath();
        c.moveTo(this.position.x + 7.5 , this.position.y+this.height+5);
        c.lineTo(this.position.x, this.position.y+this.height);
        c.lineTo(this.position.x+15, this.position.y+this.height);
        c.fill();

        c.fillStyle='red';
        c.font='18px comicsans';
        c.textAlign = "center";
        

        c.fillText(this.hero.damage, this.textPos.x ,this.position.y + 25);
        c.fillText(this.hero.defense, this.textPos.x ,this.position.y + 45);
        c.fillText(this.hero._class, this.textPos.x,this.position.y + 65);
        c.fillText(this.hero.attackClass, this.textPos.x,this.position.y+ 85);
        
    }
}