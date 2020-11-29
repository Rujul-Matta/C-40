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
    start(){
        if(GameState === 0){
            player = new Player();
            player.getCount();
            
            form = new Form();
            form.display();
        }
    }
}