import axios from "axios";

interface Data {
  clump_thickness: number;
  uniformity_of_cell_size: number;
  uniformity_of_cell_shape: number;
  marginal_adhesion: number;
  single_epithelial_cell_size: number;
  bare_nuclei: number;
  bland_chromatin: number;
  normal_nucleoli: number;
  mitoses: number;
  is_cancer: 0 | 1;
}

interface Row {
  row: Data;
}

interface BreastCancerData {
  rows: Row[];
}

const huggingFaceDataUrl =
  "https://datasets-server.huggingface.co/rows?dataset=mstz%2Fbreast&config=cancer&split=train&offset=0&limit=100";

export const getBreastCancerData = async (): Promise<{
  train: number[][];
  target: number[];
}> => {
  const response = await axios.get<BreastCancerData>(huggingFaceDataUrl);

  return getTrainingData(response.data.rows);
};

const getTrainingData = (
  rows: Row[]
): { train: Array<Array<number>>; target: Array<number> } => {
  const train: Array<Array<number>> = [];
  const target: Array<number> = [];

  rows.forEach((row) => {
    const data = Object.values(row.row);
    const targetValue = data.pop();

    if (targetValue === undefined) {
      throw new Error("Target value is undefined");
    }

    train.push(data);
    target.push(targetValue);
  });

  return { train, target };
};
