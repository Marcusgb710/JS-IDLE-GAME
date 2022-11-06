class Sprite{
    constructor({
        position, imgSrc="./imgs/anim/DUMMYIMG.png",
        frameCol = 5, frameStop = 5,
        frameRate=8, frameBuffer=1.5, loop=true,
        autoPlay = true,frames=8,height=0,
        scaleWidth=1,scaleHeight=1
    }){
        this.position = position;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true;
            this.imgW = this.image.width * this.scaleWidth;
            this.imgH = this.image.height* this.scaleHeight;
            this.width = this.imgW/this.frames;
            this.height = height? height: this.imgH/this.frames;
        }
        this.loaded = false;
        this.frames = frames;
        this.scaleWidth = scaleWidth;
        this.scaleHeight = scaleHeight;
        this.image.src = imgSrc;
        this.frameRate = frameRate;
        this.frameCol = frameCol;
        this.frameStop = frameStop;
        this.currentFrame = 0;
        this.elapsedFrame = 0;
        this.frameBuffer = frameBuffer;
        this.autoPlay = autoPlay;
        this.loop = loop;
        this.animation;
        

       

    }

    draw = () => {
        if (!this.loaded) return;
        this.cropBox = {
            position: {
                x: this.width * this.currentFrame,
                y:this.height*this.frameCol,
            },
            width: this.width,
            height: this.height,
        }
        if(this.position.x + this.velocity <= this.minXPos){
            
        }
        // c.strokeStyle = "blue"
        // c.strokeRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(
            this.image,
            this.cropBox.position.x, this.cropBox.position.y,
            this.cropBox.width, this.cropBox.height,
            this.position.x, this.position.y,
            this.width, this.height
        );

        this.updateFrames();

    }

    updateFrames = () =>{
        if(!this.autoPlay) return;
        this.elapsedFrame ++;

        if(this.elapsedFrame % this.frameBuffer === 0) {
            if (this.currentFrame === this.frameStop) this.currentFrame = 0;
            if(this.currentFrame < this.frameRate - 1){
                this.currentFrame ++;
            }
            else if(this.loop){
                this.currentFrame = 0;
            }
        }
    }
}