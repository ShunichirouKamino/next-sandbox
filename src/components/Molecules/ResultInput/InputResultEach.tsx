import { useState } from "react";
import InputBase from "../../Atom/InputBase";

export type InputResultEachProps = {
  placeholder?: string;
  type: "text" | "number" | "date" | "datetime-local" | "email" | "password";
  size?: string; // example "h-12 w-96"
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  direction?: number;
  index?: number;
  style?: string;
  pettern?: string;
  validator?: (text: string) => boolean;
  handleValue?: (...e: any) => void; // handleChangeに合わせて実施したい処理
};

const InputResultEach: React.FC<InputResultEachProps> = ({
  placeholder = "",
  type = "text",
  size = "h-12 w-full",
  value,
  direction,
  index,
  style = "bg-gray-100 item-center rounded-lg px-1 py-1",
  handleValue,
  handleChange,
  validator,
}) => {
  const [validateState, setValidate] = useState(true);
  let thisHandleChange;
  if (handleChange) {
    thisHandleChange = handleChange;
  } else {
    thisHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (validator) {
        setValidate(validator(e.target.value));
      }
      if (handleValue) {
        handleValue(direction, index, e.target.value);
      }
    };
  }
  return (
    <>
      {validateState ? (
        <InputBase
          handleChange={thisHandleChange}
          type={type}
          value={value}
          placeholder={placeholder}
          style={style}
          size={size}
        ></InputBase>
      ) : (
        <InputBase
          handleChange={thisHandleChange}
          type={type}
          value={value}
          placeholder={placeholder}
          style={`${style}` + " bg-red-600"}
          size={size}
        ></InputBase>
      )}
    </>
  );
};

export default InputResultEach;
