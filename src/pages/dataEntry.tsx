import { GetStaticProps } from "next";
import { getData } from "../lib/csvData";
import { RecoilRoot } from "recoil";
import DataEntrySeane from "../components/Seane/DataEntry/dataEntrySeane";
import { withUrqlClient } from "next-urql";
import { clientOptions } from "../lib/urqlClient";
import { ToastProvider } from "react-toast-notifications";

/**
 * DataEntryPage表示用SSGファンクション
 *
 * @param data 対局データ
 * @returns DataEntryPageの{@link JSX.Element}
 */
const DataEntryPage = ({ data }): JSX.Element => {
  const toastAutoDismiss: boolean = true;
  const toastDisMissTimeout: number = 3_000;
  return (
    <>
      <RecoilRoot>
        <ToastProvider
          autoDismiss={toastAutoDismiss}
          autoDismissTimeout={toastDisMissTimeout}
        >
          <DataEntrySeane data={data}></DataEntrySeane>
        </ToastProvider>
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

export default withUrqlClient(
  (ssr) => clientOptions,
  { ssr: false } // Important so we don't wrap our component in getInitialProps
)(DataEntryPage);
