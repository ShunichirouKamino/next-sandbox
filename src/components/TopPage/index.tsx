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
          <nav className="flex justify-between px-10 bg-white py-6">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md space-x-3 w-96">
              <input
                type="text"
                placeholder="search"
                className="bg-gray-100 outline-none w-full"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex items-center">
              <img
                className="w-8 rounded-full"
                src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg"
                alt="Elon Musk"
              />
              <p>Elon Musk</p>
            </div>
          </nav>
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
