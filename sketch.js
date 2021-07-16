const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var btn1,btn2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  btn1=createImg('up.png')
  btn1.position(30,100);
  btn1.size(50,50)
  btn1.mouseClicked(vforce)


  btn2 = createImg('right.png')
  btn2.position(10,200)
  btn2.size(50,50)
  btn2.mouseClicked(hforce)
  
  
  ground=new Ground(200,400,400,20);
  left=new Ground(0,200,20,400);
  right=new Ground(400,200,20,400);
  top_wall=new Ground(200,0,400,20);
  
  var options = {
   restitution : 0.9
  }
  
  ball=Bodies.circle(200,20,20,options)
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  
  Engine.update(engine);
 
   ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  left.show()
  right.show()
  top_wall.show()
  
}

function hforce(){
  Body.applyForce(ball,ball.position,{x:0.05,y:0})
}


function vforce(){
 Body.applyForce(ball,ball.position,{x :0,y:-0.05})
  
}
