class ButtonOverlay extends Overlay{
    constructor({position, width, buttonText}){
        super({position, width})
        this.position = position;
        this.maxHeight = this.position.y - 400;
        this.width = width;
        this.runEvent = false;
        this.buttonText = buttonText;
        this.textPadding = 40;
        this.showText = false;
        this.hover = false;
        this.hoverPos = {
            x:0,
            y:0,
            height:0,
            width:0,
        }
        this.buttons = [];
        this.buttonsList = button_lists['GUILD']['buttonContainers']["Guild"]
        this.opened = false;

    }

    createButtons = () => {
        const buttons = [];
        //this.buttonList = button_lists['GUILD']['buttonContainers']["Guild"];
        const spacing = this.height / this.buttonList.length;
        let y  = this.position.y + spacing;
        //console.log(y);
        for (let i  = 0; i < this.buttonList.length; i++){
                const buttonText = this.buttonList[i];
                buttons.push(new OverlayButton({
                    position:{
                        x:this.position.x,
                        y:y,
                    },
                    height: Math.abs(spacing),
                    width:this.width,
                    text: buttonText,
                }))
                y += spacing;
        }
        return buttons;
    }

    #showEvent = () => {
        
        if (this.height <= this.maxHeight){
            this.showText = true;
            this.buttons = this.createButtons();
            this.opened = true;
            return
        }
        
        this.height -= 15;
    }

    #closeEvent = () => {
        this.showText = false;
        if (this.height >= 0){
            this.show = false;
            this.opened = false;
            return;
        }
        this.height += 15;
    }

    hoverEvent = (event) =>{
        
        const mx = event.offsetX;
        const my = event.offsetY;

        for(let i  = 0; i < this.buttons.length; i ++){
            const button = this.buttons[i];
            if(mx > button.position.x &&
                mx < button.position.x + button.width&&
                my > button.position.y&& my < button.position.y - button.height
                ){
                    //canvas.style.cursor = 'pointer'
                    //button.hover = true;
                    return;
                }
                //button.hover = false;
        }
        
        
        
    }

    
    draw = () => {
        
        //console.log(this.buttons);
        if(this.runEvent) this.#showEvent();
        else this.#closeEvent();
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);

        if(this.showText){
            
            c.fillStyle='red'
            c.font='28px comicsans'
            c.textAlign = "center";
            
            this.buttons.forEach((button) => {
                button.draw();
            })
        }

        }
}