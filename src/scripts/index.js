import '../styles/reset.css';
import '../styles/main.css';

// ball physics
const ballElement = document.querySelector('.ball');
const ballRect = ballElement.getBoundingClientRect();

// const numberBetweenRange = (min, max, float = false) => {
//   const number = Math.random() * (max - min) + min;
//   return float ? Math.floor(number) : number;
// };

let moveX = 300;
let moveY = 300;

const getX = () =>
  parseFloat(getComputedStyle(ballElement).getPropertyValue('left'));

const getY = () =>
  parseFloat(getComputedStyle(ballElement).getPropertyValue('top'));

const setX = () => ballElement.style.setProperty('left', `${getX() + moveX}px`);

const setY = () => ballElement.style.setProperty('top', `${getY() + moveY}px`);

const updateBallPosition = () => {
  if (getX() + ballRect.width > window.innerWidth) {
    ballElement.style.left = `${window.innerWidth - ballRect.width}px`;
    moveX = -Math.abs(moveX);
  }
  if (getX() - ballRect.width < 0) {
    ballElement.style.left = `${0}px`;
    moveX = Math.abs(moveX);
  }
  if (getY() + ballRect.height > window.innerHeight) {
    ballElement.style.top = `${window.innerHeight - ballRect.height}px`;
    moveY = -Math.abs(moveY);
  }
  if (getY() - ballRect.height < 0) {
    ballElement.style.top = `${0}px`;
    moveY = Math.abs(moveY);
  }
  setX();
  setY();

  window.requestAnimationFrame(updateBallPosition);
};

window.requestAnimationFrame(updateBallPosition);

// paddle
const paddleLeft = document.querySelector('.paddle--left');
const paddleRight = document.querySelector('.paddle--right');

const movePaddleUp = paddleElement => {
  const paddleRect = paddleElement.getBoundingClientRect();
  const current = parseFloat(
    getComputedStyle(paddleElement).getPropertyValue('top')
  );
  if (current - paddleRect.height / 2 < 0) return;
  paddleElement.style.setProperty('top', `${current - 30}px`);
};

const movePaddleDown = paddleElement => {
  const paddleRect = paddleElement.getBoundingClientRect();
  const current = parseFloat(
    getComputedStyle(paddleElement).getPropertyValue('top')
  );
  if (current + paddleRect.height / 2 > window.innerHeight) return;
  paddleElement.style.setProperty('top', `${current + 30}px`);
};

window.addEventListener('keydown', e => {
  if (e.key === 'w') movePaddleUp(paddleLeft);
  if (e.key === 's') movePaddleDown(paddleLeft);
  if (e.key === 'ArrowUp') movePaddleUp(paddleRight);
  if (e.key === 'ArrowDown') movePaddleDown(paddleRight);
});
