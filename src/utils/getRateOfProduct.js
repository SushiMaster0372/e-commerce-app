export const getRateOfProduct = (rate) => {
  const starsNumber = [];
  const filled = Math.round(Number(rate));
  const empty = 5 - filled;

  for (let i = 0; i < filled; i++) {
    starsNumber.push(true);
  }
  for (let i = 0; i < empty; i++) {
    starsNumber.push(false);
  }

  return starsNumber;
};
