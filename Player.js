class Player{
    constructor(){}
    getCount(){
        var playercount_ref = database.ref('PlayerCount');
        playercount_ref.on('value', function(data){
            PlayerCount = data.val();
        })
    }
    
    updateCount(count){
        database.ref('/').update({
            PlayerCount: count
        });
    }

    update(name){
        var playerI = "player" + PlayerCount
        database.ref(playerI).set({
                Name: name
            }) 
    }
}