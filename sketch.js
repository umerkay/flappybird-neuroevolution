function setup() {

	createCanvas(500,500);

	speed = createSlider(1,200,10,1);

	gravity = createVector(0,0.9);

	birds = [];
	birds.size = 20;
	birds.gen = 0;
	birds.number = 100;
	birds.best = 0;
	for (var i = 0; i < birds.number; i++) {
		birds.push(new Bird(width/2, height/2, birds.size));
	}
	birds.archive = birds.slice(0);

	pipes = [];
	pipes.number = 3;
	pipes.width = 20;
	for(var i = 0; i < pipes.number; i++) {
		pipes.push(new Pipe(width/2 + i*width/pipes.number - pipes.width/2 + 200, pipes.width));
	}

	cam = {
		pos: createVector(0, 0),
		vel: createVector(2,0)
	}
}

function draw() {
  
	background(255);
	for(var j = speed.value(); j >= 0; j--) {
		cam.pos.add(cam.vel);

		for (var i = birds.length - 1; i >= 0; i--) {
			birds[i].think();
			if(birds[i].update() == false) {
				birds.splice(i,1);
				continue;
			}
			if(j == 0) birds[i].draw();
		}

		for (let pipe of pipes) {
			pipe.update();
			if(j == 0) pipe.draw();
		}

		if(birds.length == 0) {
			nextGen();
		}

		if(random(1) < 0.05) {
			cam.vel.x += 0.001;
		}
	}

	text(speed.value() + 'x',20,20);
	text('Score: ' + max(0,floor((cam.pos.x-200)/width*4+1)),20,40);
	text('Size: ' + birds.length,20,60);
	text('Gen: ' + birds.gen,20,80);
	text('Best Score: ' + birds.best,20,100);
	text('Cam Speed: ' + floor(cam.vel.x*100)/100,20,120);
}

// function keyPressed(key) {
// 	if(key.keyCode == 32) {
// 		if(birds[0].pos.y > 0)
// 		birds[0].jump();
// 	}
// }