import { useRecoilState } from "recoil";
import { useMutation } from "urql";
import { createResultMutation } from "../../../graphql/ResultQuery";
import {
  labelState,
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
  const [labels, setLabels] = useRecoilState(labelState);
  const [createdState, executeCreateMutation] =
    useMutation(createResultMutation);

  const submit = async () => {
    const valiables = {};
    await executeCreateMutation(valiables).then((result) => {
      alert(result.error);
      if (result.error) {
        console.error("Oh no!", result.error);
      }
    });
  };

  const onClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await submit();
    alert("submit終わり");
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
