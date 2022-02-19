import fs from "fs";
import path from "path";

const csvDataDirectory = path.join(process.cwd(), "/src/data/");

export type DataType = {
  header: string[];
  row: string[][];
};

/**
 * CSVの結果データを読み込みます.
 *
 * @returns CSV読み込み後の二次元配列
 */
export const getData = (): DataType => {
  const fileName = csvDataDirectory + "majan.csv";
  console.log("file input dir: " + fileName);
  const data = fs.readFileSync(fileName, "utf8");
  const records = parseCSV(data);
  const header = records.slice(0, 1).flat();
  const row = records.slice(1);
  return {
    header,
    row,
  };
};

const parseCSV = (data: string): string[][] => {
  return data.split("\r\n").map((row) => row.split(","));
};
