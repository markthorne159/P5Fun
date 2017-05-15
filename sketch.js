var P = 3.14159265359;
var n = 0;
var c = 3;
var H = 255;
var S = 255;
var B = 255;

function setup() {
createCanvas(640,480);
angleMode(DEGREES);
colorMode(HSB);
background(0);
}

function draw() {
	var a = n * 137.3;
	var r = c * sqrt(n);
	
	var x = r * cos(a) + width/2;
	var y = r * sin(a) + height/2;
	
	fill(H,S,B);
	ellipse(x,y,10,10);
	
	H = random(255);
	S = random(255);
	B = random(255);
	n++;
 }
