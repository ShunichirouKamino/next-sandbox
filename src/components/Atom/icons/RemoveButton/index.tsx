import { MinusB } from "@ubie/ubie-icons";

export type RemoveButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  index: number;
};

//https://github.com/ubie-oss/ubie-icons/blob/main/assets/MinusB.svg
const RemoveButton: React.FC<RemoveButtonProps> = ({
  onClick,
  index,
}): JSX.Element => {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        data-num={index}
        className="cursor-pointer p-1 hover:text-[#EC5252] duration-150"
      >
        <MinusB viewBox="0 0 24 24" className="h-6 w-6" />
      </button>
    </div>
  );
};

export default RemoveButton;
