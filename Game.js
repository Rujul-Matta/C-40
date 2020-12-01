class game {
    constructor(){}
    getG(){
        var G_ref = database.ref('GameState')
        G_ref.on('value', function(data){
            GameState = data.val();
        })
    }
    update(G){
        database.ref('/').update({
         GameState : G 
        });
    }
   async start(){
        if(GameState === 0){
            player = new Player();
            
            var num = await database.ref("PlayerCount").once("value")
            if (num.exists()) {
                PlayerCount = num.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        // if(GameState !== 0){
            
            car_1 = createSprite(100,400);
            car_2 = createSprite(300,400);
            car_3 = createSprite(500,400);
            car_4 = createSprite(700,400);

            carArray = [car_1, car_2, car_3, car_4];
        // }
    }
    play(){
        form.hide();
        fill('red')
        textSize(30);
        text("!!!!!! Game is ON !!!!!!", 120,125);
        Player.playerInfo()
        if (allPlayers !== undefined) {
            var index_1 = 0;
            var x = 0;
            var y;
            for(var i in allPlayers){
                index_1 += 1;
                x += 200;
                y = displayHeight - allPlayers[i].distance
                carArray[index_1-1].x = x;
                carArray[index_1-1].y = y;

                // if(index == player.index){
                //     carArray[index - 1].shapeColor = "lightgreen"
                // }
            }

        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
        drawSprites();
    }
}