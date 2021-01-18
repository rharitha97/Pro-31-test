const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup(){
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    //Create Bodies
    groundObject = new Ground(240, 800, 480, 50);
    //for (var i = 0; i <= 480;"i+80" is to be given as i=i+80)
    for (var i = 0; i <= 480; i=i+80) {
        divisions.push(new Division(i, 800-divisionHeight/2, 10, divisionHeight));
    }
}


function draw(){
    background(0);
    Engine.update(engine);
    groundObject.display();
    //to display an array we need to use for loop    divisions.display();
    for (var k = 0; k < divisions.length; k++) {
     
        divisions[k].display();
      }
    drawSprites();
}