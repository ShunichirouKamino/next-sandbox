import { GetStaticProps } from "next";
import Footer from "../components/Footer";
import Header from "../components/Molecules/Header";
import Body from "../components/ResultTable/Body/Body";
import SideBar from "../components/Molecules/SideBar";
import { getData } from "../lib/csvData";
import ResultPage from "./result";
import ResultFetch from "../graphql/ResultFetch";

/**
 * Homeページ表示用SSGファンクション
 *
 * @param data 未使用
 * @returns Homeページの{@link JSX.Element}
 */
const Home = ({ data }): JSX.Element => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow w-full">
          <Header></Header>
          <ResultFetch></ResultFetch>
        </main>
        <Footer></Footer>
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

export default Home;
