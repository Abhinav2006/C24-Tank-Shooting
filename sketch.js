// You could have multiple flags like: start, launch to indicate the state of the game.

//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

// The above line creates different constant variables for Engine, World, Bodies etc.
var engine, world;
var tanker1, ground1;

/*
const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine
*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas (600,400);

    ground1 = new Ground(400,20,200,380);
    tanker1 = new Tanker(100,350,20,50);
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background(192);
    tanker1.display();
    ground1.display();
}
