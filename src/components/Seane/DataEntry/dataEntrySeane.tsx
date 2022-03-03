import { useRecoilValue } from "recoil";
import { useMutation } from "urql";
import { createResultMutation } from "../../../graphql/ResultQuery";
import {
  matchState,
  memberState,
  resultState,
} from "../../../store/atoms/matchResult";
import { ResultType } from "../../../types/result";
import Footer from "../../Footer";
import InputResultLabel from "../../InputResultLabel";
import Header from "../../Molecules/Header";
import MembersSelectBox from "../../Molecules/MembersSelectBox";
import ResultInput from "../../Molecules/ResultInput";

export type DataEntrySeaneProps = {
  data;
};

/**
 * DataEntry静的ページのルートコンポーネント
 *
 * @param param0
 * @returns
 */
const DataEntrySeane: React.FC<DataEntrySeaneProps> = ({
  data,
}): JSX.Element => {
  // 外から渡す
  const selectMembers = ["A", "B", "C", "D", "E", "F"];
  const members = useRecoilValue(memberState);
  const results = useRecoilValue(resultState);
  const match = useRecoilValue(matchState);
  const [createdState, executeCreateMutation] =
    useMutation(createResultMutation);

  /**
   * 入力データの永続化を行います.
   */
  const submit = async () => {
    results.map(async (result) => {
      const valiables: ResultType = {
        date: match.date.toISOString().split("T")[0],
        label: match.label,
        each: [
          { name: members[0], score: Number(result[0]) },
          { name: members[1], score: Number(result[1]) },
          { name: members[2], score: Number(result[2]) },
          { name: members[3], score: Number(result[3]) },
        ],
      };
      await executeCreateMutation(valiables).then((res) => {
        if (res.error) {
          alert(res.error);
          return <div>error: {res.error.message}</div>;
        }
      });
    });
  };

  /**
   * メンバーの重複チェックです.
   *
   * @returns 重複している場合はtrue
   */
  const isDuplicatedMembers = async (): Promise<boolean> => {
    const membersSet = new Set(members);
    return membersSet.size !== members.length;
  };

  /**
   * スコアの合計値が0であるかのチェックです.
   *
   * @returns 合計値が0でない要素のindex
   */
  const isTotalZero = async (): Promise<boolean[]> => {
    const totals = results.map((result) => {
      return result.reduce((sum, element) => sum + Number(element), 0);
    });

    return totals.map((t) => t === 0);
  };

  const onClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await submit();
  };

  if (!isTotalZero) {
    return (
      <>
        <div
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
          role="alert"
        >
          <p className="font-bold">Be Warned</p>
          <p>Something not ideal might be happening.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow w-full">
          <Header></Header>
          <div className="w-full">
            <InputResultLabel onClick={onClick}></InputResultLabel>
          </div>
          <div className="w-full">
            <MembersSelectBox members={selectMembers}></MembersSelectBox>
            <ResultInput></ResultInput>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default DataEntrySeane;
