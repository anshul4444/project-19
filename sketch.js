var monkey ,monkey_running;
var ground ,groundImage ;
var invisibleGround;

var jungle,jungle_image 

var fruitGroup , fruitImage;
var stoneGroup, stoneImage;

var score = 0;

function preload(){
  monkey_running =  loadAnimation("Monkey1.png","Monkey2.png","Monkey3.png","  Monkey4.png","Monkey5.png","Monkey6.png","Monkey7.png","Monkey8.png","Monkey9.png","Monkey10.png");
  
 jungle_image = loadImage("jungle.jpg"); 
 fruitImage = loadImage("banana.png");
 stoneImage = loadImage("stone.png");
}

function setup(){
  createCanvas(400,400);
  
  
  jungle = createSprite(200,200);
  jungle.addImage(jungle_image);
  jungle.velocityX = -6;
  jungle.x = jungle.width/2;
  
  
  monkey = createSprite(50,340,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
 
  ground = createSprite(200,380,400,20);
  ground.visible = false;
  ground.x = jungle.width/2;
  ground.velocityX = -3;
  
  invisibleGround = createSprite(200,390,400,20);
  invisibleGround.visible = false;
  
  fruitGroup = new Group();
  stoneGroup = new Group();
  
}

function draw(){
  background("white");

    switch(score) {
      case 10: monkey.scale = 0.12;
              break;
      case 20: monkey.scale = 0.14;
              break;
      case 30: monkey.scale = 0.16;
              break;
      case 40 : monkey.scale = 0.18;
              break;
      default: break;
    }
  
  
     if(keyDown("space")) {
       monkey.velocityY = -12;
     }
  
 if (fruitGroup.isTouching(monkey)){
     fruitGroup.destroyEach();
     score = score + 2
 }
  
  if (stoneGroup.isTouching(monkey)){
      monkey.scale = 0.1;
    score = 0;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8 
    
   if (jungle.x<0){
      jungle.x = jungle.width/2;
  }
  
  if (ground.x<0){
      ground.x = ground.width/2;
  }
  
  monkey.collide(invisibleGround);
  
  spawnStones();
  spawnFruits();
  
  drawSprites();
  
  fill("black");
  textSize(20);
  text("score:"+score,289,20);
}

function spawnStones(){
  if (frameCount % 80 === 0){
      stone = createSprite(400,367,20,20);
      stone.addImage(stoneImage);
      stone.scale = 0.1;
      stone.velocityX = -6  ; 
      stoneGroup.add(stone);
}
  }
  
function spawnFruits(){
  if (frameCount % 80 === 0){
    fruit = createSprite(400,230,20,20);
    fruit.scale = 0.1;
    fruitGroup.add(fruit);
    fruit.addImage(fruitImage);
    fruit.velocityX = -6; 
  }
}
