script.js

const hen = document.getElementById("hen");
const snake = document.getElementById("snake");
const exitGate = document.getElementById("exitGate");
const message = document.getElementById("message");

const staminaText = document.getElementById("stamina");
const coinsText = document.getElementById("coins");

let henX = 50;
let snakeX = window.innerWidth - 250;
let stamina = 100;
let coins = 0;
let gameOver = false;

function updatePositions() {
  hen.style.left = henX + "px";
  snake.style.left = snakeX + "px";

  staminaText.textContent = stamina;
  coinsText.textContent = coins;
}

function checkCollision() {
  if (Math.abs(henX - snakeX) < 70) {
    message.innerHTML = "GAME OVER - Snake Caught You!";
    gameOver = true;
  }

  if (henX > window.innerWidth - 180) {
    message.innerHTML = "YOU ESCAPED THE CITY!";
    gameOver = true;
  }
}

function moveForward() {
  if (gameOver) return;

  henX += 25;
  stamina -= 1;
  coins += 1;

  snakeX -= 10;

  updatePositions();
  checkCollision();
}

function moveBackward() {
  if (gameOver) return;

  henX -= 25;

  if (henX < 0) {
    henX = 0;
  }

  snakeX -= 5;

  updatePositions();
  checkCollision();
}

setInterval(() => {
  if (!gameOver) {
    snakeX -= 2;
    updatePositions();
    checkCollision();
  }
}, 100);


document.getElementById("rightBtn").addEventListener("click", moveForward);
document.getElementById("leftBtn").addEventListener("click", moveBackward);

updatePositions();
---









