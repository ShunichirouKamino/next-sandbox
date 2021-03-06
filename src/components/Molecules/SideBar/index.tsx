import SideBarList from "./SideBarList/SideBarList";

export type SideBarProps = {};

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <>
      <div className="flex w-full bg-white sticky h-screen top-0">
        <div className="mx-auto py-10">
          <h1 className="text-2xl font-bold mb-10 cursor-pointer text-[#1e3da3] duration-150">
            HogeHoge
          </h1>
          <SideBarList></SideBarList>
        </div>
      </div>
    </>
  );
};

export default SideBar;
