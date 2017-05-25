PiRain = [
3.14,
3.141,
3.1415,
3.14159,
3.141592,
3.1415926,
3.14159265,
3.141592653,
3.1415926535,
3.14159265359,
]

Cw = 800;
Ch = 500;

CAmount = 0;

var button

Rain = [];
var Chains = []; //Array Used To Store The Chains That The User Creates On Click
var A;
var B;
var C = 0;

Play = 0;

function setup() {
createCanvas(Cw,Ch);
colorMode(RGB, 255);
//Butt = new Button1();
background(41);

button = createButton('Pi');
button.position(600, 275);
button.mousePressed(Button1);

button = createButton('Pi2');
button.position(630, 275);
button.mousePressed(Button2);

button = createButton('Pi3');
button.position(667, 275);
button.mousePressed(Button3);

button = createButton('Pi4');
button.position(705, 275);
button.mousePressed(Button4);

button = createButton('Pi5');
button.position(743, 275);
button.mousePressed(Button5);

button = createButton('Pi6');
button.position(590, 305);
button.mousePressed(Button6);

button = createButton('Pi7');
button.position(630, 305);
button.mousePressed(Button7);

button = createButton('Pi8');
button.position(667, 305);
button.mousePressed(Button8);

button = createButton('Pi9');
button.position(705, 305);
button.mousePressed(Button9);

button = createButton('Pi10');
button.position(743, 305);
button.mousePressed(Button10);
}

//Create A New Blob Each Time The Mouse Is Pressed
function mouseClicked () {
	Chains.push( new RandomChain(mouseX,mouseY));
	Chains.push( new RandomChain(mouseX,mouseY + 10));
	
}

function draw() {
background(41);

//Draw The New Blobs On The Screen
for(var i = 0; i < Chains.length; i++) {
		// Chains[i].move();
		Chains[i].display();
		
	}
switch(Play){
	
case 1:	
P1.display();
P2.display();
P3.display();

P1.move();
P2.move();
P3.move();
break;

case 2:	
P1.display();
P2.display();
P3.display();
P4.display();

P1.move();
P2.move();
P3.move();
P4.move();
break;

case 3:
P1.display();
P2.display();
P3.display();
P4.display();
P5.display();

P1.move();
P2.move();
P3.move();
P4.move();
P5.move();
break;

case 4:
P1.display();
P2.display();
P3.display();
P4.display();
P5.display();
P6.display();

P1.move();
P2.move();
P3.move();
P4.move();
P5.move();
P6.move();
break;

case 5:
P1.display();
P2.display();
P3.display();
P4.display();
P5.display();
P6.display();
P7.display();

P1.move();
P2.move();
P3.move();
P4.move();
P5.move();
P6.move();
P7.move();
break;

case 6:
P1.display();
P2.display();
P3.display();
P4.display();
P5.display();
P6.display();
P7.display();
P8.display();

P1.move();
P2.move();
P3.move();
P4.move();
P5.move();
P6.move();
P7.move();
P8.move();
break;

case 7:
P1.display();
P2.display();
P3.display();
P4.display();
P5.display();
P6.display();
P7.display();
P8.display();
P9.display();

P1.move();
P2.move();
P3.move();
P4.move();
P5.move();
P6.move();
P7.move();
P8.move();
P9.move();
break;

case 8:
P1.display();
P2.display();
P3.display();
P4.display();
P5.display();
P6.display();
P7.display();
P8.display();
P9.display();
P10.display();

P1.move();
P2.move();
P3.move();
P4.move();
P5.move();
P6.move();
P7.move();
P8.move();
P9.move();
P10.move();
break;

case 9:
P1.display();
P2.display();
P3.display();
P4.display();
P5.display();
P6.display();
P7.display();
P8.display();
P9.display();
P10.display();
P11.display();

P1.move();
P2.move();
P3.move();
P4.move();
P5.move();
P6.move();
P7.move();
P8.move();
P9.move();
P10.move();
P11.move();
break;

case 10:
P1.display();
P2.display();
P3.display();
P4.display();
P5.display();
P6.display();
P7.display();
P8.display();
P9.display();
P10.display();
P11.display();
P12.display();

P1.move();
P2.move();
P3.move();
P4.move();
P5.move();
P6.move();
P7.move();
P8.move();
P9.move();
P10.move();
P11.move();
P12.move();
break;
	
}
print("Done");
}



