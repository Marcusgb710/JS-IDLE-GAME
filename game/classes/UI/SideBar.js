class SideBar{
    constructor(){
        this.position = {
            x: 0,
            y: 0,
        }
        this.width = 250;
        this.height = canvas.height;
        this.backgroundColor = "rgb(163, 145, 144)"
        this.coin = new Sprite({
            position:{
                x:0,
                y: canvas.height - 70,
                
            },
            imgSrc:"./imgs/coin64sheet.png",
            frameCol:0,
            frameRate:14,
            frameBuffer:10,
            loop:true,
            autoPlay:true,
            frames:14,
            height:64,
            
            
        })
    }

    draw = () =>{
        c.fillStyle = this.backgroundColor;
        c.fillRect(this.position.x, this.position.y, this.width, this.height);


        c.fillStyle = "red";
        c.font = "50px comicsans"
        c.textAlign = "center";
        c.fillText(`Day: ${player.day}`, (this.position.x + this.width)/2,  50);
    

        c.fillStyle = "red";
        c.font = "45px comicsans"
        c.textAlign = "center";
        this.coin.draw();
        c.fillText(`Gold: ${player.gold}`, (this.position.x + this.width)/2 + 20, canvas.height - 18);
    }

}