canvas.addEventListener("click", ((event) => {
    
    if (guild.showSideButtons){
        buttons.forEach((button) => {
            button.clickEvent(event);
        })
        
    }
    
    

    
    if (guild.activeBtn){
        guild.buttons.forEach((button) => {
            button.clickEvent(event);
        })
        guild.chngBtn.clickEvent(event)
    };
    cards.forEach((card) => {
        if (card.clickable){
            card.clickEvent(event);
        }
        
    })
    if(btnovrly?.show){
        btnovrly.buttons.forEach((button) => {
            button.clickEvent(event);
        })
    }
    
    if(menuOverlay?.show){
        menuOverlay.exitButton.clickEvent(event);
        menuOverlay.menuDraw.inventory.rightArrowButton.clickEvent(event);
        menuOverlay.menuDraw.inventory.leftArrowButton.clickEvent(event);
    }
    

    
    //_scroll?.clickEvent(event);
}))
window.addEventListener("wheel", (event) => {
    //console.log(scrollIndex);
    if (event.deltaY < 0){
        cards.forEach((card) =>{
            
            if(scrollIndex < 50){
                card.position.y += scrollSpeed;
                card.picDimensions.y += scrollSpeed;
                card.textDimensions.y += scrollSpeed;
                scrollIndex += scrollSpeed;
            };
            
        })
    }
    else if(event.deltaY > 0){
        if(canvas.height <= cards[cards.length-1].position.y + cards[cards.length-1].height + 20){
            cards.forEach((card) =>{
                card.position.y -= scrollSpeed;
                card.picDimensions.y -= scrollSpeed;
                card.textDimensions.y -= scrollSpeed;
                scrollIndex -= scrollSpeed;
            })
        }
        
    }
})
canvas.addEventListener("mousemove", (event) => {
    const mx = event.offsetX;
    const my = event.offsetY;

    
    btnovrly?.hoverEvent(event);
    if (mouseDown){
        heroContainer.forEach((hero) => {
            hero.guildClickEvent(event)
         })

        menuOverlay.menuDraw.inventory.items.forEach((item) => {
            item.clickEvent(event);
        })
    }

    if (!cards[0].clickable) return

    
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];

        if(mx > card.position.x && mx < card.position.x + card.width &&
        my > card.position.y && my < card.position.y + card.height){
            ovrly.position.x = mx - 7.5;
            ovrly.position.y = my - ovrly.height - 5;
    
            ovrly.hero = {...card.hero}
            ovrly.show = true;
            break;
        }

        ovrly.show = false;
    }
    
    
})
canvas.addEventListener("mousedown", (event) => {
    mouseDown++;
})
canvas.addEventListener("mouseup", (event) => {
    mouseDown--;
})