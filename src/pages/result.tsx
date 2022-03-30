import { GetServerSideProps } from "next";
import { getData } from "../lib/csvData";
import { RecoilRoot } from "recoil";
import { ToastProvider } from "react-toast-notifications";
import ResultScene from "../components/Scene/ResultScene";
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

  return (
    <>
      <RecoilRoot>
        <ToastProvider
          autoDismiss={toastAutoDismiss}
          autoDismissTimeout={toastDisMissTimeout}
          placement={"top-center"}
        >
          <ResultScene data={undefined}></ResultScene>
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
