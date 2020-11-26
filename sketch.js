const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2; 
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block12,block13,block14,block15,block16,block17,block18,block19; 
var polygon, polygon_img;
var score = 0;


function preload(){

  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(windowWidth,800);


  engine = Engine.create();
    world = engine.world;
    stand1 = new Ground(700,500,200,20);
    stand2 = new Ground(1000,400,190,15);
    block1 = new Box(700,450,30,30);
    block2 = new Box(730,450,30,30); 
    block3 = new Box(670,450,30,30);
    block4 = new Box(640,450,30,30);
    block5 = new Box(760,450,30,30);
    block6 = new Box(670,420,30,30);
    block7 = new Box(700,420,30,30);
    block8 = new Box(730,420,30,30);
    block9 = new Box(700,420,30,30);
    block10 = new Box(940,387,30,30);
    block11 = new Box(970,387,30,30);
    block12 = new Box(1000,387,30,30);    
    block13 = new Box(1030,387,30,30);
    block14 = new Box(1060,387,30,30);    
    block15 = new Box(970,357,30,30);    
    block16 = new Box(1000,357,30,30);
    block17 = new Box(1030,357,30,30);
    block18 = new Box(1000,357,30,30);

   

polygon = Bodies.circle(200,400,20, {isStatic:false});

World.add(world,polygon);

slingShot = new Slingshot(this.polygon,{x:200,y:400});
    
}

function draw() {
  background(0);  

   Engine.update(engine);

   rectMode(CENTER);
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display(); 
  block5.display();
  block6.display();  
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();



  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();



  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  slingShot.display();


  stroke("black");
  fill("white");
  text("Score: "+score, 80,100);
  drawSprites();



}



function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}