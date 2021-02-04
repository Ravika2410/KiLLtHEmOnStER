const Engine=Matter.Engine,
      World=Matter.World,
      Bodies=Matter.Bodies,
      Cons=Matter.Constraint;
var myWorld,myEngine;
var bg;
var h,f,g,ing;
function preload()
{
bg=loadImage("GamingBackground.png");
}

function setup()
{
createCanvas(1200,500);
myEngine=Engine.create();
myWorld=myEngine.world;
h=new hero(300,250);
//h.scale=0.4;
g=new ground(width/2,400,width,20);
f=new fly({x:300,y:50},h.body);

}

function draw()
{
   background(bg);
    Engine.update(myEngine);

    h.display();
    g.display();
    f.display();

}

function mouseDragged()
{
    push();
    Matter.Body.setPosition(h.body,{x:mouseX,y:mouseY});
    pop();
}