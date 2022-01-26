import '../styles/reset.css';
import '../styles/main.css';

import Ball from './Ball';
import PaddleAI from './PaddleAI';

const paddleLeft = document.querySelector('.paddle--left');
const scorePlayer = document.querySelector('.score__player');
const scoreComputer = document.querySelector('.score__computer');

function updateScore(element) {
  const currentScore = parseInt(element.textContent, 10);
  element.textContent = currentScore + 1;
  Ball.reset();
}

function isGameOver(ballX) {
  if (ballX <= 0) updateScore(scoreComputer);
  if (ballX >= window.innerWidth) updateScore(scorePlayer);
}

let prevTimestamp;

function updateScreen(timestamp) {
  if (prevTimestamp !== undefined) {
    const deltaTime = timestamp - prevTimestamp;
    // update moving elements;
    Ball.update(deltaTime, PaddleAI.getRect(), paddleLeft);
    PaddleAI.update(deltaTime, Ball.getY(), Ball.direction.x);
    isGameOver(Ball.getX());
  }
  prevTimestamp = timestamp;
  window.requestAnimationFrame(updateScreen);
}

window.requestAnimationFrame(updateScreen);

document.body.addEventListener('mousemove', e => {
  paddleLeft.style.top = `${e.y}px`;
});
