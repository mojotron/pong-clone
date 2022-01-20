import '../styles/reset.css';
import '../styles/main.css';

// ball physics
const ballElement = document.querySelector('.ball');
const ballRect = ballElement.getBoundingClientRect();

let deltaX = 500;
let deltaY = 500;

const getX = () =>
  parseFloat(getComputedStyle(ballElement).getPropertyValue('left'));

const getY = () =>
  parseFloat(getComputedStyle(ballElement).getPropertyValue('top'));

const setX = () =>
  ballElement.style.setProperty('left', `${getX() + deltaX}px`);

const setY = () => ballElement.style.setProperty('top', `${getY() + deltaY}px`);

function temp() {
  if (getX() + ballRect.width > window.innerWidth) {
    deltaX *= -1;
    ballElement.style.left = `${window.innerWidth - ballRect.width}px`;
  }
  if (getX() - ballRect.width < 0) {
    deltaX *= -1;
    ballElement.style.left = `${0 + ballRect.width}px`;
  }
  if (getY() + ballRect.height > window.innerHeight) {
    deltaY *= -1;
    ballElement.style.top = `${window.innerHeight - ballRect.height}px`;
  }
  if (getY() - ballRect.height < 0) {
    deltaY *= -1;
    ballElement.style.top = `${0 + ballRect.height}px`;
  }
  setX();
  setY();
  requestAnimationFrame(temp);
}
requestAnimationFrame(temp);
// ballElement.style.left = `${window.innerWidth - ballRect.width / 2}px`;
// ballElement.style.left = `${0 + ballRect.width / 2}px`;
// ballElement.style.top = `${window.innerHeight - ballRect.height / 2}px`;
// ballElement.style.top = `${0 + ballRect.height / 2}px`;
