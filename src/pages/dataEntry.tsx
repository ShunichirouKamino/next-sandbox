import { GetStaticProps } from "next";
import Header from "../components/Molecules/Header";
import { getData } from "../lib/csvData";
import ResultInput from "../components/Molecules/ResultInput";
import Footer from "../components/Footer";
import MembersSelectBox from "../components/Molecules/MembersSelectBox";

/**
 * DataEntryPage表示用SSGファンクション
 *
 * @param data 対局データ
 * @returns DataEntryPageの{@link JSX.Element}
 */
const DataEntryPage = ({ data }): JSX.Element => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow w-full">
          <Header></Header>
          <div className="w-full">
            <MembersSelectBox></MembersSelectBox>
            <ResultInput></ResultInput>
          </div>
        </main>
        <Footer></Footer>
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
