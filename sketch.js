var PlayerCount ;
var GameState = 0;
var form;
var player;
var database;
var abc;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    abc = new game();
    abc.getG();
    abc.start();
}

function draw(){
    background(225);
}