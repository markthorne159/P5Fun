function DrawSpheres (D,E,F) {
this.x = (displayWidth/2);
this.y = (displayHeight/2);
this.z = displayWidth;
this.Xscale = 0;
this.Yscale = 0;
this.sx = map(this.x/this.z,0,1,0,width);
this.sy = map(this.y/this.z,0,1,0,height);

this.Full = 0;
this.A = D;
this.B = E;
this.C = F;



this.display = function () {
	var Col = [
	color(255, 0, 8),
	color(255, 187, 0),
	color(250, 255, 0),
	color(50, 255, 0),
	color(2, 175, 255),
	color(216, 0, 202),
	color(255, 10, 189),
	];
	this.ScaleAmount = 6;
	stroke(255);
	fill(this.A,this.B,this.C);
	ellipse(this.sx,this.sy,this.Xscale,this.Yscale);
	
	
		this.Xscale += this.ScaleAmount;
		this.Yscale += this.ScaleAmount;
	
	
	
}
}
