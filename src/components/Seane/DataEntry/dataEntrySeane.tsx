import { useToasts } from "react-toast-notifications";
import { useRecoilValue } from "recoil";
import { useMutation } from "urql";
import { createResultMutation } from "../../../graphql/ResultQuery";
import { numberValidator } from "../../../lib/validator";
import {
  matchState,
  memberState,
  resultState,
} from "../../../store/atoms/matchResult";
import { ResultType } from "../../../types/result";
import SimpleButton from "../../Atom/SimpleButton";
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
  const selectMembers = ["", "SK", "AU", "KT", "TK", "SY", "TO"];
  const members = useRecoilValue(memberState);
  const results = useRecoilValue(resultState);
  const match = useRecoilValue(matchState);
  const { addToast } = useToasts();
  const [createdState, executeCreateMutation] =
    useMutation(createResultMutation);

  /**
   * 入力データの永続化を行います.
   */
  const submit = async () => {
    const isTotalZeroList = await isTotalZero();
    const isDuplicated = await isInvalidMembers();
    const isValidScore = await isValid();
    if (isDuplicated) {
      addToast("Duplicated members.", { appearance: "error" });
    }

    isTotalZeroList.map((t, index) => {
      const row = index + 1;
      if (!t) {
        addToast(`The total of the ${row} line is not zero.`, {
          appearance: "error",
        });
      }
    });

    if (!isValidScore) {
      addToast("Incorrect input.", { appearance: "error" });
    }

    if (
      !isTotalZeroList.every((t) => t === true) ||
      isDuplicated ||
      !isValidScore
    ) {
      return;
    }

    results.map(async (result) => {
      console.log(result);
      const valiables: ResultType = {
        date: match.date.toISOString().split("T")[0],
        label: match.label,
        each: [
          { name: members[0], score: Number(result[0]) },
          { name: members[1], score: Number(result[1]) },
          { name: members[2], score: Number(result[2]) },
          { name: members[3], score: Number(result[3]) },
          { name: members[4], score: Number(result[4]) },
          { name: members[5], score: Number(result[5]) },
        ],
      };
      await executeCreateMutation(valiables).then((res) => {
        if (res.error) {
          addToast("System Error.", { appearance: "error" });
        }
      });
    });

    addToast("Success.", { appearance: "success" });
  };

  const onClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await submit();
  };

  /**
   * メンバーの重複チェックです.
   * 合わせて空文字チェックも行います.
   *
   * @returns 重複している場合もしくは空のmemberが存在する場合はtrue
   */
  const isInvalidMembers = async (): Promise<boolean> => {
    if (members.every((m) => !m)) {
      return true;
    }
    const membersSet = new Set(members);
    console.log(members);
    return membersSet.size !== members.length;
  };

  /**
   * スコアの合計値が0であるかのチェックです.
   *
   * @returns 合計値が0の要素はtrue
   */
  const isTotalZero = async (): Promise<boolean[]> => {
    const totals = results.map((result) => {
      return result.reduce((sum, element) => sum + Number(element), 0);
    });
    return totals.map((t) => t === 0);
  };

  /**
   * 以下のバリデーションエラーの判定を行います.
   *
   * スコアに4桁以上の数値が入力されている。
   * 数値が入力されている項目が一戦につき4項目のみ。
   *
   * @returns バリデーション結果
   */
  const isValid = async (): Promise<boolean> => {
    const rows = results.map((result) => {
      let memberCount = 0;
      result.map((r) => {
        if (numberValidator(r)) {
          memberCount++;
          console.log(memberCount);
        }
      });
      return memberCount === 4;
    });
    return rows.every((row) => row === true);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow w-full">
          <Header></Header>
          <div className="w-full">
            <InputResultLabel onClick={onClick}></InputResultLabel>
          </div>
          <div className="w-full">
            <MembersSelectBox
              members={members}
              selectMembers={selectMembers}
            ></MembersSelectBox>
            <ResultInput></ResultInput>
          </div>
          <div className="flex w-full justify-center">
            <SimpleButton onClick={onClick} text="Save"></SimpleButton>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default DataEntrySeane;
