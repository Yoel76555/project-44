 var fishie, tubes, tube1Image, tube2Image, fishieImage, ground, groundImage;


function preload(){
 fishieImage= loadImage("plane.png");
  groundImage= loadImage("ground2.png");
  tube1Image= loadImage("tube.png");
  tube2Image= loadImage("tube2.png");
}


function setup() {
  createCanvas(500,400);

    
    fishie= createSprite(100,200,20,20);
    fishie.addImage(fishieImage);
    fishie.scale=0.5;
  
    ground =createSprite(400,400,800,20);
    ground.addImage(groundImage);
    ground.velocityX=-4;
   ground.x = ground.width /2;
  
  
    
}

function draw() {
  background(220);
  
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if(keyDown(UP_ARROW)){
      fishie.velocityY= -10;
    }
  
    fishie.velocityY= fishie.velocityY+0.5;

    
  drawSprites();
  
  spawnUpTubes();
  spawnDownTubes();
}
function spawnUpTubes() {
  
    if (frameCount % 80 === 0){
      tubes = createSprite(500,45,500,280);
      //tubes.y = Math.round(random(250,200));
      tubes.addImage(tube2Image);
      tubes.scale=0.4;
      tubes.velocityX= -4;
      tubes.lifetime= 100;
      
       }
    
   
  }
function spawnDownTubes() {
  
    if (frameCount % 80 === 0){
      tubes = createSprite(500,350,600,580);
      //tubes.y = Math.round(random(250,300));
      tubes.addImage(tube1Image);
      tubes.scale=0.4;
      tubes.velocityX= -4;
      tubes.lifetime= 100;
      
       }
    
   
  }