import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type MyDatePickerProps = {};

const MyDatePicker: React.FC<MyDatePickerProps> = ({}): JSX.Element => {
  const initialDate = new Date();
  const [startDate, setStartDate] = useState(initialDate);
  const handleChange = (date) => {
    setStartDate(date);
  };

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
          selected={startDate}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default MyDatePicker;
