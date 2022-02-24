import { GetStaticProps } from "next";
import RankResultPage from "../components/RankResultTable";
import Header from "../components/Molecules/Header";
import { getRankPercent, getRankTimes } from "../lib/calc";
import { getData } from "../lib/csvData";
import { MemberRankType } from "../types/result";
import ResultTable from "../components/ResultTable";
import Footer from "../components/Footer";

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
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow w-full">
          <Header></Header>
          <RankResultPage memberRankType={membersRanks}></RankResultPage>
          <ResultTable members={data.header} results={data.row}></ResultTable>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

/**
 * {@linkcode ResultPage}ページSSGへの値取得用のファンクション
 *
 * @returns 対局結果
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
