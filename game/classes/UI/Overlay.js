class Overlay{
    constructor({
        position, width=10, height=10, color='rgba(255, 255, 0, 0.5)'
    }){
        
        this.position = position;
        this.width = width;
        this.height = height;
        this.color = color;
        this.show = false;
        
    }

    draw(){
        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.width, this.height);

    }
}