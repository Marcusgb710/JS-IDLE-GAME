class MenuOverlay extends Overlay{
    constructor(color="rgb(155, 155, 100)"){
        super({color});
        
        this.menu;
        this.position = {
            x:guild.position.x + 15,
            y:guild.position.y + 15,
        }
        this.width = guild.width - 30;
        this.height = guild.height - 30;
        this.exitButton = new ExitButton({
            position:{
                x:this.position.x + this.width,
                y:this.position.y,
            }
        })

        this.menuDraw = {
            inventory: new Inventory({position:this.position, width:this.width, height:this.height}),
        }

        
    }




    draw = () => {
        
        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
        
        this.menuDraw[this?.menu].draw();
        
        this.exitButton.draw();
    }
}