import InputBase from "../Atom/Input";
import MyDatePicker from "../Atom/MyDatePicker";
import SimpleButton from "../Atom/SimpleButton";
import SimpleText from "../Atom/SimpleText";

export type InputResultLabelProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const InputResultLabel: React.FC<InputResultLabelProps> = ({ onClick }) => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-20 shrink-0">
          <SimpleButton onClick={onClick} text="Save"></SimpleButton>
        </div>
        <div className="flex w-full shrink-1 justify-center">
          <SimpleText text={"Label"} align={"text-center"}></SimpleText>
        </div>
        <div className="flex w-full shrink-1 justify-center">
          <InputBase
            size="h-12 w-full"
            type="text"
            style="bg-white border border-solid border-gray-300 item-center rounded-lg px-2 py-2"
          ></InputBase>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-20 shrink-0 invisible"></div>
        <div className="flex w-full shrink-1 justify-center">
          <SimpleText text={"Date"} align={"text-center"}></SimpleText>
        </div>
        <div className="flex w-full shrink-1 justify-center">
          <MyDatePicker></MyDatePicker>
        </div>
      </div>
    </>
  );
};

export default InputResultLabel;
