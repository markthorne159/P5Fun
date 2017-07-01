var Size = 20;
var Amount = 1;
var Done = 1;

var Circles = [];
var TotalCircles = 10;

function setup() {
myFunction();
createCanvas(displayWidth,displayHeight);
background(51);
}

function draw() {
	background(51);
	
	if(Circles.length > 35){
	Circles.splice(0,1);
}
	
	for(var i = 0; i < Circles.length; i++){
		Circles[i].display();
	}
 }

function CirclePush () {
var A = random(0,255);
	var B = random(0,255);
	var C = random(0,255);	
	Circles.push(new DrawSpheres(A,B,C));
}
 
 
