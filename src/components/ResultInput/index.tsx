import React, { useState } from "react";
import ResultOnce, { InputRecordType } from "./ResultOnce";

export type ResultInputProps = {};

const ResultInput: React.FC<ResultInputProps> = ({}): JSX.Element => {
  const initInputRecord: InputRecordType = {
    east: 0,
    south: 0,
    west: 0,
    north: 0,
    deleted: false,
    times: 0,
  };
  const [inputState, setInputState] = useState([initInputRecord]);
  const onClickPlus = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    const addTimes = Number(e.currentTarget.getAttribute("data-num")) + 1;
    const addInputRecord: InputRecordType = {
      east: 0,
      south: 0,
      west: 0,
      north: 0,
      deleted: false,
      times: addTimes,
    };
    inputState.splice(addTimes, 0, addInputRecord);
    const newInputState = [...inputState];
    console.log(newInputState);
    setInputState(newInputState);
  };

  const onClickMinus = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    // e.preventDefault();
    const addTimes = Number(e.currentTarget.getAttribute("data-num")) + 1;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
  };

  return (
    <>
      {inputState.map((i, index) => {
        return (
          <ResultOnce
            onClickPlus={onClickPlus}
            onClickMinus={onClickMinus}
            inputRecord={initInputRecord}
            index={index}
            handleChange={handleChange}
          ></ResultOnce>
        );
      })}
    </>
  );
};

export default ResultInput;
