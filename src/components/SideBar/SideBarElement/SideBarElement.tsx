import Link from "next/link";
import AccountLink from "../../icons/AccountLink";
import DisplayLink from "../../icons/DisplayLink";
import FileLink from "../../icons/FileLink";
import HomeLink from "../../icons/HomeLink";
import SetupLink from "../../icons/SetupLink";

export type SideBarElementProps = {};

const SideBarElement: React.FC<SideBarElementProps> = () => {
  return (
    <>
      <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150 font-semibold">
        <HomeLink link="/" />
        <Link href="/">Home</Link>
      </li>
      <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150 font-semibold">
        <DisplayLink link="/result" />
        <Link href="/result">Result</Link>
      </li>
      <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150 font-semibold">
        <FileLink link="/dataEntry" />
        <Link href="/dataEntry">Data Entry</Link>
      </li>
      <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150 font-semibold">
        <AccountLink link="/result" />
        <Link href="/result">Profile</Link>
      </li>
      <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150 font-semibold">
        <SetupLink link="/result" />
        <Link href="/result">Setting</Link>
      </li>
    </>
  );
};

export default SideBarElement;
