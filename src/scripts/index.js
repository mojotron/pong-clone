import '../styles/reset.css';
import '../styles/main.css';

import Ball from './Ball';
import PaddleAI from './PaddleAI';

const paddleLeft = document.querySelector('.paddle--left');

let prevTimestamp;

function updateScreen(timestamp) {
  if (prevTimestamp !== undefined) {
    const deltaTime = timestamp - prevTimestamp;
    // update moving elements;
    Ball.update(deltaTime, PaddleAI.getRect(), paddleLeft);
    PaddleAI.update(deltaTime, Ball.getY(), Ball.direction.x);
  }
  prevTimestamp = timestamp;
  window.requestAnimationFrame(updateScreen);
}

window.requestAnimationFrame(updateScreen);

document.body.addEventListener('mousemove', e => {
  paddleLeft.style.top = `${e.y}px`;
});
