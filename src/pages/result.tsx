import { GetStaticProps } from "next";
import RankResultPage from "../components/RankResultTable";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { getRankPercent, getRankTimes } from "../lib/calc";
import { getData } from "../lib/csvData";
import { MemberRankType } from "../types/result";
import ResultTable from "../components/ResultTable";

/**
 * ResultPage表示用SSGファンクション
 *
 * @param data 対局データ
 * @returns ResultPageの{@link JSX.Element}
 */
const ResultPage = ({ data }): JSX.Element => {
  const members: string[] = data.header;
  const results: number[][] = data.row;

  const membersRanks: MemberRankType[] = members.map((m) => {
    const rankTimes = getRankTimes(m, members, results);
    const rankPersent = getRankPercent(m, members, results);
    return {
      member: m,
      rankSet: rankTimes,
      rankPercentSet: rankPersent,
    };
  });

  return (
    <>
      <div className="flex">
        <SideBar></SideBar>
        <main className="w-full">
          <Header></Header>
          <RankResultPage memberRankType={membersRanks}></RankResultPage>
          <ResultTable members={data.header} results={data.row}></ResultTable>
        </main>
      </div>
    </>
  );
};

/**
 * {@linkcode Home}ページSSGへの値取得用のファンクション
 *
 * @returns homeに表示するブログ記事リスト
 */
export const getStaticProps: GetStaticProps = async () => {
  const data = getData();
  return {
    props: {
      data,
    },
  };
};

export default ResultPage;
