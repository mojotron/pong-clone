function PaddleAI() {
  const parentElement = document.querySelector('.paddle--right');

  // const getY = () =>
  //   parseFloat(getComputedStyle(parentElement).getPropertyValue('top'));

  const setY = value => {
    parentElement.style.setProperty('top', `${value}px`);
  };

  const update = (deltaTime, ballY) => {
    setY(ballY);
  };

  const getRect = () => parentElement.getBoundingClientRect();
  return { update, getRect };
}

export default PaddleAI();
