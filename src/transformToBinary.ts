export const transformToBinary = (array: number[][]): number[][] => {
  const flatArray = array.flat();
  const arithmeticMean = flatArray.reduce((a, b) => a + b) / flatArray.length;
  const binaryArrays = array.map((a) =>
    a.map((b) => (b >= arithmeticMean ? 1 : 0))
  );

  return binaryArrays;
};
