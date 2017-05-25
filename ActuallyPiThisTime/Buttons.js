//Functions Used To Create Each Colored Circle 
 function PiA() {
	this.Speed = random(1,5);
	this.x = random(10,590);
	this.y = 10;

	this.display = function () {
		stroke(255);
		fill(255,0,43);
		ellipse(this.x,this.y,10,10);
	}
	
	this.move = function() {
		this.y = this.y + this.Speed;
		if(this.y > 500) {
			this.Speed  = random(-1,-5);
		}
		else if (this.y < 0) {
			this.Speed = random(1,5);
		}
	}
 }
 
 function PiB() {
	this.Speed = random(1,5);
	this.x = random(0,590);
	this.y = 10;

	this.display = function () {
		stroke(255);
		fill(64,255,0);
		ellipse(this.x,this.y,10,10);
		
	}
	
	this.move = function() {
		this.y = this.y + this.Speed;
		if(this.y > 500) {
			this.Speed  = random(-1,-5);
		}
		else if (this.y < 0) {
			this.Speed = random(1,5);
		}
	}
	 
 }
 
 function PiC() {
	 this.Speed = random(1,5);
	this.x = random(0,590);
	this.y = 10;

	this.display = function () {
		stroke(255);
		fill(0,13,255);
		ellipse(this.x,this.y,10,10);
		
	}
	
	this.move = function() {
		this.y = this.y + this.Speed;
		if(this.y > 500) {
			this.Speed  = random(-1,-5);
		}
		else if (this.y < 0) {
			this.Speed = random(1,5);
		}
	}
	 
 }
 
 function PiD() {
	this.Speed = random(1,5);
	this.x = random(0,590);
	this.y = 10;

	this.display = function () {
		stroke(255);
		fill(255,255,0);
		ellipse(this.x,this.y,10,10);
		
	}
	
	this.move = function() {
		this.y = this.y + this.Speed;
		if(this.y > 500) {
			this.Speed  = random(-1,-5);
		}
		else if (this.y < 0) {
			this.Speed = random(1,5);
		}
	}
	 
 }
 
 function PiE() {
	 this.Speed = random(1,5);
	this.x = random(0,590);
	this.y = 10;

	this.display = function () {
		stroke(255);
		fill(255,140,0);
		ellipse(this.x,this.y,10,10);
		
	}
	
	this.move = function() {
		this.y = this.y + this.Speed;
		if(this.y > 500) {
			this.Speed  = random(-1,-5);
		}
		else if (this.y < 0) {
			this.Speed = random(1,5);
		}
	}
	 
 }
 
 function PiF() {
	 this.Speed = random(1,5);
	this.x = random(0,590);
	this.y = 10;

	this.display = function () {
		stroke(255);
		fill(0,238,255);
		ellipse(this.x,this.y,10,10);
		
	}
	
	this.move = function() {
		this.y = this.y + this.Speed;
		if(this.y > 500) {
			this.Speed  = random(-1,-5);
		}
		else if (this.y < 0) {
			this.Speed = random(1,5);
		}
	}
	 
 }
 
 function PiG() {
	 this.Speed = random(1,5);
	this.x = random(0,590);
	this.y = 10;

	this.display = function () {
		stroke(255);
		fill(190,0,255);
		ellipse(this.x,this.y,10,10);
		
	}
	
	this.move = function() {
		this.y = this.y + this.Speed;
		if(this.y > 500) {
			this.Speed  = random(-1,-5);
		}
		else if (this.y < 0) {
			this.Speed = random(1,5);
		}
	}
	 
 }
