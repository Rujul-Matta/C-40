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

var Img_1, Img_2, Img_3, Img_4;
var track ;
function preload(){
    track = loadImage('track.png')

    Img_1 = loadImage('Car_1.png');
    Img_2 = loadImage('Car_2.png');
    Img_3 = loadImage('Car_3.png');
    Img_4 = loadImage('Car_4.png');

    
}
function setup(){
    createCanvas(displayWidth - 25, displayHeight - 75);
    database = firebase.database();
    abc = new game();
    abc.getG();
    abc.start();
}

function draw(){
    background(225);
    if(PlayerCount == 4){
        abc.update(1);
    }
    if(GameState === 1){
        clear();
        abc.play();
    }

    if(GameState === 2 ){
        abc.end();
    }
    // drawSprites();
}