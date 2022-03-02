import MemberSelectBox from "./MemberSelectBox";

/**
 * SelectBoxに表示するメンバーの一覧
 */
export type MembersSelectBoxProps = {
  members: string[];
};

const MembersSelectBox: React.FC<MembersSelectBoxProps> = ({ members }) => {
  return (
    <>
      <p className="flex items-center">
        <span className="w-10 shrink-0 invisible"></span>
        <span className="w-10 shrink-0 invisible"></span>
        <div className="flex w-full shrink-1">
          <span className="w-1/4 shrink-0">
            <MemberSelectBox elements={members} index={0}></MemberSelectBox>
          </span>
          <span className="w-1/4 shrink-0">
            <MemberSelectBox elements={members} index={1}></MemberSelectBox>
          </span>
          <span className="w-1/4 shrink-0">
            <MemberSelectBox elements={members} index={2}></MemberSelectBox>
          </span>
          <span className="w-1/4 shrink-0">
            <MemberSelectBox elements={members} index={3}></MemberSelectBox>
          </span>
        </div>
      </p>
    </>
  );
};

export default MembersSelectBox;
