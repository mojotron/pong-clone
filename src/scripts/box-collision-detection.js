export default function boxesCollide(boxA, boxB) {
  // function take to getBoundingClientRect-s
  return (
    boxA.left <= boxB.right &&
    boxA.right >= boxB.left &&
    boxA.top <= boxB.bottom &&
    boxA.bottom >= boxB.top
  );
}
