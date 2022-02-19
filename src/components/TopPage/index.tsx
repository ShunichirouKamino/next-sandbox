import Header from "../Header";
import ImageContainer from "../ImageContainer";
import SideBar from "../SideBar";

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
          <div className="w-full ">
            <h1 className="text-2xl font-semibold">Main Menu</h1>
            <div className="md:flex mt-4 space-x-4  justify-center">
              <div className="h-96 bg-gradient-to-r from-indigo-600 to-purple-500 flex items-end rounded-md">
                <p className="text-lg text-indigo-50">
                  FUGA FUGA FUGA MENU MENU MENU
                </p>
              </div>
              <div className="h-96 bg-gradient-to-r from-yellow-600 to-red-500 flex items-end rounded-md">
                <p className="text-lg text-indigo-50">
                  HOGE HOGE HOGE MENU MENU MENU
                </p>
              </div>
              <div className="h- bg-gradient-to-r from-green-600 to-blue-500 flex items-end rounded-md">
                <p className="text-lg text-indigo-50">
                  FUGA FUGA FUGA MENU MENU MENU
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TopPage;
