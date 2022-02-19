import Header from "../Header";
import SideBar from "../SideBar";
import SimpleText from "../SimpleText";
import Table, { TableProps } from "../Table";
import Body from "./Body/Body";

type Result = {
  userA;
  userB;
  userC;
  userD;
  userE;
  userF;
};

export type ResultPageProps = {
  members: string[];
  results: string[][];
};

const ResultPage: React.FC<ResultPageProps> = ({ members, results }) => {
  const columns = members.map((m) => {
    const c: string = m;
    return { label: c, size: "w-1/6" };
  });

  const rawData = results.map((raw) => {
    return {
      A: raw[0],
      B: raw[1],
      C: raw[2],
      D: raw[3],
      E: raw[4],
      Shunichiro: raw[5],
    };
  });
  console.log(rawData);

  // const columns = [
  //   { label: "Name", size: "w-1/3" },
  //   { label: "Email", size: "w-1/3" },
  //   {
  //     label: "Action",
  //     size: "w-1/3",
  //     bodyStyle:
  //       "text-blue-400 hover:text-[#1e3da3] hover:font-medium cursor-pointer",
  //   },
  // ];

  // const rawData = [
  //   { name: "Shunichirou", email: "mail1@gmail.com", action: "Delete" },
  //   { name: "Taro", email: "mail2@gmail.com", action: "Delete" },
  //   { name: "Ziro", email: "mail3@gmail.com", action: "Delete" },
  // ];

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
          <Table columns={columns} rawdata={rawData}></Table>
          <Body></Body>
        </main>
      </div>
    </>
  );
};

export default ResultPage;
