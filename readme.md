<!-- Snake Game
This is a simple Snake Game implemented using HTML, CSS, and JavaScript.

How to Play
Objective: Control the snake to eat the food and avoid collisions with the walls or itself.
Controls: Use the arrow keys to change the direction of the snake.
Up arrow: Move the snake upwards.
Down arrow: Move the snake downwards.
Left arrow: Move the snake to the left.
Right arrow: Move the snake to the right.
Game Over: The game ends if the snake collides with the walls or itself.
Scoring: Each time the snake eats the food, its length increases by one.
Files
HTML (index.html)
The HTML file defines the structure of the game. It contains a heading indicating the game's title and a container for the game board.

CSS (style.css)
The CSS file styles the game components, including the game board, snake, food, and overall layout.

JavaScript (script.js)
The JavaScript file contains the game logic. It handles the movement of the snake, generation of food, collision detection, and game over conditions.

How the Game Works
Initialization: The game initializes by setting up the initial positions of the snake and food.

Game Loop: The game runs in a continuous loop using setInterval, where the startGame function is called repeatedly at a fixed interval.

Snake Movement: The snake moves based on the user's input (arrow keys). It can move up, down, left, or right.

Food Generation: The food appears at random positions on the game board. When the snake eats the food, its length increases, and a new food item spawns at a different location.

Collision Detection: The game checks for collisions between the snake and the walls or itself. If a collision occurs, the game ends, and a "Game Over" message is displayed.

Game Over: When the game ends, the handleGameOver function is called, which stops the game loop and prompts the user with a message. The game can be restarted by reloading the page.

How to Run
To play the game:

Download or clone the repository.
Open the index.html file in a web browser. -->