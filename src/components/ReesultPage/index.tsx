import Header from "../Header";
import SideBar from "../SideBar";
import SimpleText from "../SimpleText";
import Table, { TableProps } from "../Table";
import Body from "./Body/Body";

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
  const columns = members.map((m) => {
    const c: string = m;
    return { label: c, size: "w-1/6" };
  });

  const rawData = results.map((row) => {
    return {
      A: row[0],
      B: row[1],
      C: row[2],
      D: row[3],
      E: row[4],
      Shunichiro: row[5],
    };
  });

  return (
    <>
      <div className="flex">
        <SideBar></SideBar>
        <main className=" min-h-screen w-full">
          <Header></Header>
          <SimpleText
            text="Result"
            align="text-left"
            style="font-bold"
            size="text-2xl"
          ></SimpleText>
          <section className="frex">
            <Table columns={columns} rawdata={rawData}></Table>
          </section>
          <Body></Body>
        </main>
      </div>
    </>
  );
};

export default ResultPage;
