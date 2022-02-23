export type InputBaseProps = {
  placeholder?: string;
  type: "text" | "number" | "date" | "datetime-local" | "email" | "password";
  size: string; // example "h-12 w-96"
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  direction: number;
  index: number;
  handleValue?: (...e: any) => void;
};

// TODO handleValueを別出しした上位コンポーネント作る
const InputBase: React.FC<InputBaseProps> = ({
  placeholder = "",
  type = "text",
  size = "h-12 w-96",
  value,
  direction,
  index,
  handleValue,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    handleValue(direction, index, Number(e.target.value));
  };
  return (
    <>
      <div className="py-2 px-2">
        <input
          onChange={handleChange}
          type={type}
          value={value}
          placeholder={placeholder}
          className={
            "bg-gray-100 item-center rounded-lg outline-none px-2 py-2 " +
            `${size}`
          }
        />
      </div>
    </>
  );
};

export default InputBase;
