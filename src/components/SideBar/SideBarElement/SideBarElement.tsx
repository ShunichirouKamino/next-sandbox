import AccountLink from "../../icons/AccountLink";
import DisplayLink from "../../icons/DisplayLink";
import FileLink from "../../icons/FileLink";
import HomeLink from "../../icons/HomeLink";
import HumanLink from "../../icons/HumanLink";
import SetupLink from "../../icons/SetupLink";

export type SideBarElementProps = {};

const SideBarElement: React.FC<SideBarElementProps> = () => {
  return (
    <>
      <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
        <HomeLink link={""} />
        <span className="font-semibold">Home</span>
      </li>
      <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
        <DisplayLink link={""} />
        <span className="font-semibold">Result</span>
      </li>
      <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
        <FileLink link={""} />
        <span className="font-semibold">Data Entry</span>
      </li>
      <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
        <AccountLink link={""} />
        <span className="font-semibold">Profile</span>
      </li>
      <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
        <SetupLink link={""} />
        <span className="font-semibold">Setting</span>
      </li>
    </>
  );
};

export default SideBarElement;
