var monkey;

var ground;

var Ground0;
var banana = createSprite(200,200,20,20)
ground.velocityX = -5
function preload(){
  monkey = loadImage("sprite_0.png");
  banana = loadImage("banana.png.png");
  monkey.addAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png",);
  ground = loadImage("background0");
}
function setup(){
  createCanvas(400,400);
  monkey = createSprite(200,300,20,20);
  ground= createSprite(200,200,400,400);
  Ground0 = createSprite(200,380,400,10)
}
function draw() {
  background("white");
  monkey.depth = ground.depth;
  monkey.depth = monkey.depth + 1
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if(keyDown("space")) {
        monkey.velocityY = -12;
    }
    monkey.collide(Ground0)
    //add gravity
      monkey.velocityY = monkey.velocityY+0.8
  drawSprites() ;
}

function createObstacles(){

 if (frameCount % 60 === 0){
   var obstacle = createSprite(200,165,10,40);
   obstacle.velocityX = -(4+3*score/100);
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.setAnimation(obstacle);
              break;
      case 2: obstacle.setAnimation(obstacle);
              break;
      case 3: obstacle.setAnimation(obstacle);
              break;
      case 4: obstacle.setAnimation(obstacle);
              break;
      case 5: obstacle.setAnimation(obstacle);
              break;
      case 6: obstacle.setAnimation(obstacle);
              break;
      default: break;
    }
 }
}
