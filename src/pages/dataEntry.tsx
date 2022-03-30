import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { getData } from "../lib/csvData";
import { RecoilRoot } from "recoil";
import DataEntryScene from "../components/Scene/DataEntryScene";
import { withUrqlClient } from "next-urql";
import { clientOptions } from "../lib/urqlClient";
import { ToastProvider } from "react-toast-notifications";

type DataEntryPageProps = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * DataEntryPage表示用SSGファンクション
 *
 * @param data 対局データ
 * @returns DataEntryPageの{@link JSX.Element}
 */
const DataEntryPage: NextPage<DataEntryPageProps> = ({ data }): JSX.Element => {
  const toastAutoDismiss: boolean = true;
  const toastDisMissTimeout: number = 3_000;
  return (
    <>
      <RecoilRoot>
        <ToastProvider
          autoDismiss={toastAutoDismiss}
          autoDismissTimeout={toastDisMissTimeout}
          placement={"top-center"}
        >
          <DataEntryScene data={data}></DataEntryScene>
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
