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
    }
    play(){
        form.hide();
        textSize(30);
        text("!!!!!! Game is ON !!!!!!", 120,125);
        Player.playerInfo()
        if (allPlayers !== undefined) {
            var displayPosition = 150;
            for(var i in allPlayers){
                if (i == "player" + player.index) {
                    fill("blue");
                }
                else{
                    fill(0);
                }
                displayPosition += 50;
                textSize(25);
                text(allPlayers[i].Name + ": " + allPlayers[i].Distance, 120, displayPosition);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
    }
}