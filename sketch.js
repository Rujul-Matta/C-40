var PlayerCount ;
var GameState = 0;
var form;
var player;
var database;
var abc;
var allPlayers;
var distance = 0;


var car_1, car_2, car_3, car_4;
var carArray; 

function setup(){
    createCanvas(displayWidth - 25, displayHeight - 25);
    database = firebase.database();
    abc = new game();
    abc.getG();
    abc.start();
}

function draw(){
    background(225);
    if(PlayerCount == 2){
        abc.update(1);
    }
    if(GameState === 1){
        clear();
        abc.play();
    }
    // drawSprites();
}