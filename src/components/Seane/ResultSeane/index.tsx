import { getRank } from "../../../lib/calc";
import { useToasts } from "react-toast-notifications";
import { useRecoilState, useRecoilValue } from "recoil";
import { useMutation, useQuery } from "urql";
import {
  createResultMutation,
  findResults,
} from "../../../graphql/ResultQuery";
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
import RankResultPage from "../../RankResultTable";
import MembersSelectBox from "../../Molecules/MembersSelectBox";
import ResultInput from "../../Molecules/ResultInput";
import ResultTable from "../../ResultTable";

export type ResultSeaneProps = {
  data;
};

/**
 * ResultSeaneページのルートコンポーネント
 *
 * @param param
 * @returns
 */
const ResultSeane: React.FC<ResultSeaneProps> = ({ data }): JSX.Element => {
  const [res, executeQuery] = useQuery({
    query: findResults,
    variables: { date: "2021-04-29", label: "箱根合宿" },
  });
  const members: string[] = [
    "",
    "上野",
    "宇野",
    "對馬",
    "岡見",
    "河野",
    "山上",
  ];
  const results: number[][] = null;

  if (res.fetching) {
    return <div>...loading</div>;
  }

  if (res.error) {
    return <div>error: {res.error.message}</div>;
  }

  const resResults = res.data.findResults.data;

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow w-full">
          <Header></Header>
          <div>
            {resResults ? (
              resResults.map((r) => (
                <div>
                  {r.label} {r.date}
                </div>
              ))
            ) : (
              <div>not found</div>
            )}
          </div>
          {/* <RankResultPage memberRankType={[]}></RankResultPage>
          <ResultTable members={members} results={results}></ResultTable> */}
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ResultSeane;
