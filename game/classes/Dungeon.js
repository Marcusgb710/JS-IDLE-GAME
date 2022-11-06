class Dungeon{
    constructor(){
        this.position = {
            x:275,
            y:5
        }

        this.width = canvas.width - 310;
        this.height = canvas.height - 100;
        this.enemies = this.#createEnemies();
        this.enemyVelocity = Math.random() * 0.001;
        this.enemyMaxSpeed = 4;
        this.heros = heroContainer;
        this.clickable = false;
        this.formationYPosition = formationYPosition;

       
    }

    #createEnemies = () => {
        const enemies = [];

        for(let i = 0; i < dungeonContainer.length; i++){
            enemies.push(
                new Enemy({
                    position:{
                        x:  this.position.x+this.width - 30,
                        y: formationYPosition,
                    },
                    color: "blue"
                })
            )
        }

        return enemies;
    }

    draw = () => {
        c.fillStyle = 'lightgrey';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    death = () => {
        for (let index = 0; index < dungeonContainer.length; index++) {
            const hero = dungeonContainer[index];
            if(hero.totalHealth === 0) {
                dungeonContainer = dungeonContainer.filter((_hero) => _hero !== hero);
                break;
            
            };
            
            
        }
        for (let i = 0; i < this.enemies.length; i++) {
            const element = this.enemies[i];
            if(element.health === 0) {
                this.enemies = this.enemies.filter((enemy) => enemy !== element);
                break;
            };
            
        }
    }

    organizeHeros = () => {
        
        const position = battlePositions['yPosition']
        for(let i = 0; i < dungeonContainer.length; i++){
            const hero = dungeonContainer[i]
            
            hero.position = position[`x${i+1}`]
            console.log(position[`x${i+1}`])
        }
    }

    heroEnemyInteraction = () => {
        
        for(let i = 0; i < dungeonContainer.length; i++){
            const hero = dungeonContainer[i];
            for(let j = 0; j < this.enemies.length; j++){
                const enemy = this.enemies[j];
            
            
            if (hero.position.x + hero.width + hero.velocity + 1 >= enemy.position.x - enemy.velocity - 1){
                    
                

                    hero.velocity = 0;
                    enemy.velocity= 0;

                    
                    hero.velocity = -2;
                    hero.totalHealth -= enemy.damage;
                    if(hero.totalHealth < 0) hero.totalHealth = 0;
                    
                    
                    enemy.velocity = -2;
                    enemy.health -= hero.damage;
                    if(enemy.health < 0) enemy.health = 0;
                
                }  
            }
        }

    }
}