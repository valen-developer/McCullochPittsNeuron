import { MPNeuron } from "./MPNeuron";
import { accuracyScore } from "./accuracyScore";
import { cutArray } from "./cutArray";
import { getBreastCancerData } from "./getBreastCancerData";
import { transformToBinary } from "./transformToBinary";

const init = async () => {
  const data = await getBreastCancerData();
  const binaryData = transformToBinary(data.train);

  const { train, test } = cutArray(binaryData, data.target, 0.7);

  const neuron = new MPNeuron(0);
  neuron.fit(train.data, train.target);

  const result = test.data.map((item) => neuron.predict(item));
  const accuracy = accuracyScore(test.target, result);

  console.log(accuracy);
};

init();
