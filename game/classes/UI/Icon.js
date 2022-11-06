class Icon {
    constructor({
        position, width, height, imgSrc="./imgs/charIcons/Halflings/Character1_face4.png"
    }){
        this.position = position;
        
        this.image = new Image();
        this.image.onload = () => {this.loaded = true};
        this.image.src = imgSrc;
        this.width = width;
        this.height = height;
        this.loaded = false;
        this.color = Math.random() <= 0.1?`#${Math.floor(Math.random() * 0xffffff).toString(16)}`: "blue"
        
        
        

    }


    draw = () =>{
        
        if (!this.loaded) return;
        this.imgDim = {
            borderW: this.image.width +10,
            borderH: this.image.height+10,
            imgW:this.image.width,
            imgH:this.image.height,
            
        }

        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.imgDim.borderW, this.imgDim.borderH);

        c.drawImage(this.image, this.position.x+5,this.position.y+5, this.imgDim.imgW, this.imgDim.imgH)
    }
}