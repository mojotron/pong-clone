// ball
const ballElement = document.querySelector('.ball');

const setDirection = () => Math.random() >= 0.5;
const addPath = () => Math.floor(Math.random() * 2);

let speed = 1;
let positionX = 50;
let positionY = 50;

let directionX = setDirection();
let directionY = setDirection();

let addX = addPath();
let addY = addPath();

setInterval(() => {
  if (positionX >= 98) {
    directionX = false;
    addX = addPath();
    addY = addPath();
    if (speed < 5) speed += 0.1;
  }
  if (positionY >= 98) {
    directionY = false;
    addX = addPath();
    addY = addPath();
    if (speed < 5) speed += 0.1;
  }
  if (positionX <= 1) {
    directionX = true;
    addX = addPath();
    addY = addPath();
    if (speed < 5) speed += 0.1;
  }
  if (positionY <= 1) {
    directionY = true;
    addX = addPath();
    addY = addPath();
    if (speed < 5) speed += 0.1;
  }
  ballElement.style.left = `${positionX}%`;
  ballElement.style.top = `${positionY}%`;

  positionX += directionX ? +addX + speed : -addX - speed;
  positionY += directionY ? +addY + speed : -addY - speed;
}, 100);
