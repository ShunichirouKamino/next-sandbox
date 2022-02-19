import { getData } from "../../lib/csvData";
import Header from "../Header";
import ImageContainer from "../ImageContainer";
import SideBar from "../SideBar";
import SimpleText from "../SimpleText";
import Table, { Column, TableProps } from "../Table";
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
  resultData: TableProps<Result>;
};

const ResultPage: React.FC<ResultPageProps> = ({ resultData }) => {
  console.log(resultData.columns);
  console.log(resultData.rawdata);
  const columns = [
    { label: "Name", size: "w-1/3" },
    { label: "Email", size: "w-1/3" },
    {
      label: "Action",
      size: "w-1/3",
      bodyStyle:
        "text-blue-400 hover:text-[#1e3da3] hover:font-medium cursor-pointer",
    },
  ];

  const rawData = [
    { name: "Shunichirou", email: "mail1@gmail.com", action: "Delete" },
    { name: "Taro", email: "mail2@gmail.com", action: "Delete" },
    { name: "Ziro", email: "mail3@gmail.com", action: "Delete" },
  ];

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
