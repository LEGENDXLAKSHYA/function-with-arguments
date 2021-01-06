function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 50);
  movingrect=createSprite(200,100,70,40);
  fixedrect.shapeColor = "green";
  movingrect.shapeColor="green";
  box1=createSprite(200,50,70,40);
  box1.shapeColor="red";
  box1.velocityX= 4;
  box2=createSprite(600,50,70,40);
  box2.shapeColor="cyan";
  box2.velocityX= -4;
}

function draw() {
  background(0);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;

    bounceoff(box1,box2);
  
    if(istouching(box1,movingrect)) {
      box1.shapeColor = "blue";
      movingrect.shapeColor="blue";
    }
    else{
      box1.shapeColor = "green";
      movingrect.shapeColor="green";
    }
    
  drawSprites();
}
