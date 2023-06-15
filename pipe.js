class Pipe {

	constructor(x,w) {

		this.pos = createVector(x, 0);
		this.width = w;
		this.height = height;
		this.gap = 100;
		this.start = random(this.gap/4, height-(5/4)*this.gap);
	}

	draw() {
		fill(200);
		rect(this.pos.x - cam.pos.x,this.pos.y,this.width,this.start);
		rect(this.pos.x - cam.pos.x,this.start + this.gap,this.width,this.height);
	}

	update() {
		if(this.pos.x - cam.pos.x + this.width< 0) {
			this.pos.x += width;
			this.start = random(this.gap/4, height-(5/4)*this.gap);
		}
	}

	isColliding(bird) {
		if(bird.pos.x > this.pos.x && bird.pos.x < this.pos.x + this.width && (bird.pos.y < this.start || bird.pos.y > this.start + this.gap)) {
			return true;			
		}
	}
}