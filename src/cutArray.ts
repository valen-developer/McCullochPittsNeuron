interface CutArray {
  data: number[][];
  target: number[];
}

interface CutArrayResult {
  train: CutArray;
  test: CutArray;
}

export const cutArray = (
  array: number[][],
  target: number[],
  percentageForTest: number
): CutArrayResult => {
  if (percentageForTest < 0 || percentageForTest > 1) {
    throw new Error("Percentage must be between 0 and 1");
  }

  const testLength = Math.round(array.length * percentageForTest);
  const trainLength = array.length - testLength;

  const trainData = array.slice(0, trainLength);
  const testData = array.slice(trainLength);

  const trainTarget = target.slice(0, trainLength);
  const testTarget = target.slice(trainLength);

  return {
    train: {
      data: trainData,
      target: trainTarget,
    },
    test: {
      data: testData,
      target: testTarget,
    },
  };
};
