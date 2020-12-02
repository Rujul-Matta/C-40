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
            
            car_1 = createSprite(100,400-50);
            car_1.addImage(Img_1);
            car_1.scale = 0.1;
            car_2 = createSprite(300,400-50);
            car_2.addImage(Img_2);
            car_2.scale = 0.1;

            car_3 = createSprite(500,400-50);
            car_3.addImage(Img_3);
            car_3.scale = 0.1;

            car_4 = createSprite(700,400-50);
            car_4.addImage(Img_4);
            car_4.scale = 0.1;

            carArray = [car_1, car_2, car_3, car_4];
            console.log(carArray)
        
    }
    play(){
        form.hide();
    //    fill('red');
    //    textSize(50);
    //    stroke('red')
    //    strokeWeight(5)
    //    text('!!! GAME is ON !!!', displayWidth/2 - 250, displayHeight/2 - 200)
        Player.playerInfo()
        if (allPlayers !== undefined) {
            background(rgb(198,135,103));
            image(track, 0, -(displayHeight * 3.5), displayWidth,displayHeight*5)
            var index_1 = 0;
            var x = 75;
            var y;
           
            for(var i in allPlayers){
                index_1 += 1;
                x += 250;
                y = displayHeight - allPlayers[i].Distance
                carArray[index_1-1].x = x;
                carArray[index_1-1].y = y;

                if(index_1 == player.index){
                    carArray[index_1 - 1].shapeColor = "red"
                    camera.position.x = displayWidth/2;
                    camera.position.y = y
                }
            }


        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 25;
            player.update();
        }

        if(player.distance >= 3420){
            GameState = 2;
            
        }
        drawSprites();
    }
    end(){
        console.log("Game is OVER !!") 
    }
}