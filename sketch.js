 
 
 var PLAY = 1;
 var END = 0;
 var gameState = PLAY;



 
var EnemyGroup = createGroup();

var gameOver = createSprite(200,300);
var restart = createSprite(200,340);
gameOver.setAnimation("gameover.png");
gameOver.scale = 0.5;
restart.setAnimation("restart.png");
restart.scale = 0.5;

gameOver.visible = false;
restart.visible = false;

textSize(18);
textFont("Ariel");
textStyle(BOLD);
 
var count = 0;

 
function draw() {
  rectMode(CENTER);
  background("background.png");
  
  text("Score: "+ count, 250, 100);

  var spaceship = createSprite(200,300, 200, 200); 
  spaceship.image =("unnamed(29).png")
  
  spaceship.scale = 0.5;
  spaceship.x = 200;

  spaceship.x = World.mouseX;
   
  
    

  if(gameState === PLAY){
    
  if(keyDown("space")){

    var laser = createSprite(spaceship.x,spaceship.y,100,10);
    laser.shapeColor= "red";

    laser.velocityY = -60
  }
  
  if (laser.isTouching(EnemyGroup)) {
    EnemyGroup.destroyEach();
    score = score + 2
     

    if(count=20){
      if(World.frameCount % 1000 === 0){}
    for (var n = 0; n < 400; n = n +20) {
      var black = createSprite(n, 100, 10, 10);
      black.scale = 0.2
      black.setAnimation("Imported piskel.gif");
    }
  }
    }





    if (enemyGroup.y=400 ){ 
      gameState = END
    }

    else if(gameState === END) {
      gameOver.visible = true;
    restart.visible = true;
    
    
    spaceship.velocityX = 0;
    EnemyGroup.velocityY = 0;
        
      }
  }
 
  drawSprites();

  function Enemy(){
    if (World.frameCount % (7+(score/5)) === 0) {
      var evil = createSprite(400,200,20,20)
      evil.image=("");
      evil.x = randomNumber(100,300)
      evil.velocityY = -5;
      
      EnemyGroup.add(evil)
      
    }
    
 
}


}
