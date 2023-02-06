import { numberOrNullValidator } from "../../../lib/validator";
import PlusButton from "../../Atom/icons/PlusButton";
import RemoveButton from "../../Atom/icons/RemoveButton";
import InputResultEach from "./InputResultEach";

export type InputResultMatchProps = {
  onClickPlus: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickMinus: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  inputRecord: string[];
  index: number;
  handleValue?: (...e: any) => void;
};

const InputResultMatch: React.FC<InputResultMatchProps> = ({
  onClickPlus,
  onClickMinus,
  inputRecord,
  index,
  handleValue,
}): JSX.Element => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-7 shrink-0">
          <PlusButton onClick={onClickPlus} index={index}></PlusButton>
        </div>
        <div className="w-7 shrink-0">
          <RemoveButton onClick={onClickMinus} index={index}></RemoveButton>
        </div>
        <div className="flex w-full shrink-1">
          {inputRecord.map((col, i) => {
            return (
              <div key={col} className="w-1/6 shrink-1">
                <InputResultEach
                  value={String(col)}
                  type={"text"}
                  size={"h-12 w-full"}
                  direction={i}
                  index={index}
                  handleValue={handleValue}
                  validator={numberOrNullValidator}
                ></InputResultEach>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InputResultMatch;
