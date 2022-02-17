import SideBarList from "./SideBarList/SideBarList";

type Props = {};

const SideBar: React.FC<Props> = () => {
  return (
    <>
      <div className="flex w-2/5 md:w-1/4 h-screen bg-white">
        <div className="mx-auto py-10">
          <h1 className="text-2xl font-bold mb-10 cursor-pointer text-[#EC5252] duration-150">
            HogeHoge
          </h1>
          <SideBarList></SideBarList>
        </div>
      </div>
    </>
  );
};

export default SideBar;
