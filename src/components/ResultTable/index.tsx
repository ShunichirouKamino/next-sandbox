import SimpleText from "../Atom/SimpleText";
import Table, { Column, RowDataType } from "../Table";

export type ResultTableProps = {
  members: string[];
  results: number[][];
};

const ResultTable: React.FC<ResultTableProps> = ({ members, results }) => {
  /**
   * style sample
   * bodyStyle:
   *       "text-blue-400 hover:text-[#1e3da3] hover:font-medium cursor-pointer",
   */
  const size: number = members.length;
  const columns: Column[] = members.map((m) => {
    const c: string = m;
    return { label: c, size: "w-1/" + size };
  });

  const rowdata: RowDataType[][] = results.map((row) => {
    return members.map((m, index) => {
      return {
        label: m,
        data: String(row[index]),
      };
    });
  });

  return (
    <>
      <SimpleText
        text="Result"
        align="text-left"
        style="font-bold"
        size="text-2xl"
      ></SimpleText>
      <div className="w-auto">
        <Table columns={columns} rowdata={rowdata}></Table>
      </div>
    </>
  );
};

export default ResultTable;
