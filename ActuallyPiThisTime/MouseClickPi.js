function RandomChain (mx,my) {
	
	this.Speed = random(-3,3);
	this.x = mx;
	this.y = my;

	this.display = function () {
		stroke(255);
		fill(255,0,43);
		ellipse(this.x,this.y,10,10);
	}
	
	// this.move = function() {
		// this.x = this.y + this.Speed;
		// if(this.x > 500) {
			// this.Speed  = random(-1,-5);
		// }
		// else if (this.x < 0) {
			// this.Speed = random(1,5);
		// }
	// }
}