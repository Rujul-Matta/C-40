var ball;
var data;
var position;
function setup(){
    data1 = firebase.database()
    var ballPos = data1.ref('ball/position')
    ballPos.on('value', readPosition, showError)
    createCanvas(500,500);

    ball = createSprite(250,250,50,50);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    
    if(position !== undefined){
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    
    drawSprites();
}
}

function changePosition(x,y){
    data1.ref('ball/position').set({'x': position.x + x, 'y': position.y+y})
}

function readPosition(data){
    position = data.val();
    ball.x = position.x; 
    ball.y = position.y; 
}

function showError() {
    console.log("There is an error in our code !!!")
}
