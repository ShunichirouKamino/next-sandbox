import SideBarElement from "../SideBarElement/SideBarElement";

type Props = {};

const SideBarList: React.FC<Props> = () => {
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
