import InputBase from "../Atom/Input/input";

export type ResultInputProps = {};

const ResultInput: React.FC<ResultInputProps> = ({}) => {
  return (
    <>
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
    </>
  );
};

export default ResultInput;
