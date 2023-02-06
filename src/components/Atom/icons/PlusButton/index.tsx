import { PlusBIcon } from "@ubie/ubie-icons";

export type PlusButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  index: number;
};

//https://github.com/ubie-oss/ubie-icons/blob/main/assets/plusB.svg
const PlusButton: React.FC<PlusButtonProps> = ({
  onClick,
  index,
}): JSX.Element => {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        data-num={index}
        className="cursor-pointer p-1 hover:text-[#EC5252] duration-150 inline-block"
      >
        <PlusBIcon viewBox="0 0 24 24" className="h-6 w-6" />
      </button>
    </div>
  );
};

export default PlusButton;
