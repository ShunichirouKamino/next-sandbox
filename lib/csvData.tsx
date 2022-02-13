import fs from "fs";
import path from "path";

const csvDataDirectory = path.join(process.cwd(), "data/");

export type resultType = {
  members: string[];
  results: string[][];
};

/**
 * CSVの結果データを読み込みます.
 *
 * @returns CSV読み込み後の二次元配列
 */
export const getData = (): resultType => {
  const fileName = csvDataDirectory + "majan.csv";
  const data = fs.readFileSync(fileName, "utf8");
  const records = parseCSV(data);
  const members = records.slice(0, 1).flat();
  const results = records.slice(1);
  console.log(members);
  console.log(results);
  return {
    members,
    results,
  };
};

const parseCSV = (data: string): string[][] => {
  return data.split("\r\n").map((row) => row.split(","));
};
