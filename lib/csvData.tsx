import fs from "fs";
import path from "path";

const csvDataDirectory = path.join(process.cwd(), "data/");

export const getData = () => {
  const fileName = csvDataDirectory + "majan.csv";
  const data = fs.readFileSync(fileName, "utf8");
  const records = parseCSV(data);

  console.log(records);
};

const parseCSV = (data: string): string[][] => {
  return data.split("\r\n").map((row) => row.split(","));
};
