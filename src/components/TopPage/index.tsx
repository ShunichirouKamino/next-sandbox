import Header from "../Header";
import ImageContainer from "../ImageContainer";
import SideBar from "../SideBar";
import Table, { Column } from "../Table";
import Body from "./Body/Body";

export type TopPageProps = {
  text: string;
};

const TopPage: React.FC<TopPageProps> = ({ text }) => {
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

  const styles = [];

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
          <Table columns={columns} rawdata={rawData}></Table>
          <Body></Body>
        </main>
      </div>
    </>
  );
};

export default TopPage;
