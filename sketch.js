var path, Runner1, Runner2

function preload()
{
  //pre-load images
  jason_running = loadAnimation("Runner-1.png","Runner-2.png");
  groundImage = loadImage("path.png");
}

function setup()
{
  createCanvas(400,400);
  //jason sprite
  jason = createSprite(200,200,20,50);
  jason.addAnimation("Runner-1","Runner-2",jason_running);

  //Path sprite
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  //Invisible ground sprite
  invisibleGround = createSprite(400,200,10,400);
  invisibleGround.visible = false;
  invisibleGround2 = createSprite(20,200,10,400);
  invisibleGround2.visible = false;
}

function draw() 
{
  background(220);

  console.log(jason.y);

  if(path.y > 400){
    path.y = height /2;
  }  

  drawSprites();

}
