import { GetStaticProps } from "next";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { getData } from "../lib/csvData";
import ResultInput from "../components/ResultInput";

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
          <div className="w-full">
            <ResultInput></ResultInput>
          </div>
        </main>
      </div>
    </>
  );
};

/**
 * {@linkcode Home}データエントリSSGへの値取得用のファンクション
 *
 * @returns 未使用
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
