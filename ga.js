function nextGen() {
	
	if(max(0,floor((cam.pos.x-200)/width*4+1)) > birds.best) {
		birds.best = max(0,floor((cam.pos.x-200)/width*4+1));
	}

	calcFitness(birds.archive);
	
	for (var i = 0; i < birds.number; i++) {
		let parent = pickOne(birds.archive);
		birds[i] = new Bird(width/2, height/2, birds.size, parent.brain.copy(), parent.color);
	}
	birds.archive = birds.slice(0);

	for(var i = 0; i < pipes.number; i++) {
		pipes[i] = new Pipe(width/2 + i*width/pipes.number - pipes.width/2 + 200, pipes.width);
	}

	cam = {
		pos: createVector(0, 0),
		vel: createVector(2,0)
	}
	birds.gen++;
}

function calcFitness(entities) {

	var total = 0;
	for (let entity of entities) {
		total += entity.pos.x;
	}
	for (let entity of entities) {
		entity.fitness = entity.pos.x/total;
	}
}

function pickOne(a) {

	var index = 0;
	var r = random(1);

	while(r > 0) {

		r -= a[index].fitness;
		index++;
	}

	index--;
	return a[index];
}