import PlusButton from "../../Atom/icons/PlusButton";
import RemoveButton from "../../Atom/icons/RemoveButton";
import SelectBox from "../../Atom/SelectBox";

export type MembersSelectBoxProps = {};

const MembersSelectBox: React.FC<MembersSelectBoxProps> = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-10 shrink-0 invisible"></div>
        <div className="w-10 shrink-0 invisible"></div>
        <div className="flex w-full shrink-1">
          <div className="w-1/4 shrink-0">
            <SelectBox elements={[]}></SelectBox>
          </div>
          <div className="w-1/4 shrink-0">
            <SelectBox elements={[]}></SelectBox>
          </div>
          <div className="w-1/4 shrink-0">
            <SelectBox elements={[]}></SelectBox>
          </div>
          <div className="w-1/4 shrink-0">
            <SelectBox elements={[]}></SelectBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembersSelectBox;
