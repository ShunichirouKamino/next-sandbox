import MemberSelectBox from "./MemberSelectBox";

/**
 * SelectBoxに表示するメンバーの一覧
 */
export type MembersSelectBoxProps = {
  selectMembers: string[];
  members: string[];
};

const MembersSelectBox: React.FC<MembersSelectBoxProps> = ({
  members,
  selectMembers,
}) => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-7 shrink-0 invisible"></div>
        <div className="w-7 shrink-0 invisible"></div>
        <div className="flex w-full shrink-1">
          {members.map((m, index) => {
            return (
              <div className="w-1/6 shrink-0">
                <MemberSelectBox
                  elements={selectMembers}
                  index={index}
                ></MemberSelectBox>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MembersSelectBox;
