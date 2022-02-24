import React, { useState } from "react";
import ResultOnce, { InputRecordType } from "./ResultOnce";

export type ResultInputProps = {};

const ResultInput: React.FC<ResultInputProps> = ({}): JSX.Element => {
  const initInputRecord: InputRecordType = {
    resultOnce: [0, 0, 0, 0],
    deleted: false,
  };
  const [inputState, setInputState] = useState([initInputRecord]);
  const onClickPlus = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    const addTimes = Number(e.currentTarget.getAttribute("data-num")) + 1;
    const addInputRecord: InputRecordType = {
      resultOnce: [0, 0, 0, 0],
      deleted: false,
    };
    inputState.splice(addTimes, 0, addInputRecord);
    const newInputState = [...inputState];
    setInputState(newInputState);
  };

  const onClickMinus = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    const removeTimes = Number(e.currentTarget.getAttribute("data-num"));
    const newInputState = inputState.filter((i, index) => index != removeTimes);
    setInputState(newInputState);
  };

  const handleValue = (
    direction: number,
    index: number,
    value: number
  ): void => {
    inputState[index].resultOnce[direction] = value;
    const newInputState = [...inputState];
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
