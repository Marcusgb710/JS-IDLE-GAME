const game_commands = (button) => {
    let _meunOverlay;
    switch (button.text){
                    case "...":
                        player.day ++;
                        player.gold += 500;
                        cards = getAndCreateCards();
                        cards.forEach(card =>{
                            card.clickable = false;
                        })
                        break;
                    case "Guild":
                        if(btnovrly.show && btnovrly.runEvent){
                            btnovrly.runEvent = false;
                            return
                        }
                        btnovrly.height = 0;
                        btnovrly.position.x = button.position.x;
                        btnovrly.position.y = button.position.y - btnovrly.height;
                        btnovrly.width = button.width;
                        btnovrly.buttonText = button.text;
                        btnovrly.runEvent = true;
                        btnovrly.buttonList = button_lists['GUILD']['buttonContainers'][button.text];
                        btnovrly.show = true;
                        break;
                    case "Heros":
                        if(btnovrly.show && btnovrly.runEvent){
                            btnovrly.runEvent = false;
                            return
                        }
                        btnovrly.height = 0;
                        btnovrly.position.x = button.position.x;
                        btnovrly.position.y = button.position.y - btnovrly.height;
                        btnovrly.width = button.width;
                        btnovrly.buttonText = button.text;
                        btnovrly.runEvent = true;
                        btnovrly.buttonList = button_lists['GUILD']['buttonContainers'][button.text]
                        btnovrly.show = true;
                        break;
                    case "Settings":
                        if(btnovrly.show && btnovrly.runEvent){
                            btnovrly.runEvent = false;
                            return
                        }
                        btnovrly.height = 0;
                        btnovrly.position.x = button.position.x;
                        btnovrly.position.y = button.position.y - btnovrly.height;
                        btnovrly.width = button.width;
                        btnovrly.buttonText = button.text;
                        btnovrly.runEvent = true;
                        btnovrly.buttonList = button_lists['GUILD']['buttonContainers'][button.text];
                        btnovrly.show = true;
                        break;
                    case "Party":
                        button.text = button.text === "Party"? "Menu": "Party";
                        guild.showSideButtons = !guild.showSideButtons;
                        break;
                    case "Menu":
                        button.text = button.text === "Party"? "Menu": "Party";
                        guild.showSideButtons = !guild.showSideButtons;
                        break;
                    case "Inventory":
                        console.log(menuOverlay)
                        menuOverlay.menu = "inventory";

                        
                        menuOverlay.show = true;
                    break;
                    case "X":
                        menuOverlay.show = false;
                        break;
                    case "→":
                        _meunOverlay = menuOverlay.menuDraw.inventory;
                        console.log(_meunOverlay.imgeIndex)
                        if (heroContainer.length > 1 && _meunOverlay.imgeIndex+1 !== heroContainer.length){
                            _meunOverlay.imgeIndex ++;
                            _meunOverlay.hero = heroContainer[_meunOverlay.imgeIndex].character;
                            
                            
                        }
                        break;
                    case "←":
                        _meunOverlay = menuOverlay.menuDraw.inventory;

                        if (heroContainer.length > 1 && _meunOverlay.imgeIndex+1 !== 1){
                            _meunOverlay.imgeIndex --;
                        }
                        break;
                    default:
                    if(button.text === "GUILD") guild.activeBtn = true;
                    else guild.activeBtn = false;
                    initName = button.text;
                    screens[initName].init();
                    break;
                }
}