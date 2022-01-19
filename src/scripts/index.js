import '../styles/reset.css';
import '../styles/main.css';

// ball physics
const ballElement = document.querySelector('.ball');

let speed = 1;
let deltaX = 20;
let deltaY = 20;

const getX = () =>
  parseFloat(getComputedStyle(ballElement).getPropertyValue('left'));

const getY = () =>
  parseFloat(getComputedStyle(ballElement).getPropertyValue('top'));

const setX = () =>
  ballElement.style.setProperty('left', `${getX() + deltaX * speed}px`);

const setY = () =>
  ballElement.style.setProperty('top', `${getY() + deltaY * speed}px`);

console.log(getX(), getY());

setInterval(() => {
  if (getX() > window.innerWidth || getX() < 0) {
    deltaX *= -1;
    if (speed < 5) speed += 0.1;
  }
  if (getY() > window.innerHeight || getY() < 0) {
    deltaY *= -1;
    if (speed < 5) speed += 0.1;
  }

  setX();
  setY();
}, 200);
