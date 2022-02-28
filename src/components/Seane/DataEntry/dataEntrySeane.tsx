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
  const [members, setMembers] = useRecoilState(memberState);
  setMembers(data.header);
  const [results, setResults] = useRecoilState(resultState);
  const match = useRecoilValue(matchState);
  const [createdState, executeCreateMutation] =
    useMutation(createResultMutation);

  const submit = async () => {
    const valiables = {
      date: match.date.toISOString().split("T")[0],
      label: match.label,
      each: [
        { name: "D", score: 13.0 },
        { name: "A", score: 51.0 },
        { name: "B", score: -9.7 },
        { name: "C", score: -54.3 },
      ],
    };
    await executeCreateMutation(valiables).then((res) => {
      if (res.error) {
        alert(res.error);
        return <div>error: {res.error.message}</div>;
      }
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
            <MembersSelectBox members={members}></MembersSelectBox>
            <ResultInput></ResultInput>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default DataEntrySeane;
