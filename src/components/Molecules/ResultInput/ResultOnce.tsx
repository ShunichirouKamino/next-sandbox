import PlusButton from "../../Atom/icons/PlusButton";
import RemoveButton from "../../Atom/icons/RemoveButton";
import InputBase from "../../Atom/Input";

export type ResultOnceProps = {
  onClickPlus: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickMinus: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  inputRecord: number[];
  index: number;
  handleValue?: (...e: any) => void;
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
        <div className="w-10 shrink-0">
          <PlusButton onClick={onClickPlus} index={index}></PlusButton>
        </div>
        <div className="w-10 shrink-0">
          <RemoveButton onClick={onClickMinus} index={index}></RemoveButton>
        </div>
        <div className="flex w-full shrink-1">
          <div className="w-1/4 shrink-1">
            <InputBase
              value={String(inputRecord[0])}
              type={"number"}
              size={"h-12 w-full"}
              direction={0}
              index={index}
              handleValue={handleValue}
            ></InputBase>
          </div>
          <div className="w-1/4 shrink-1">
            <InputBase
              value={String(inputRecord[1])}
              type={"number"}
              size={"h-12 w-full"}
              direction={1}
              index={index}
              handleValue={handleValue}
            ></InputBase>
          </div>
          <div className="w-1/4 shrink-1">
            <InputBase
              value={String(inputRecord[2])}
              type={"number"}
              size={"h-12 w-full"}
              direction={2}
              index={index}
              handleValue={handleValue}
            ></InputBase>
          </div>
          <div className="w-1/4 shrink-1">
            <InputBase
              value={String(inputRecord[3])}
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
