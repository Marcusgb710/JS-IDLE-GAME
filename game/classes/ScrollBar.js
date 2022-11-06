class ScrollBar{
    constructor(){
        this.width = 25;
        this.height = 70;

        this.position = {
            x: canvas.width - this.width,
            y: 0,
        }
    }

    draw = () => {
        c.fillStyle = 'grey';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    clickEvent = (event) => {
        const mx = event.offsetX;
        const my = event.offsetY;
        
        if(mx > this.position.x && mx < this.position.x + this.width &&
            my > this.position.y && my < this.position.y + this.height){
                console.log("penis")
            }
    }
}