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
	
	if(Circles.length > 50){
	Circles.splice(0,1);
}
	
	for(var i = 0; i < Circles.length; i++){
		Circles[i].display();
	}
	
	for(var i = 0; i < Circles.length; i++){
		if(Circles[i].Full == 1){
		Circles.splice(i,1);
		Amount = 1;
		}
	}
	console.log("Done!");
 }

function CirclePush () {
var A = random(0,255);
	var B = random(0,255);
	var C = random(0,255);	
		Circles.push(new DrawSpheres(A,B,C));
}
 
 
