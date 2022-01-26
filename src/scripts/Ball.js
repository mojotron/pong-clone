import boxesCollide from './box-collision-detection';

function Ball() {
  const numberBetweenRange = (min, max, float = false) => {
    const number = Math.random() * (max - min) + min;
    return float ? Math.floor(number) : number;
  };

  const setDirection = numberBetweenRange.bind(this, 0.5, 1);
  const polarity = () => (Math.random() >= 0.5 ? 1 : -1);

  let velocity = 0.45;
  const direction = {
    x: setDirection() * polarity(),
    y: setDirection() * polarity(),
  };
  const ballElement = document.querySelector('.ball');

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
    velocity = 0.45;
    direction.x = setDirection() * polarity();
    direction.y = setDirection() * polarity();
    ballElement.style.top = '50%';
    ballElement.style.left = '50%';
  };

  return { update, getX, getY, reset, direction };
}

export default Ball();
