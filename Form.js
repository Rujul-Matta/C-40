class Form{
    constructor(){}

    display(){
        var title = createElement('h1');
        title.html("Car Racing 3.0");
        title.position(width/2 - 50, 25);
        var input = createInput("Name: ")
        input.position(width/2, height/2);

        var button = createButton('play');
        button.position(width/2, height/2+25);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            PlayerCount += 1;
            player.update(name);
            player.updateCount(PlayerCount);

            var greet = createElement('h3');
            greet.html('!!!! HELLO ' + name);
            greet.position(250, 250)
        });
    }
}