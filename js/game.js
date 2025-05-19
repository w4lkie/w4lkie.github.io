const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score-display');
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');

const upBtn = document.getElementById('up-btn');
const downBtn = document.getElementById('down-btn');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

const gridSize = 20;
const tileCount = canvas.width / gridSize;
let score = 0;
let gameRunning = false;
let gameSpeed = 100;
let gameLoop;

let snake = [{ x: 10, y: 10 }];
let velocityX = 0;
let velocityY = 0;
let nextVelocityX = 0;
let nextVelocityY = 0;

let foodX = 5;
let foodY = 5;

function initGame() {
  snake = [{ x: 10, y: 10 }];
  velocityX = 0;
  velocityY = 0;
  nextVelocityX = 0;
  nextVelocityY = 0;
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  placeFood();

  if (gameLoop) clearInterval(gameLoop);
  gameRunning = true;
  gameLoop = setInterval(updateGame, gameSpeed);
}

function placeFood() {
  foodX = Math.floor(Math.random() * tileCount);
  foodY = Math.floor(Math.random() * tileCount);

  for (let segment of snake) {
    if (segment.x === foodX && segment.y === foodY) {
      placeFood();
      return;
    }
  }
}

function updateGame() {
  velocityX = nextVelocityX;
  velocityY = nextVelocityY;

  const head = { x: snake[0].x + velocityX, y: snake[0].y + velocityY };

  if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
    gameOver();
    return;
  }

  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      gameOver();
      return;
    }
  }

  snake.unshift(head);

  if (head.x === foodX && head.y === foodY) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    if (score % 5 === 0) {
      gameSpeed = Math.max(50, gameSpeed - 5);
      clearInterval(gameLoop);
      gameLoop = setInterval(updateGame, gameSpeed);
    }
    placeFood();
  } else {
    snake.pop();
  }

  drawGame();
}

function drawGame() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'red';
  ctx.fillRect(foodX * gridSize, foodY * gridSize, gridSize, gridSize);

  ctx.fillStyle = 'lime';
  for (let segment of snake) {
    ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
  }

  ctx.strokeStyle = '#333';
  ctx.lineWidth = 0.5;
  for (let i = 0; i < tileCount; i++) {
    ctx.beginPath();
    ctx.moveTo(i * gridSize, 0);
    ctx.lineTo(i * gridSize, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, i * gridSize);
    ctx.lineTo(canvas.width, i * gridSize);
    ctx.stroke();
  }
}

function gameOver() {
  clearInterval(gameLoop);
  gameRunning = false;
  startScreen.style.display = 'flex';
}

startBtn.addEventListener('click', function () {
  startScreen.style.display = 'none';
  initGame();
});

document.addEventListener('keydown', function (e) {
  if (!gameRunning) return;

  switch (e.key) {
    case 'ArrowUp':
      if (velocityY !== 1) {
        nextVelocityX = 0;
        nextVelocityY = -1;
      }
      break;
    case 'ArrowDown':
      if (velocityY !== -1) {
        nextVelocityX = 0;
        nextVelocityY = 1;
      }
      break;
    case 'ArrowLeft':
      if (velocityX !== 1) {
        nextVelocityX = -1;
        nextVelocityY = 0;
      }
      break;
    case 'ArrowRight':
      if (velocityX !== -1) {
        nextVelocityX = 1;
        nextVelocityY = 0;
      }
      break;
  }
});

upBtn.addEventListener('click', function () {
  if (gameRunning && velocityY !== 1) {
    nextVelocityX = 0;
    nextVelocityY = -1;
  }
});

downBtn.addEventListener('click', function () {
  if (gameRunning && velocityY !== -1) {
    nextVelocityX = 0;
    nextVelocityY = 1;
  }
});

leftBtn.addEventListener('click', function () {
  if (gameRunning && velocityX !== 1) {
    nextVelocityX = -1;
    nextVelocityY = 0;
  }
});

rightBtn.addEventListener('click', function () {
  if (gameRunning && velocityX !== -1) {
    nextVelocityX = 1;
    nextVelocityY = 0;
  }
});

let touchStartX = 0;
let touchStartY = 0;

canvas.addEventListener('touchstart', function (e) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
  e.preventDefault();
}, { passive: false });

canvas.addEventListener('touchmove', function (e) {
  if (!gameRunning) return;

  const touchEndX = e.touches[0].clientX;
  const touchEndY = e.touches[0].clientY;

  const dx = touchEndX - touchStartX;
  const dy = touchEndY - touchStartY;

  if (Math.abs(dx) > Math.abs(dy)) {
    if (dx > 0 && velocityX !== -1) {
      nextVelocityX = 1;
      nextVelocityY = 0;
    } else if (dx < 0 && velocityX !== 1) {
      nextVelocityX = -1;
      nextVelocityY = 0;
    }
  } else {
    if (dy > 0 && velocityY !== -1) {
      nextVelocityX = 0;
      nextVelocityY = 1;
    } else if (dy < 0 && velocityY !== 1) {
      nextVelocityX = 0;
      nextVelocityY = -1;
    }
  }

  e.preventDefault();
}, { passive: false });

drawGame();
