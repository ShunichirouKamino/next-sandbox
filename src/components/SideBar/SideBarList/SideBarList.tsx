import SideBarElement from "../SideBarElement/SideBarElement";

export type SideBarListProps = {};

const SideBarList: React.FC<SideBarListProps> = () => {
  return (
    <>
      <ul>
        <SideBarElement></SideBarElement>
        <button className="w-full mt-10 bg-[#EC5252] rounded-full py-1.5 text-white">
          Learn
        </button>
      </ul>
    </>
  );
};

export default SideBarList;
