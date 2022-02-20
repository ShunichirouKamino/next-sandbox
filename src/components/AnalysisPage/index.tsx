import Header from "../Header";
import SideBar from "../SideBar";
import SimpleText from "../SimpleText";
import Table, { Column, RowDataType } from "../Table";

export type AnalysisPageProps = {
  results: number[][];
  member: string;
};

const AnalysisPage: React.FC<AnalysisPageProps> = ({ results, member }) => {
  const size = "w-1/4";
  const columns: Column[] = [
    { label: "first", size: size },
    { label: "second", size: size },
    { label: "third", size: size },
    { label: "fourth", size: size },
  ];

  const rowdata: RowDataType[][] = results.map((row) => {
    return columns.map((c, index) => {
      return {
        label: String(c.label),
        data: String(row[index]),
      };
    });
  });

  console.log(rowdata);

  return (
    <>
      <SimpleText
        text={member}
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

export default AnalysisPage;
