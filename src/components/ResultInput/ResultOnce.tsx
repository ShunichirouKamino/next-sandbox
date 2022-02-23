import PlusButton from "../Atom/icons/PlusButton";
import RemoveButton from "../Atom/icons/RemoveButton";
import InputBase from "../Atom/Input";

export type ResultOnceProps = {
  onClickPlus: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickMinus: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  inputRecord: InputRecordType;
  index: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type InputRecordType = {
  east: number;
  south: number;
  west: number;
  north: number;
  deleted: boolean;
  times: number;
};

const ResultOnce: React.FC<ResultOnceProps> = ({
  onClickPlus,
  onClickMinus,
  inputRecord,
  index,
  handleChange,
}): JSX.Element => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-1/8">
          <PlusButton onClick={onClickPlus} index={index}></PlusButton>
        </div>
        <div className="w-1/8">
          <RemoveButton onClick={onClickMinus} index={index}></RemoveButton>
        </div>
        <div className="flex w-full">
          <div className="w-1/4">
            <InputBase
              value={String(inputRecord.east)}
              type={"number"}
              size={"h-12 w-full"}
              handleChange={handleChange}
            ></InputBase>
          </div>
          <div className="w-1/4">
            <InputBase
              value={String(inputRecord.south)}
              type={"number"}
              size={"h-12 w-full"}
              handleChange={handleChange}
            ></InputBase>
          </div>
          <div className="w-1/4">
            <InputBase
              value={String(inputRecord.west)}
              type={"number"}
              size={"h-12 w-full"}
              handleChange={handleChange}
            ></InputBase>
          </div>
          <div className="w-1/4">
            <InputBase
              value={String(inputRecord.north)}
              type={"number"}
              size={"h-12 w-full"}
              handleChange={handleChange}
            ></InputBase>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultOnce;
