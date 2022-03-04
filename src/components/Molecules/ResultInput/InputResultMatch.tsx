import { isNumberValidator } from "../../../lib/validator";
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
          <div className="w-1/4 shrink-1">
            <InputResultEach
              value={String(inputRecord[0])}
              type={"text"}
              size={"h-12 w-full"}
              direction={0}
              index={index}
              handleValue={handleValue}
              validator={isNumberValidator}
            ></InputResultEach>
          </div>
          <div className="w-1/4 shrink-1">
            <InputResultEach
              value={String(inputRecord[1])}
              type={"text"}
              size={"h-12 w-full"}
              direction={1}
              index={index}
              handleValue={handleValue}
              validator={isNumberValidator}
            ></InputResultEach>
          </div>
          <div className="w-1/4 shrink-1">
            <InputResultEach
              value={String(inputRecord[2])}
              type={"text"}
              size={"h-12 w-full"}
              direction={2}
              index={index}
              handleValue={handleValue}
              validator={isNumberValidator}
            ></InputResultEach>
          </div>
          <div className="w-1/4 shrink-1">
            <InputResultEach
              value={String(inputRecord[3])}
              type={"text"}
              size={"h-12 w-full"}
              direction={3}
              index={index}
              handleValue={handleValue}
              validator={isNumberValidator}
            ></InputResultEach>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputResultMatch;
