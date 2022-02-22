import { GetStaticProps } from "next";
import AnalysisPage from "../components/AnalysisPage";
import Header from "../components/Header";
import ResultPage from "../components/ReesultPage";
import Body from "../components/ReesultPage/Body/Body";
import SideBar from "../components/SideBar";
import { getRankPercent, getRankTimes } from "../lib/calc";
import { getData } from "../lib/csvData";
import { MemberRankType } from "../types/result";

/**
 * Homeページ表示用SSGファンクション
 *
 * @param allPostsData ブログ記事リスト
 * @returns Homeページの{@link JSX.Element}
 */
const Home = ({ data }): JSX.Element => {
  const members: string[] = data.header;
  const results: number[][] = data.row;

  const membersRanks: MemberRankType[] = members.map((m) => {
    const rankTimes = getRankTimes(m, members, results);
    const rankPersent = getRankPercent(m, members, results);
    return {
      member: m,
      rankSet: rankTimes,
      rankPercentSet: rankPersent,
    };
  });

  return (
    <>
      <div className="flex">
        <SideBar></SideBar>
        <main className="w-full">
          <Header></Header>
          <AnalysisPage memberRankType={membersRanks}></AnalysisPage>
          <ResultPage members={data.header} results={data.row}></ResultPage>
          <Body></Body>
        </main>
      </div>
    </>
    // <Layout home>
    //   <Head>
    //     <title>{siteTitle}</title>
    //   </Head>
    //   <section>
    //     <h2>Blog</h2>
    //     <ul>
    //       {allPostsData.map(({ blogId, date, title }) => (
    //         <li key={blogId}>
    //           <Link href={`/posts/${blogId}`}>
    //             <a>{title}</a>
    //           </Link>
    //           <br />
    //           <small>
    //             <Date dateString={date} />
    //           </small>
    //         </li>
    //       ))}
    //     </ul>
    //   </section>
    // </Layout>
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
