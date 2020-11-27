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

    ball_1 = createSprite(200,200,75,75);
    ball_1.shapeColor = "blue"



    
}

function draw(){
    background("white");
    edges = createEdgeSprites();
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
    move_1(ball_1,1)
    ball.bounceOff(edges)
    // bounceOff(ball_1, edges)
    drawSprites();
}
}

function changePosition(x,y){
    data1.ref('ball/position').set({'x': position.x + x, 'y': position.y+y})
    // data1.ref('ball_1/position').set({'x': position.x + x, 'y': position.y+y})
}

function readPosition(data){
    position = data.val();
    ball.x = position.x; 
    ball.y = position.y; 

    // ball_1.x = postion.x;
    // ball_1.y = position.y;
}

function showError() {
    console.log("There is an error in our code !!!")
}
