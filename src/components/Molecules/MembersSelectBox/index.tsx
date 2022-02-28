import { useRecoilState } from "recoil";
import { memberState } from "../../../store/atoms/matchResult";
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
      <div className="flex items-center">
        <div className="w-10 shrink-0 invisible"></div>
        <div className="w-10 shrink-0 invisible"></div>
        <div className="flex w-full shrink-1">
          <div className="w-1/4 shrink-0">
            <MemberSelectBox elements={members} index={0}></MemberSelectBox>
          </div>
          <div className="w-1/4 shrink-0">
            <MemberSelectBox elements={members} index={1}></MemberSelectBox>
          </div>
          <div className="w-1/4 shrink-0">
            <MemberSelectBox elements={members} index={2}></MemberSelectBox>
          </div>
          <div className="w-1/4 shrink-0">
            <MemberSelectBox elements={members} index={3}></MemberSelectBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembersSelectBox;
