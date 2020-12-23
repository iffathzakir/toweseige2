var a;
var circles=[];

function preload() {
  polygon = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,800);
  stroke(255)
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)

  image(polygon,100,100);
  TransitionEvent(0,153,204);
  image(polygon,100,100);

  ground = new Ground(390,285,100,10);

  //level one
  block1 = new Box(300,255,30,40);
  block2 = new Box(330,255,30,40);
  block3 = new Box(360,255,30,40);
  block4 = new Box(390,255,30,40);
  block5 = new Box(420,255,30,40);
  block6 = new Box(450,255,30,40);
  block7 = new Box(480,255,30,40);
  //level two
  block8 = new Box(330,225,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  //level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  blcok15 = new Box(420,195,30,40);
  //level four
  block16 = new Box(390,155,30,40);

  polygon = new Box(100,100,60,60);

}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 

function mouseDragged() {
  Matter.Body.setPosition(polygon.body {x: mouseX, y: mousey});
}

function mouseReleased() {
  SlingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}

function attach(){
  
}