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

const huggingFaceDataUrl = (page: number) =>
  `https://datasets-server.huggingface.co/rows?dataset=mstz%2Fbreast&config=cancer&split=train&offset=${
    (page + 1) * 100
  }&limit=100`;

export const getBreastCancerData = async (): Promise<{
  train: number[][];
  target: number[];
}> => {
  const pages = 7;
  const rows = await Promise.all(
    new Array(pages)
      .fill(0)
      .map(
        async (_, index) =>
          await axios
            .get<BreastCancerData>(huggingFaceDataUrl(index))
            .then((r) => r.data)
      )
  )
    .then((responses) =>
      responses.reduce((acc: Row[], response) => [...acc, ...response.rows], [])
    )
    .then((rows) => {
      return rows.sort(() => (Math.random() > 0.5 ? 1 : -1));
    });

  return getTrainingData(rows);
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
