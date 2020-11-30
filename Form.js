class Form{
    constructor(){
        this.input = createInput("Name:")
        this.button = createButton('PLAY');
        this.greet = createElement('h3');
    }
    hide(){
        this.greet.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title = createElement('h1');
        title.html("Car Racing 3.0");
        title.position(width/2 - 50, 25);

        this.input.position(width/2, height/2);
        this.button.position(width/2, height/2+25);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            PlayerCount += 1;
            player.index = PlayerCount;
            player.update();
            player.updateCount(PlayerCount);

            this.greet.html('!!!! HELLO ' + player.name + " !!!!!");
            this.greet.position(250, 250)
        });
    }
}