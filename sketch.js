
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustbin;
var ground;


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new Paper(200, 350, 40);

	dustbin = new Dustbin(1000, 450);

	ground = new Ground(600, 650, 1200, 30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  paper1.display();
  dustbin.display();
  ground.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50, y:-50});
	}
}

