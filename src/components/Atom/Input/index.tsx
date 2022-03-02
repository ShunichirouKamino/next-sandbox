import { useState } from "react";

export type InputBaseProps = {
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

// TODO handleValueを別出しした上位コンポーネント作る
// directiopn, indexとhandleChangeはセットにする
const InputBase: React.FC<InputBaseProps> = ({
  placeholder = "",
  type = "text",
  size = "h-12 w-96",
  value,
  direction,
  index,
  style = "bg-gray-100 item-center rounded-lg px-2 py-2",
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
      <div className="py-2 px-2">
        {validateState ? (
          <input
            onChange={thisHandleChange}
            type={type}
            value={value}
            placeholder={placeholder}
            className={`${style}` + " " + `${size}`}
          />
        ) : (
          <input
            onChange={thisHandleChange}
            type={type}
            value={value}
            placeholder={placeholder}
            className={`${style}` + " " + `${size}` + " bg-red-600"}
          />
        )}
      </div>
    </>
  );
};

export default InputBase;
