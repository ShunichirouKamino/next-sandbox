import { GetServerSideProps, GetStaticProps } from "next";
import { getRankPercent, getRankTimes } from "../lib/calc";
import { getData } from "../lib/csvData";
import { MemberRankType } from "../types/result";
import { RecoilRoot } from "recoil";
import { ToastProvider } from "react-toast-notifications";
import ResultSeane from "../components/Seane/ResultSeane";
import { clientOptions } from "../lib/urqlClient";
import { withUrqlClient } from "next-urql";

/**
 * ResultPage表示用SSGファンクション
 *
 * @param data 対局データ
 * @returns ResultPageの{@link JSX.Element}
 */
const ResultPage = ({ data }): JSX.Element => {
  const toastAutoDismiss: boolean = true;
  const toastDisMissTimeout: number = 3_000;
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
      <RecoilRoot>
        <ToastProvider
          autoDismiss={toastAutoDismiss}
          autoDismissTimeout={toastDisMissTimeout}
          placement={"top-center"}
        >
          <ResultSeane data={undefined}></ResultSeane>
        </ToastProvider>
      </RecoilRoot>
    </>
  );
};

/**
 * {@linkcode ResultPage}ページSSGへの値取得用のファンクション
 *
 * @returns 対局結果
 */
export const getStaticProps: GetServerSideProps = async () => {
  const data = getData();
  return {
    props: {
      data,
    },
  };
};

export default withUrqlClient(
  (ssr) => clientOptions,
  { ssr: false } // Important so we don't wrap our component in getInitialProps
)(ResultPage);
