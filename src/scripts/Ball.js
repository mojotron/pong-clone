import boxesCollide from './box-collision-detection';
import { BALL_VELOCITY } from './config';
import { numberBetweenRange, polarity } from './helpers';

function Ball() {
  const ballElement = document.querySelector('.ball');

  const setDirection = numberBetweenRange.bind(this, 0.5, 1);
  // combination setDirection + polarity is to send initial bol to random direction
  let velocity = BALL_VELOCITY;
  const direction = {
    x: setDirection() * polarity(),
    y: setDirection() * polarity(),
  };

  const getX = () =>
    parseFloat(getComputedStyle(ballElement).getPropertyValue('left'));

  const setX = value =>
    ballElement.style.setProperty(
      'left',
      `${getX() + value * velocity * direction.x}px`
    );

  const getY = () =>
    parseFloat(getComputedStyle(ballElement).getPropertyValue('top'));

  const setY = value =>
    ballElement.style.setProperty(
      'top',
      `${getY() + value * velocity * direction.y}px`
    );

  const update = (deltaTime, paddleAiRect, paddlePlayer) => {
    const ballRect = ballElement.getBoundingClientRect();
    const paddlePlayerRect = paddlePlayer.getBoundingClientRect();
    setX(deltaTime);
    setY(deltaTime);

    // after ball hits top/bottom wall or paddle we set ball to inner screen
    // boundaries to avoid bug when ball get stack in the wall when ball dimension
    // is greater then screen or paddle dimension
    if (boxesCollide(ballRect, paddleAiRect)) {
      ballElement.style.left = `${paddleAiRect.left - ballRect.width}px`;
      direction.x = -Math.abs(setDirection());
      velocity += 0.01;
    }
    if (boxesCollide(ballRect, paddlePlayerRect)) {
      ballElement.style.left = `${paddlePlayerRect.right + ballRect.width}px`;
      direction.x = Math.abs(setDirection());
      velocity += 0.01;
    }
    if (ballRect.bottom >= window.innerHeight) {
      ballElement.style.top = `${window.innerHeight - ballRect.height}px`;
      direction.y = -Math.abs(setDirection());
      velocity += 0.01;
    }
    if (ballRect.top <= 0) {
      ballElement.style.top = `${0 + ballRect.height}px`;
      direction.y = Math.abs(setDirection());
      velocity += 0.01;
    }
  };

  const reset = () => {
    velocity = BALL_VELOCITY;
    direction.x = setDirection() * polarity();
    direction.y = setDirection() * polarity();
    ballElement.style.top = '50%';
    ballElement.style.left = '50%';
  };

  return { update, getX, getY, reset, direction };
}

export default Ball();
