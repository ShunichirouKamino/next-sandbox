export type InputBaseProps = {
  placeholder?: string;
  type: "text" | "number" | "date" | "datetime-local" | "email" | "password";
  size: string; // example "h-12 w-96"
};

const InputBase: React.FC<InputBaseProps> = ({
  placeholder = "",
  type = "text",
  size = "h-12 w-96",
}) => {
  return (
    <>
      <div className="py-2 px-2">
        <input
          type={type}
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
