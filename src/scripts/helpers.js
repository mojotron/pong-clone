export const numberBetweenRange = (min, max, float = false) => {
  const number = Math.random() * (max - min) + min;
  return float ? Math.floor(number) : number;
};

export const polarity = () => (Math.random() >= 0.5 ? 1 : -1);
