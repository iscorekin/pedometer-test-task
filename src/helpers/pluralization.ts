const pluralization = (
  value: number,
  one: string,
  some: string,
  lot: string
) => {
  let val = Math.abs(value) % 100;
  if (val > 20) val %= 10;
  if (val === 1) return one;
  if (val > 1 && val < 5) return some;
  return lot;
};

export default pluralization;
