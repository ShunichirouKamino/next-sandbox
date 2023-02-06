export type InputBaseProps = {
  placeholder?: string;
  type: "text" | "number" | "date" | "datetime-local" | "email" | "password";
  size?: string; // example "h-12 w-96"
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: string;
  pettern?: string;
};

const InputBase: React.FC<InputBaseProps> = ({
  placeholder = "",
  type = "text",
  size = "h-12 w-96",
  value,
  style = "bg-gray-100 item-center rounded-lg px-2 py-2",
  handleChange,
}) => {
  return (
    <>
      <div className="py-1 px-1 w-full">
        <input
          onChange={handleChange}
          type={type}
          value={value}
          placeholder={placeholder}
          className={`${style}` + " " + `${size}`}
        />
      </div>
    </>
  );
};

export default InputBase;
