import SelectBox from "../../Atom/SelectBox";

export type MembersSelectBoxProps = {
  members: string[];
};

const MembersSelectBox: React.FC<MembersSelectBoxProps> = ({ members }) => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-10 shrink-0 invisible"></div>
        <div className="w-10 shrink-0 invisible"></div>
        <div className="flex w-full shrink-1">
          <div className="w-1/4 shrink-0">
            <SelectBox elements={members}></SelectBox>
          </div>
          <div className="w-1/4 shrink-0">
            <SelectBox elements={members}></SelectBox>
          </div>
          <div className="w-1/4 shrink-0">
            <SelectBox elements={members}></SelectBox>
          </div>
          <div className="w-1/4 shrink-0">
            <SelectBox elements={members}></SelectBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembersSelectBox;
