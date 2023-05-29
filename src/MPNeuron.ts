import { accuracyScore } from "./accuracyScore";

export class MPNeuron {
  threshold: number;

  constructor(threshold: number) {
    this.threshold = threshold;
  }

  public predict(inputs: number[]): number {
    const sum = this.sum(inputs);
    return this.activationFunction(sum);
  }

  public fit(inputs: number[][], targets: number[]): void {
    let accuracy: number[] = [];
    inputs.forEach((_, index) => {
      this.threshold = index;
      const prediction = inputs.map((input) => this.predict(input));
      accuracy[index] = accuracyScore(targets, prediction);
    });
    const maxAccuracy = Math.max(...accuracy);
    this.threshold = accuracy.indexOf(maxAccuracy);
  }

  private sum(inputs: number[]): number {
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i];
    }
    return sum;
  }

  private activationFunction(sum: number): number {
    return sum >= this.threshold ? 1 : 0;
  }
}
