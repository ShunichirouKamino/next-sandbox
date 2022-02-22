import { GetStaticProps } from "next";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { getData } from "../lib/csvData";

/**
 * DataEntryPage表示用SSGファンクション
 *
 * @param data 対局データ
 * @returns DataEntryPageの{@link JSX.Element}
 */
const DataEntryPage = ({ data }): JSX.Element => {
  return (
    <>
      <div className="flex">
        <SideBar></SideBar>
        <main className="w-full">
          <Header></Header>
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

export default DataEntryPage;
