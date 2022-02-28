import { useRecoilState, useRecoilValue } from "recoil";
import { useMutation } from "urql";
import { createResultMutation } from "../../../graphql/ResultQuery";
import {
  matchState,
  memberState,
  resultState,
} from "../../../store/atoms/matchResult";
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

  const submit = async () => {
    results.map(async (result) => {
      const valiables = {
        date: match.date.toISOString().split("T")[0],
        label: match.label,
        each: [
          { name: members[0], score: result[0] },
          { name: members[1], score: result[1] },
          { name: members[2], score: result[2] },
          { name: members[3], score: result[3] },
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

  const onClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await submit();
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
