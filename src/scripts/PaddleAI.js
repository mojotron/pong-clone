function PaddleAI() {
  const parentElement = document.querySelector('.paddle--right');
  const speed = 0.6;
  const getY = () =>
    parseFloat(getComputedStyle(parentElement).getPropertyValue('top'));

  const setY = value => {
    parentElement.style.setProperty('top', `${value}px`);
  };

  const update = (deltaTime, ballY, direction) => {
    if (direction < 0) return;
    if (ballY > getY()) {
      setY(getY() + speed * deltaTime);
    } else {
      setY(getY() - speed * deltaTime);
    }
  };

  const getRect = () => parentElement.getBoundingClientRect();
  return { update, getRect };
}

export default PaddleAI();
