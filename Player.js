class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getCount(){
        var playercount_ref = database.ref('PlayerCount');
        playercount_ref.on('value', (data)=>{
            PlayerCount = data.val();
        })
    }
    
    updateCount(count){
        database.ref('/').update({
            PlayerCount: count
        });
    }

    update(){
        var playerI = "players/player" + this.index;
        database.ref(playerI).set({
                Name: this.name,
                Distance: this.distance
            }) 
    }
    static playerInfo(){
       var INFO = database.ref('players');
       INFO.on("value",(data) =>{
           allPlayers = data.val();
       }) 
    }

}