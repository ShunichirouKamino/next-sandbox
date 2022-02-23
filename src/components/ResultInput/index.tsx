import React, { useState } from "react";
import ResultOnce, { InputRecordType } from "./ResultOnce";

export type ResultInputProps = {};

const ResultInput: React.FC<ResultInputProps> = ({}): JSX.Element => {
  const initInputRecord: InputRecordType = {
    resultOnce: [0, 0, 0, 0],
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
      resultOnce: [0, 0, 0, 0],
      deleted: false,
      times: addTimes,
    };
    inputState.splice(addTimes, 0, addInputRecord);
    const newInputState = [...inputState];
    setInputState(newInputState);
  };

  const onClickMinus = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    // e.preventDefault();
    const addTimes = Number(e.currentTarget.getAttribute("data-num")) + 1;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const data = String(e).split("#");
  //   const index = Number(data[2]);
  //   const direction = Number(data[1]);
  //   const value = Number(data[0]);
  //   console.log(data);
  //   const resultOnce = [0, 0, 0, 0].splice(direction, 1, value);
  //   const addInputRecord: InputRecordType = {
  //     resultOnce: resultOnce,
  //     deleted: false,
  //     times: index,
  //   };
  //   console.log("add:" + addInputRecord.resultOnce);
  //   inputState.splice(index, 1, addInputRecord);
  //   const newInputState = [...inputState];
  //   console.log(newInputState);
  //   setInputState(newInputState);
  // };

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
