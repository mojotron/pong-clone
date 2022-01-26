function PaddleAI() {
  const parentElement = document.querySelector('.paddle--right');
  const speed = 0.009;
  const getY = () =>
    parseFloat(getComputedStyle(parentElement).getPropertyValue('top'));

  const setY = value => {
    parentElement.style.setProperty('top', `${value}px`);
  };

  const update = (deltaTime, ballPositionY, ballDirectionX) => {
    if (ballDirectionX < 0) return;
    let currentY = getY();
    setY((currentY += speed * deltaTime * (ballPositionY - getY())));
  };

  const getRect = () => parentElement.getBoundingClientRect();
  return { update, getRect };
}

export default PaddleAI();
