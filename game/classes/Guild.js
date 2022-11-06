class Guild{
    constructor(){
        this.position = {
            x:275,
            y:5
        }

        this.width = canvas.width - 310;
        this.height = canvas.height - 100;
        this.heros = heros;
        this.buttons = this.#createButtons();
        this.clickable = false;
        this.showSideButtons = true;
        this.chngBtn = new Button({
            position:{
                x:sideBar.position.x+sideBar.width/2 - 175/2,
                y: canvas.height - 175,
            },
            text: "Party"
        })
        this.activeBtn = false;
        this.heroIcons = [];
        
    }

    #createButtons = () => {
        const buttons = [];

        const buttonsName = button_lists.GUILD.footer
        let X = this.position.x + 10;
        const buttonWidth = (this.position.x + this.width) / 3.6;
        const buttonHeight = 75;
        buttonsName.forEach((buttonName) => {
            
            buttons.push(new Button({
                position:{
                    x:X,
                    y:this.position.y+this.height + 5,
                },
                text:buttonName,
                width: buttonWidth,
                height: buttonHeight,
            }));
            X += buttonWidth + 5;
        })

        return buttons;
    }

    #rearageIcons = () =>{
        let X = 40;
        let Y = 95;
        const padding = 10;
        this.heroIcons.forEach((icon) => {
            icon.position.x = X;
            icon.position.y = Y;
            X += icon.width*3;
            if(X + icon.width + padding > sideBar.position.x + sideBar.width){
                X = 40;
                Y += icon.width*3;
            }
            
        })
    }
    
    draw = () => {
        c.fillStyle = "lightblue";
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

        this.buttons.forEach((button) => {
            button.draw();
        })
        if(!this.showSideButtons){
            this.#rearageIcons();
            this.heroIcons.forEach((icon) =>{
                icon.draw();
            });
        }
        
        

        this.chngBtn.draw();
    }

 
}