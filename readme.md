# Flappy Bird AI Simulation

This project is a simulation of the popular and simple game, Flappy Bird, implemented in JavaScript using the p5.js library. The objective of this project is to train an AI agent to play Flappy Bird by using a genetic algorithm and a neural network, both implemented from scratch.

## Game Description

Flappy Bird is a side-scrolling game where the player controls a bird, represented by a small sprite, attempting to navigate through a series of pipes without colliding with them. The bird continuously moves forward, and the player can make the bird flap its wings to ascend and avoid obstacles. Each successfully passed pipe earns the player a point, and the game ends if the bird collides with a pipe or the ground.

## AI Agent

The AI agent in this project learns to play Flappy Bird through a genetic algorithm. The agent is represented by a neural network that takes inputs representing the game state, such as the bird's position and the distances to the pipes, and produces an output representing the action to be taken (flap or not flap). The genetic algorithm is used to evolve a population of AI agents over generations, with the goal of improving their performance in the game.

## Genetic Algorithm

The genetic algorithm consists of the following steps:

1. **Initialization**: A population of AI agents is randomly generated, each with its own neural network.

2. **Evaluation**: Each AI agent is evaluated by simulating the game using its neural network to determine its fitness. The fitness is typically based on the number of pipes successfully passed or the distance traveled.

3. **Selection**: AI agents with higher fitness have a higher probability of being selected as parents for the next generation. Various selection strategies can be used, such as tournament selection or roulette wheel selection.

4. **Mutation**: Mutation is applied to introduce random changes in the offspring's neural networks. Random mutations help explore new areas of the search space.

5. **Replacement**: The new offspring replace a portion of the previous generation. This process ensures that the population evolves over time.

6. **Repeat**: Steps 2-6 are repeated for multiple generations until the AI agents demonstrate improved performance in playing Flappy Bird.

## Dependencies and Usage

This project is implemented using JavaScript and utilizes the p5.js library for rendering the game and handling user input. To run the project, follow these steps:

1. Clone the repository to your local machine.

2. Open the `index.html` file in your web browser.

3. The simulation will start automatically, and you can observe the AI agent learning to play Flappy Bird.

## Acknowledgments

This project was inspired by the original Flappy Bird game and the concept of training AI agents using genetic algorithms. The implementation of the genetic algorithm and neural network in JavaScript is based on various resources and tutorials available online.