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
            var index_1 = 0;
            var x = 0;
            var y;
            // console.log("1x = " +car_1.x + " y " + car_1.y);
            // console.log("2x = " +car_2.x + " 2y " + car_2.y);
            // console.log("3x = " +car_3.x + " 3y " + car_3.y);
            // console.log("4x = " +car_4.x + " 4y " + car_4.y);
            for(var i in allPlayers){
                index_1 += 1;
                x += 200;
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
            player.distance += 50;
            player.update();
        }
        drawSprites();
    }
}