import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type MyDatePickerProps = {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  date?: Date;
};

const MyDatePicker: React.FC<MyDatePickerProps> = ({
  handleChange,
  date,
}): JSX.Element => {
  return (
    <>
      <div className="py-2 px-2">
        <DatePicker
          className="
          item-center 
          rounded-lg 
          py-2 px-2 h-12 w-full 
          border border-solid border-gray-300 
          bg-white bg-clip-padding bg-no-repeat"
          selected={date}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default MyDatePicker;
