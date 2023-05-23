export const accuracyScore = (y_target: number[], y_pred: number[]) => {
  let correct = 0;
  for (let i = 0; i < y_target.length; i++) {
    if (y_target[i] === y_pred[i]) {
      correct++;
    }
  }
  return correct / y_target.length;
};
