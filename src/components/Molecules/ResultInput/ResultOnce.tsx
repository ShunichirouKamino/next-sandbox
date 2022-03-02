import PlusButton from "../../Atom/icons/PlusButton";
import RemoveButton from "../../Atom/icons/RemoveButton";
import InputBase from "../../Atom/Input";

export type ResultOnceProps = {
  onClickPlus: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickMinus: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  inputRecord: string[];
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
  const pettern = "^[+-]?\\d{1,3}$";
  const cellValidator = (text: string): boolean => {
    return new RegExp(pettern).test(text);
  };

  return (
    <>
      <p className="flex items-center">
        <span className="w-10 shrink-0">
          <PlusButton onClick={onClickPlus} index={index}></PlusButton>
        </span>
        <span className="w-10 shrink-0">
          <RemoveButton onClick={onClickMinus} index={index}></RemoveButton>
        </span>
        <span className="flex w-full shrink-1">
          <span className="w-1/4 shrink-1">
            <InputBase
              value={String(inputRecord[0])}
              type={"text"}
              size={"h-12 w-full"}
              direction={0}
              index={index}
              handleValue={handleValue}
              validator={cellValidator}
            ></InputBase>
          </span>
          <span className="w-1/4 shrink-1">
            <InputBase
              value={String(inputRecord[1])}
              type={"text"}
              size={"h-12 w-full"}
              direction={1}
              index={index}
              handleValue={handleValue}
              validator={cellValidator}
            ></InputBase>
          </span>
          <span className="w-1/4 shrink-1">
            <InputBase
              value={String(inputRecord[2])}
              type={"text"}
              size={"h-12 w-full"}
              direction={2}
              index={index}
              handleValue={handleValue}
              validator={cellValidator}
            ></InputBase>
          </span>
          <span className="w-1/4 shrink-1">
            <InputBase
              value={String(inputRecord[3])}
              type={"text"}
              size={"h-12 w-full"}
              direction={3}
              index={index}
              handleValue={handleValue}
              validator={cellValidator}
            ></InputBase>
          </span>
        </span>
      </p>
    </>
  );
};

export default ResultOnce;
