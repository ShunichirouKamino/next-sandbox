import { GetStaticProps } from "next";
import { getData } from "../lib/csvData";
import { RecoilRoot } from "recoil";
import DataEntrySeane from "../components/Seane/DataEntry/dataEntrySeane";

/**
 * DataEntryPage表示用SSGファンクション
 *
 * @param data 対局データ
 * @returns DataEntryPageの{@link JSX.Element}
 */
const DataEntryPage = ({ data }): JSX.Element => {
  return (
    <>
      <RecoilRoot>
        <DataEntrySeane data={data}></DataEntrySeane>
      </RecoilRoot>
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
