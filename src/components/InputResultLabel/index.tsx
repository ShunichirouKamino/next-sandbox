import InputBase from "../Atom/Input";
import MyDatePicker from "../Atom/MyDatePicker";
import SimpleButton from "../Atom/SimpleButton";
import SimpleText from "../Atom/SimpleText";

export type InputResultLabelProps = {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleValue?: (...e: any) => void; // handleChangeに合わせて実施したい処理
};

const InputResultLabel: React.FC<InputResultLabelProps> = ({
  handleValue,
  handleChange,
}) => {
  let thisHandleChange;
  if (handleChange) {
    thisHandleChange = handleChange;
  } else {
    thisHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (handleValue) {
        // TODO
      }
    };
  }
  return (
    <>
      <div className="flex items-center">
        <div className="w-20 shrink-0">
          <SimpleButton onClick={null} text="Save"></SimpleButton>
        </div>
        <div className="flex w-full shrink-1 justify-center">
          <SimpleText text={"Label"} align={"text-center"}></SimpleText>
        </div>
        <div className="flex w-full shrink-1 justify-center">
          <InputBase size="h-12 w-full" type="text"></InputBase>
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
