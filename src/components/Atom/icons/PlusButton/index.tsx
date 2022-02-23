import { PlusB } from "@ubie/ubie-icons";

export type PlusButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  times: number;
};

//https://github.com/ubie-oss/ubie-icons/blob/main/assets/plusB.svg
const PlusButton: React.FC<PlusButtonProps> = ({
  onClick,
  times,
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      data-num={times}
      className="cursor-pointer p-1 hover:text-[#EC5252] duration-150"
    >
      <PlusB viewBox="0 0 24 24" className="h-6 w-6" />
    </button>
  );
};

export default PlusButton;
