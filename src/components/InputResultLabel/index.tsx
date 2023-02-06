import { useRecoilState } from "recoil";
import { matchState, userGroupState } from "../../store/atoms/matchResult";
import InputBase from "../Atom/InputBase";
import MyDatePicker from "../Atom/MyDatePicker";
import SelectBox from "../Atom/SelectBox";
import SimpleText from "../Atom/SimpleText";

export type InputResultLabelProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const InputResultLabel: React.FC<InputResultLabelProps> = ({ onClick }) => {
  // userGroup可変にする
  const initUserGroup = ["", "合宿"];
  const [match, setMatchState] = useRecoilState(matchState);
  const [userGroup, setUserGroup] = useRecoilState(userGroupState);

  const handleChangeLabel = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const label = String(e.target.value);
    const date = match.date;
    setMatchState({ label: label, date: date });
  };

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const date = new Date(String(e));
    const label = match.label;
    setMatchState({ label: label, date: date });
  };

  const handleChangeGroup: React.ChangeEventHandler<HTMLSelectElement> = (
    c
  ) => {
    const group = c.target.value;
    setUserGroup(group);
  };
  return (
    <>
      <div className="flex items-center">
        <div className="flex w-full shrink-1 justify-center">
          <SimpleText text={"Group"} align={"text-center"}></SimpleText>
        </div>
        <div className="flex w-full shrink-1 justify-center">
          <SelectBox
            size="h-12 w-full"
            elements={initUserGroup}
            handleChange={handleChangeGroup}
          ></SelectBox>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex w-full shrink-1 justify-center">
          <SimpleText text={"Label"} align={"text-center"}></SimpleText>
        </div>
        <div className="flex w-full shrink-1 justify-center">
          <InputBase
            size="h-12 w-full"
            type="text"
            value={match.label}
            style="bg-white border border-solid border-gray-300 item-center rounded-lg px-2 py-2"
            handleChange={handleChangeLabel}
          ></InputBase>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex w-full shrink-1 justify-center">
          <SimpleText text={"Date"} align={"text-center"}></SimpleText>
        </div>
        <div className="flex w-full shrink-1 justify-center">
          <MyDatePicker
            handleChange={handleChangeDate}
            date={match.date}
          ></MyDatePicker>
        </div>
      </div>
    </>
  );
};

export default InputResultLabel;
