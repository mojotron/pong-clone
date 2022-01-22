import '../styles/reset.css';
import '../styles/main.css';

import Ball from './Ball';

let prevTimestamp;
const ball = document.querySelector('.ball');
const paddleLeft = document.querySelector('.paddle--left');
const paddleRight = document.querySelector('.paddle--right');

function updateScreen(timestamp) {
  if (prevTimestamp !== undefined) {
    const deltaTime = timestamp - prevTimestamp;
    // update moving elements;
    Ball.update(deltaTime);
    paddleRight.style.top = `${
      parseFloat(getComputedStyle(ball).getPropertyValue('top')) * 0.9
    }px`;
  }
  prevTimestamp = timestamp;
  window.requestAnimationFrame(updateScreen);
}

window.requestAnimationFrame(updateScreen);

document.body.addEventListener('mousemove', e => {
  paddleLeft.style.top = `${e.y}px`;
});
