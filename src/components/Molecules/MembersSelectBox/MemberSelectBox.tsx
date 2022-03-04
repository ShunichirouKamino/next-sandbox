import { useRecoilState } from "recoil";
import { memberState } from "../../../store/atoms/matchResult";
import SelectBox from "../../Atom/SelectBox";

export type MemberSelectBoxProp = {
  elements: string[];
  handleChange?: React.ChangeEventHandler<HTMLSelectElement>;
  size?: string; // example "h-12 w-96"
  index: number;
};

const MemberSelectBox: React.FC<MemberSelectBoxProp> = ({
  elements,
  size = "h-12 w-96",
  index,
}): JSX.Element => {
  // perticipant
  const [members, setMembers] = useRecoilState(memberState);
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (c) => {
    const member = c.target.value;
    const newMembers = [...members];
    newMembers[index] = member;
    console.log(newMembers);
    setMembers(newMembers);
  };
  return (
    <>
      <SelectBox elements={elements} handleChange={handleChange}></SelectBox>
    </>
  );
};

export default MemberSelectBox;
