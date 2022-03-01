import React from "react";
import { useRecoilState } from "recoil";
import { resultState } from "../../../store/atoms/matchResult";
import ResultOnce from "./ResultOnce";

export type ResultInputProps = {};

const ResultInput: React.FC<ResultInputProps> = ({}): JSX.Element => {
  const [inputState, setInputState] = useRecoilState(resultState);

  const onClickPlus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const addTimes = Number(e.currentTarget.getAttribute("data-num")) + 1;
    const addInputRecord = [0, 0, 0, 0];
    const newInputState = [...inputState];
    newInputState.splice(addTimes, 0, addInputRecord);
    setInputState(newInputState);
  };

  const onClickMinus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (inputState.length == 1) {
      return;
    }
    const removeTimes = Number(e.currentTarget.getAttribute("data-num"));
    const newInputState = inputState.filter((i, index) => index != removeTimes);
    setInputState(newInputState);
  };

  const handleValue = (
    direction: number,
    index: number,
    value: number
  ): void => {
    const newInputState = [...inputState];
    const row = [...newInputState[index]];
    row.splice(direction, 1, value);
    newInputState.splice(index, 1, row);
    console.log(newInputState);
    setInputState(newInputState);
  };

  return (
    <>
      {inputState.map((i, index) => {
        return (
          <ResultOnce
            onClickPlus={onClickPlus}
            onClickMinus={onClickMinus}
            inputRecord={inputState[index]}
            index={index}
            handleValue={handleValue}
          ></ResultOnce>
        );
      })}
    </>
  );
};

export default ResultInput;
