var fixedrect,movingrect
function setup() {
  createCanvas(800,400);
fixedrect=createSprite(400, 100, 50, 80);
fixedrect.shapeColor="green"
movingrect=createSprite(400, 400, 80, 30);
movingrect.shapeColor="green";
movingrect.velocityY=-5
fixedrect.velocityY=5

/*gameObj1 = createSprite(100,100,50,50);
gameObj1.shapeColor="green";
gameObj2 = createSprite( 200, 300,60,80);
gameObj2.shapeColor="green";
gameObj3 = createSprite(200,100,50,50);
gameObj3.shapeColor = "green";
gameObj4 = createSprite( 600, 300,20,100);
gameObj4.shapeColor="green";*/
}

function draw() {
  background(0);
 //movingrect.x=World.mouseX;
//movingrect.y=World.mouseY;
bounceOff(movingrect,fixedrect)

  drawSprites();
  }





