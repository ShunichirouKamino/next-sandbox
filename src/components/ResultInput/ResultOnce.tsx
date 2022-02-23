import PlusButton from "../Atom/icons/PlusButton";
import InputBase from "../Atom/Input/input";

export type ResultOnceProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  times: number;
};

const ResultOnce: React.FC<ResultOnceProps> = ({
  onClick,
  times,
}): JSX.Element => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-1/7">
          <PlusButton onClick={onClick} times={times}></PlusButton>
        </div>
        <div className="flex w-full">
          <div className="w-1/4">
            <InputBase type={"number"} size={"h-12 w-full"}></InputBase>
          </div>
          <div className="w-1/4">
            <InputBase type={"number"} size={"h-12 w-full"}></InputBase>
          </div>
          <div className="w-1/4">
            <InputBase type={"number"} size={"h-12 w-full"}></InputBase>
          </div>
          <div className="w-1/4">
            <InputBase type={"number"} size={"h-12 w-full"}></InputBase>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultOnce;
