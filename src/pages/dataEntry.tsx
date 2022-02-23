import { GetStaticProps } from "next";
import Header from "../components/Header";
import InputBase from "../components/Atom/Input/input";
import SideBar from "../components/SideBar";
import { getData } from "../lib/csvData";
import ResultInput from "../components/ResultInput/input";
import PlusButton from "../components/Atom/icons/PlusButton";

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
          <div className="flex items-center">
            <div className="w-1/7">
              <PlusButton onClick={undefined}></PlusButton>
            </div>
            <div className="w-full">
              <ResultInput></ResultInput>
            </div>
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
