import Header from "../Header";
import ImageContainer from "../ImageContainer";
import SideBar from "../SideBar";

type Props = {
  text: string;
};

const TopPage: React.FC<Props> = ({ text }) => {
  return (
    <>
      <div className="flex">
        <SideBar></SideBar>
        <main className=" min-h-screen w-full">
          <Header></Header>
          <div className="w-full ">
            <h1 className="text-2xl font-semibold">All Courses</h1>
            <div className="md:flex mt-4 space-x-4  justify-center">
              <div className="h-96 bg-gradient-to-r from-indigo-600 to-purple-500 flex items-end rounded-md">
                <p className="text-lg text-indigo-50">
                  How to do Basic Jumping and how to landing safely
                </p>
              </div>
              <div className="h-96 bg-gradient-to-r from-yellow-600 to-red-500 flex items-end rounded-md">
                <p className="text-lg text-indigo-50">
                  How to do Basic Jumping and how to landing safely
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
