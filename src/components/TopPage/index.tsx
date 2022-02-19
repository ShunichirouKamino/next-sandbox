import Header from "../Header";
import ImageContainer from "../ImageContainer";
import SideBar from "../SideBar";
import Table from "../Table";
import Body from "./Body/Body";

export type TopPageProps = {
  text: string;
};

const TopPage: React.FC<TopPageProps> = ({ text }) => {
  return (
    <>
      <div className="flex">
        <SideBar></SideBar>
        <main className=" min-h-screen w-full">
          <Header></Header>
          <Table columns={[]}></Table>
          <Body></Body>
        </main>
      </div>
    </>
  );
};

export default TopPage;
