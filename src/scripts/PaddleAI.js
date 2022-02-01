import { AI_PADDLE_SPEED } from './config';

function PaddleAI() {
  const parentElement = document.querySelector('.paddle--right');
  const speed = AI_PADDLE_SPEED;

  const getY = () =>
    parseFloat(getComputedStyle(parentElement).getPropertyValue('top'));

  const setY = value => {
    parentElement.style.setProperty('top', `${value}px`);
  };

  const update = (deltaTime, ballPositionY, ballDirectionX) => {
    if (ballDirectionX < 0) return; // if ball is flying toward player stop moving ai paddle
    let currentY = getY();
    setY((currentY += speed * deltaTime * (ballPositionY - getY())));
  };

  const getRect = () => parentElement.getBoundingClientRect();

  return { update, getRect };
}

export default PaddleAI();
