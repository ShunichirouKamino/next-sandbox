import { useState } from "react";
import ResultOnce from "./ResultOnce";

export type ResultInputProps = {};

type InputStateType = {
  deleted: boolean;
};

const ResultInput: React.FC<ResultInputProps> = ({}): JSX.Element => {
  const [inputState, setInputState] = useState([{ deleted: true }]);
  const onClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    // e.preventDefault();
    const addTimes = Number(e.currentTarget.getAttribute("data-num")) + 1;
    const newResult: InputStateType = { deleted: true };
    inputState.splice(addTimes, 0, newResult);
    const newInputState = [...inputState];
    setInputState(newInputState);
  };

  return (
    <>
      {inputState.map((i, index) => {
        return <ResultOnce onClick={onClick} times={index}></ResultOnce>;
      })}
    </>
  );
};

export default ResultInput;
