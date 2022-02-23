import { PlusB, Twitter } from "@ubie/ubie-icons";
import Link from "next/link";

export type PlusButtonProps = {
  onClick: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>;
};

//https://github.com/ubie-oss/ubie-icons/blob/main/assets/plusB.svg
const PlusButton: React.FC<PlusButtonProps> = (props): JSX.Element => {
  return (
    <button className="cursor-pointer p-1 hover:text-[#EC5252] duration-150">
      <PlusB viewBox="0 0 24 24" className="h-6 w-6" />
    </button>
  );
};

export default PlusButton;
