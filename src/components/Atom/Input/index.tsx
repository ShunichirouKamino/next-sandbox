export type InputBaseProps = {
  placeholder?: string;
  type: "text" | "number" | "date" | "datetime-local" | "email" | "password";
  size: string; // example "h-12 w-96"
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// TODO handleChangeの分岐
const InputBase: React.FC<InputBaseProps> = ({
  placeholder = "",
  type = "text",
  size = "h-12 w-96",
  value,
  handleChange,
}) => {
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
