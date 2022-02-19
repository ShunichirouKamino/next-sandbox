import { GetStaticProps } from "next";
import ResultPage from "../components/ReesultPage";
import TopPage from "../components/ReesultPage";
import { getData } from "../lib/csvData";

/**
 * Homeページ表示用SSGファンクション
 *
 * @param allPostsData ブログ記事リスト
 * @returns Homeページの{@link JSX.Element}
 */
const Home = ({ result }): JSX.Element => {
  return (
    <>
      <ResultPage
        resultData={{
          columns: result.members,
          rawdata: result.results,
        }}
      ></ResultPage>
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
  const result = getData();
  return {
    props: {
      result,
    },
  };
};

export default Home;
