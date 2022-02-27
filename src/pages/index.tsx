import { GetServerSideProps, GetStaticProps } from "next";
import Footer from "../components/Footer";
import Header from "../components/Molecules/Header";
import { getData } from "../lib/csvData";
import ResultPage from "./result";
import ResultList, { ResultType } from "../graphql/ResultQuery";
import findResultsByName from "../graphql/ResultQuery";
import ProviderClient from "../graphql/ProviderClient";
import ResultQuery from "../graphql/ResultQuery";

/**
 * Homeページ表示用SSGファンクション
 *
 * @param data 未使用
 * @returns Homeページの{@link JSX.Element}
 */
const Home = (): JSX.Element => {
  return (
    <>
      <ProviderClient>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow w-full">
            <Header></Header>
            <ResultQuery></ResultQuery>
          </main>
          <Footer></Footer>
        </div>
      </ProviderClient>
    </>
  );
};

export default Home;
