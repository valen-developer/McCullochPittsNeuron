export const accuracy_score = (y_target: number[], y_pred: number[]) => {
  var correct = 0;
  for (var i = 0; i < y_target.length; i++) {
    if (y_target[i] === y_pred[i]) {
      correct++;
    }
  }
  return correct / y_target.length;
};
