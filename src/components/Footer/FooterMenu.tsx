import Link from "next/link";
import AccountLink from "../Atom/icons/AccountLink";
import DisplayLink from "../Atom/icons/DisplayLink";
import FileLink from "../Atom/icons/FileLink";
import HomeLink from "../Atom/icons/HomeLink";
import SetupLink from "../Atom/icons/SetupLink";

export type FooterMenuProps = {};

const FooterMenu: React.FC<FooterMenuProps> = () => {
  const style =
    "cursor-pointer hover:text-[#EC5252] duration-150 font-semibold text-center rounded-t-lg bg-[#1e3da3] border-2 border-white";
  return (
    <>
      <ul className="flex w-auto items-center text-white">
        <li className={`${style}` + " space-x-2 w-1/3 p-3"}>
          <HomeLink link="/" />
          <Link href="/">Home</Link>
        </li>
        <li className={`${style}` + " space-x-2 w-1/3 p-3"}>
          <DisplayLink link="/result" />
          <Link href="/result">Result</Link>
        </li>
        <li className={`${style}` + " space-x-2 w-1/3 p-3"}>
          <FileLink link="/dataEntry" />
          <Link href="/dataEntry">Entry</Link>
        </li>
      </ul>
    </>
  );
};

export default FooterMenu;
