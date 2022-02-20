import { GetStaticProps } from "next";
import AnalysisPage from "../components/AnalysisPage";
import ResultPage from "../components/ReesultPage";
import { getRank, getRankTimes, MemberRankType } from "../lib/calc";
import { getData } from "../lib/csvData";

/**
 * Homeページ表示用SSGファンクション
 *
 * @param allPostsData ブログ記事リスト
 * @returns Homeページの{@link JSX.Element}
 */
const Home = ({ data }): JSX.Element => {
  const members: string[] = data.header;
  const results: number[][] = data.row;

  const membersRank: MemberRankType[] = members.map((m) => {
    return getRankTimes(m, members, results);
  });
  console.log(membersRank);
  const { first, second, third, fourth } = membersRank[5];
  const { member } = membersRank[5];

  return (
    <>
      <AnalysisPage
        results={[[first, second, third, fourth]]}
        member={member}
      ></AnalysisPage>
      <ResultPage members={data.header} results={data.row}></ResultPage>
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
