const canvas = document.getElementById("canvas1");
const c = canvas.getContext("2d");
const heightAspectRation = 9;
const widthAspectRatio = 16;
canvas.width = 92 * widthAspectRatio;
canvas.height = 78* heightAspectRation;
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50

const scrollSpeed = 30;
let scrollIndex = 50;
let cards;
let _scroll;
let guild;
let dungeon;
let sprite;
let ovrly;
let btnovrly;
let icon;
let menuOverlay;
let heroContainer = [];
let dungeonContainer = [];
let mouseDown = 0;


const getAndCreateCards = () => {
    const _heros = Object.keys(heros);
    const cards = [];
    let X = 325;
    let Y = 50;
    for (let i =0; i < 8; i++){
        const randomHero = Math.floor(Math.random() * _heros.length);
        //console.log(heros[_heros[randomHero]])

        if( X + 250 >= canvas.width){
            X = 325;
            Y += 380;
        }

        if(_heros[randomHero] === "spearElf"){
            cards.push(
                new Card({
                    position:{
                        x: X,
                        y: Y,
                    },
                    hero: heros[_heros[randomHero]],
                    textPadding:20,
                    
                }));
                
        }else{
            cards.push(
                new Card({
                    position:{
                        x: X,
                        y: Y,
                    },
                    hero: heros[_heros[randomHero]]
                    
                }));
        }
        
        X += 275;
    }

    return cards;
};
const sideBar = new SideBar();
cards = getAndCreateCards();
guild = new Guild();

const createButtons = () => {
    const buttonNames = button_lists.sideBar;
    const buttons = [];
    let Y = 100;
    
    buttonNames.forEach((name) => {
        buttons.push(new Button({
            position:{
                x:sideBar.position.x+sideBar.width/2 - 175/2,
                y:Y,
            },
            text:name,
           
        }));
        Y+= 100;
    });

    return buttons;
};

const screens = {
    HEROS: {
        init: () => {
            _scroll = new ScrollBar();

            ovrly = new CharacterOverlay({
                position:{
                    x: 0,
                    y: 0,
                },
                width: 75,
                height: 100,
                
            });
            
            
            cards.forEach((card) => {
                card.clickable = true;
            });
        },
        draw: () => {
            cards.forEach((card) => {
                card.draw();
            });
            _scroll.draw();
        }
    },
    GUILD: {

        init: () => {
            //guild = new Guild();
            cards.forEach((card) => {
                card.clickable = false;
            });
            heroContainer.forEach((hero) => {
                hero.position.y = 300;
                hero.position.x = guild.position.x + Math.random() * 25;
                
            });
             btnovrly = new ButtonOverlay({
                position:{
                    x: 0,
                    y :0,
                },
                width: this.width
            });
            
            icon = new Icon({
                position:{
                    x:10,
                    y:10
                },
                width:32,
                height:32,
            });

            menuOverlay = new MenuOverlay();
        },
        draw: () => {
            guild.draw();
            
           
            if(menuOverlay?.show){
                menuOverlay.draw();
                // menuOverlay.menuDraw.inventory?.items.forEach((item) => {
                //     item.dropEvent();
                // })
            }
            else{
                heroContainer.forEach((chr) => {
                    chr.update();
                    chr.guildDropEvent();
               });
               heroContainer.forEach((chr) => {
                chr.draw();
                });
            }
        
           if(btnovrly.show){ 
            btnovrly.draw();
        }
        
        
        }
    },
    DUNGEON:{
        init: () => {
            dungeon = new Dungeon();
            dungeon.organizeHeros();
            cards.forEach((card) => {
                card.clickable = false;
            });
        },
        draw: () => {
            dungeon.enemies.forEach((enemy) => {
                enemy.update();
            });
            // dungeonContainer.forEach((hero) => {
            //     //hero.dungeonUpdate();
            // });

            dungeon.heroEnemyInteraction();
            dungeon.death();


            dungeon.draw();

            dungeon.enemies.forEach((enemy) => {
                enemy.draw();
            });
            dungeonContainer.forEach((hero) => {
                hero.draw();
            });
        }
    }
}

const buttons = createButtons();

let initName = "HEROS";

const animate = () => {

    window.requestAnimationFrame(animate);

    c.fillStyle = 'rgb(105, 94, 93)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.textShadow = "rgba(0,0,0,.01) 0 0 1px"

    sideBar.draw();
    if (guild.showSideButtons){
        buttons.forEach((button) => {
            button.draw();
        });
    }
    

    screens[initName].draw();
    if(ovrly.show){
        ovrly.draw();
    }
    
}
screens[initName].init();
animate();



