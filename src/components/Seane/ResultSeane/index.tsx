import { useQuery } from "urql";
import { findResults } from "../../../graphql/ResultQuery";
import {
  EachResultType,
  MemberRankType,
  RankPercentSet,
  RankSet,
  UserGroup,
} from "../../../types/result";
import Footer from "../../Footer";
import Header from "../../Molecules/Header";
import RankResultPage from "../../RankResultTable";
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
  const members: string[] = ["SK", "AU", "KT", "TK", "SY", "TO"];
  const membersSelectBox: string[] = ["", ...members];

  if (res.fetching) {
    return <div>...loading</div>;
  }

  if (res.error) {
    return <div>error: {res.error.message}</div>;
  }

  const resResults /*: ResultType[] TODO mutation時と型が違うので調査*/ =
    res.data.findResults.data;

  const eachResults: EachResultType[][] = resResults.map((r) => r.each.data);
  const eachResultsOnly: number[][] = eachResults.map((er) => {
    return er.map((e) => {
      return e.score;
    });
  });
  const userGroup: UserGroup[] = resResults.map((r) => r.userGroup);

  const rankSet: RankSet[] = members.map((m, index) => {
    const memberResults: EachResultType[] = eachResults.map(
      (er: EachResultType[]) => {
        const a: EachResultType = er.find((e) => e.name === m);
        return a;
      }
    );
    return {
      first: memberResults.filter((m) => m.rank === 1).length,
      second: memberResults.filter((m) => m.rank === 2).length,
      third: memberResults.filter((m) => m.rank === 3).length,
      fourth: memberResults.filter((m) => m.rank === 4).length,
    };
  });

  const rankPersentSet: RankPercentSet[] = members.map((m, index) => {
    const numberOfTimes =
      rankSet[index].first +
      rankSet[index].second +
      rankSet[index].third +
      rankSet[index].fourth;
    return {
      first: Math.round((rankSet[index].first / numberOfTimes) * 1000) / 10,
      second: Math.round((rankSet[index].second / numberOfTimes) * 1000) / 10,
      third: Math.round((rankSet[index].third / numberOfTimes) * 1000) / 10,
      fourth: Math.round((rankSet[index].fourth / numberOfTimes) * 1000) / 10,
    };
  });

  const membersRanks: MemberRankType[] = members.map((m, index) => {
    return {
      member: m,
      rankSet: rankSet[index],
      rankPercentSet: rankPersentSet[index],
    };
  });

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow w-full">
          <Header></Header>
          <RankResultPage memberRankType={membersRanks}></RankResultPage>
          <ResultTable
            members={members}
            results={eachResultsOnly}
          ></ResultTable>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ResultSeane;
