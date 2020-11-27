function isTouching(object1 , object2){
    a = object1.x-object2.x;
    b= object1.width/2 + object2.width/2;
    c = object2.x - object1.x;
  
    d = object1.y - object2.y;
    e = object1.height/2 + object2.height/2;
    f = object2.y - object1.y;
    if(a <= b && c <= b && d <= e && f <= e){
      return true;
    }
    else{
      return false ; 
    }
  }
function bounceOff1(object1, object2){
    g = object1.x - object2.x ;
    h = object1.width/2 + object2.width/2 ;
    i = object2.x - object1.x ;
  
    j = object1.y-object2.y;
    k = object1.height/2 + object2.height/2;
    l = object2.y - object1.y;
    
    if(g <= h && i <= h ){
      ball.velocityX = -(ball.velocityX);
    }
    if(j <= k && l <= k){
      ball.velocityY = -(ball.velocityY);
    }
  }
function move_1(a, v1){
    if(keyDown("UP_ARROW"))
    {
      a.velocityY = -v1;
    }
    if(keyDown("DOWN_ARROW"))
    {
      a.velocityY = v1;
    }
    if(keyDown("LEFT_ARROW"))
    {
      a.velocityX = -v1;
    }
    if(keyDown("RIGHT_ARROW"))
    {
      a.velocityX = v1;
    }
  }
function move_2(b, v2){
    if(keyDown("w"))
    {
      b_2.velocityY = -v2;
    }
    if(keyDown("s"))
    {
      b.velocityY = v2;
    }
    if(keyDown("a"))
    {  
      b.velocityX = -v2;
    }
    if(keyDown("d"))
    {
      b.velocityX = v2;
    }  
    
  }