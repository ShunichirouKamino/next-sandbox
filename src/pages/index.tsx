import { getSortedPostsData } from "../lib/posts";
import { GetServerSideProps, NextPage } from "next";
import TopPage from "../components/TopPage";
import Table from "../components/Table";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Body from "../components/TopPage/Body/Body";

/**
 * Homeページ表示用SSGファンクション
 *
 * @param allPostsData ブログ記事リスト
 * @returns Homeページの{@link JSX.Element}
 */
const Home = (): JSX.Element => {
  return (
    <>
      <TopPage text={""}></TopPage>
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

export default Home;
