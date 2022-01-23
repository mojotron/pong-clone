// ball physics
function Ball() {
  const numberBetweenRange = (min, max, float = false) => {
    const number = Math.random() * (max - min) + min;
    return float ? Math.floor(number) : number;
  };

  const temp = numberBetweenRange.bind(this, 0.5, 1);
  const polarity = () => (Math.random() >= 0.5 ? 1 : -1);

  let velocity = 0.2;
  const direction = { x: temp() * polarity(), y: temp() * polarity() };
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

    if (ballRect.right >= paddleAiRect.left) {
      ballElement.style.left = `${paddleAiRect.left - ballRect.width}px`;
      direction.x = -Math.abs(temp());
      velocity += 0.01;
    }
    if (ballRect.left <= paddlePlayerRect.right) {
      ballElement.style.left = `${paddlePlayerRect.right + ballRect.width}px`;
      direction.x = Math.abs(temp());
      velocity += 0.01;
    }
    if (ballRect.right >= window.innerWidth) {
      ballElement.style.left = `${0 - ballRect.width}px`;
      direction.x = -Math.abs(temp());
      velocity += 0.01;
    }
    if (ballRect.left <= 0) {
      ballElement.style.left = `${0 + ballRect.width}px`;
      direction.x = Math.abs(temp());
      velocity += 0.01;
    }
    if (ballRect.bottom >= window.innerHeight) {
      ballElement.style.top = `${window.innerHeight - ballRect.height}px`;
      direction.y = -Math.abs(temp());
      velocity += 0.01;
    }
    if (ballRect.top <= 0) {
      ballElement.style.top = `${0 + ballRect.height}px`;
      direction.y = Math.abs(temp());
      velocity += 0.01;
    }
  };

  return { update, getY };
}

export default Ball();
