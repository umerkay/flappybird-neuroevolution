class Bird {

	constructor(x,y,size,brain,fillColor) {
		this.pos = createVector(x,y);
		this.vel = createVector(0,0);
		// this.vel = p5.Vector.random2D().mult(5);
		this.acc = createVector(0,0);

		this.size = size || 20;
		this.mass = this.size/30;
		this.jumpForce = createVector(0,-7);
		this.color = fillColor || color(random(255),random(255),random(255));

		if(brain instanceof NeuralNetwork) {
			brain.mutate(x=>x+random(-0.05,0.05));
		}
		this.brain = brain || new NeuralNetwork(5,5,2);
	}

	update() {
	
		this.applyForce(gravity);

		if(this.vel.y < -10) {
			this.vel.y = -10;
		}
		if(this.vel.y > 10) {
			this.vel.y = 10;
		}

		this.vel.add(this.acc);
		this.pos.add(this.vel);

		if(this.pos.y > height) {
			return false;
		}
		for(var i = 0; i < pipes.length; i++) {
			if(pipes[i].isColliding(this)) {
				return false;
			}
		}

		this.vel.x = cam.vel.x;

		this.acc.mult(0);
	}

	think() {

		let inputs = [];

		var closestP = null;
		var closestD = Infinity;
		for (var i = pipes.length - 1; i >= 0; i--) {
			let D = pipes[i].pos.x - this.pos.x;
			if(D > -pipes[i].width && D < closestD) {
				closestD = D;
				closestP = pipes[i];
			}
		}
		// rect(closestP.pos.x-cam.pos.x+20,90,5,20);

		inputs[0] = (this.pos.y/height);
		inputs[1] = closestP.start/height;
		inputs[2] = (closestP.start+closestP.gap)/height;
		inputs[3] = ((closestP.pos.x-cam.pos.x)%width) / width;
		inputs[4] = (this.vel.y/10);

		let out = this.brain.predict(inputs);
		
		if(out[0] > out[1]) {
			this.jump();
		}
	}

	draw() {
		
		push();
		stroke(this.color);
		// noFill();
		translate(this.pos.x - cam.pos.x, this.pos.y - cam.pos.y);
		rotate(this.vel.heading() + PI/2);
		triangle(-this.size/2,this.size/2, 0, -this.size, this.size/2, this.size/2);
		pop();
		fill(this.color);
		ellipse(this.pos.x - cam.pos.x, this.pos.y - cam.pos.y, 5,5);
	}

	jump() {

		if(this.pos.y > 0) {
			this.applyForce(this.jumpForce);
		}
	}

	applyForce(force) {

		this.acc.add(p5.Vector.div(force, this.mass));
	}
}

//more input nodes
//visualisation better
//different jump strengths, sizes