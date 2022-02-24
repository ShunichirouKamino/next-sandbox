import PlusButton from "../Atom/icons/PlusButton";
import RemoveButton from "../Atom/icons/RemoveButton";
import InputBase from "../Atom/Input";

export type ResultOnceProps = {
  onClickPlus: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickMinus: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  inputRecord: InputRecordType;
  index: number;
  handleValue?: (...e: any) => void;
};

export type InputRecordType = {
  resultOnce: number[];
  deleted: boolean;
};

const ResultOnce: React.FC<ResultOnceProps> = ({
  onClickPlus,
  onClickMinus,
  inputRecord,
  index,
  handleValue,
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
              value={String(inputRecord.resultOnce[0])}
              type={"number"}
              size={"h-12 w-full"}
              direction={0}
              index={index}
              handleValue={handleValue}
            ></InputBase>
          </div>
          <div className="w-1/4">
            <InputBase
              value={String(inputRecord.resultOnce[1])}
              type={"number"}
              size={"h-12 w-full"}
              direction={1}
              index={index}
              handleValue={handleValue}
            ></InputBase>
          </div>
          <div className="w-1/4">
            <InputBase
              value={String(inputRecord.resultOnce[2])}
              type={"number"}
              size={"h-12 w-full"}
              direction={2}
              index={index}
              handleValue={handleValue}
            ></InputBase>
          </div>
          <div className="w-1/4">
            <InputBase
              value={String(inputRecord.resultOnce[3])}
              type={"number"}
              size={"h-12 w-full"}
              direction={3}
              index={index}
              handleValue={handleValue}
            ></InputBase>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultOnce;
