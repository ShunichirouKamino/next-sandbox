import SimpleText from "../SimpleText";
import Table, { Column, RowDataType } from "../Table";

export type ResultPageProps = {
  members: string[];
  results: number[][];
};

const ResultPage: React.FC<ResultPageProps> = ({ members, results }) => {
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
      <section className="frex">
        <Table columns={columns} rowdata={rowdata}></Table>
      </section>
    </>
  );
};

export default ResultPage;
