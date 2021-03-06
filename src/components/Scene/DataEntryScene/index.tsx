import { getRank } from "../../../lib/calc";
import { useToasts } from "react-toast-notifications";
import { useRecoilState, useRecoilValue } from "recoil";
import { useMutation } from "urql";
import { createResultMutation } from "../../../graphql/ResultQuery";
import { numberValidator } from "../../../lib/validator";
import {
  matchState,
  memberState,
  resultState,
  userGroupState,
} from "../../../store/atoms/matchResult";
import { ResultType } from "../../../types/result";
import SimpleButton from "../../Atom/SimpleButton";
import Footer from "../../Footer";
import InputResultLabel from "../../InputResultLabel";
import Header from "../../Molecules/Header";
import MembersSelectBox from "../../Molecules/MembersSelectBox";
import ResultInput from "../../Molecules/ResultInput";

export type DataEntrySceneProps = {
  data;
};

/**
 * DataEntry静的ページのルートコンポーネント
 *
 * @param param0
 * @returns
 */
const DataEntryScene: React.FC<DataEntrySceneProps> = ({
  data,
}): JSX.Element => {
  // 外から渡す
  const selectMembers = ["", "上野", "宇野", "對馬", "岡見", "河野", "山上"];
  const sendMembers = selectMembers.filter((m) => m !== "");
  const userGroup = useRecoilValue(userGroupState);
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
    const isInvalidUserGroup = await isInvalidGroup();

    if (isDuplicated) {
      addToast("Duplicated members.", { appearance: "error" });
    }

    if (isInvalidUserGroup) {
      addToast("Invalid user group.", { appearance: "error" });
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
      !isValidScore ||
      isInvalidUserGroup
    ) {
      return;
    }

    // 順位計算
    const ranks = results.map((result) => {
      const scoreNumbers = result.map((score) => {
        return score === "" ? undefined : Number(score);
      });
      return result.map(async (score, index) => {
        return await getRank(members[index], members, scoreNumbers);
      });
    });

    results.map(async (result, index) => {
      const valiables: ResultType = {
        date: match.date.toISOString().split("T")[0],
        label: match.label,
        index: index,
        userGroup: {
          groupName: userGroup,
          member: sendMembers,
        },
        each: [
          {
            name: members[0],
            score: Number(result[0]),
            rank: await ranks[index][0],
          },
          {
            name: members[1],
            score: Number(result[1]),
            rank: await ranks[index][1],
          },
          {
            name: members[2],
            score: Number(result[2]),
            rank: await ranks[index][2],
          },
          {
            name: members[3],
            score: Number(result[3]),
            rank: await ranks[index][3],
          },
          {
            name: members[4],
            score: Number(result[4]),
            rank: await ranks[index][4],
          },
          {
            name: members[5],
            score: Number(result[5]),
            rank: await ranks[index][5],
          },
        ],
      };
      await executeCreateMutation(valiables).then((res) => {
        if (res.error) {
          console.log(res.error);
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
   * userGroupの値が空文字でないことを確認します.
   *
   * @returns 空文字の場合はfalse, 正しい場合はtrue
   */
  const isInvalidGroup = async (): Promise<boolean> => {
    if (userGroup !== "") {
      return false;
    } else {
      return true;
    }
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

export default DataEntryScene;
