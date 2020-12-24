
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var gameState=PLAY;
var END=0;                                              var PLAY=1;                     

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);

  monkey=createSprite(75,329,50,20);
  monkey.addAnimation("yes",monkey_running);
  monkey.scale=0.17;
  
  
  obstacle=createSprite(600,348,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  
  ground=createSprite(400,384,900,10);
  
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  ground2=createSprite(400,384,900,10);
  SurvivalTime=0;
  bananaGroup=createGroup();
}

    score=0;

function draw() {
  background("lightblue");
  
  
if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    

  stroke("white");
  textSize(20);
  fill("white");
  text("SurvivalTime="+SurvivalTime,300,50);
  
  text("score="+score,100,50);
SurvivalTime=Math.ceil(frameCount/frameRate());
  
  obstacle.velocityX=-6;
  obstacle.lifetime=100;
   if (frameCount % 300 === 0){
    obstacle=createSprite(550,348,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
   }
  
  if(keyDown("space")&&monkey.y >= 170){
    monkey.velocityY=-9;
    
  }
  monkey.velocityY=monkey.velocityY+1 ;
    bananaSpawn();
 
  monkey.collide(ground);

      if(bananaGroup.isTouching(monkey)){
        score=score+1;   
        bananaGroup.destroyEach();
        monkey.scale=0.25;
      }
    if(obstacle.isTouching(monkey)){
      monkey.scale=0.090;
    }
  

  drawSprites();
}

function bananaSpawn(){
  if(frameCount%80==0){
    var banana=createSprite(560,590,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
   banana.y = Math.round(random(80,120));
   banana.velocityX=-4;
   banana.lifetime=150;

    bananaGroup.add(banana);
  }
}





