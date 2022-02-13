import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData, idList } from "../lib/posts";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * Homeページ表示用SSGファンクション
 *
 * @param props ブログ記事リスト
 * @returns Homeページの{@link JSX.Element}
 */
const Home: NextPage<Props> = (props: idList): JSX.Element => {
  const blogList = Array.from(props);
  console.log(props);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {blogList.map(({ id /*date, title*/ }) => (
            <li className={utilStyles.listItem} key={id}>
              <br />
              {id}
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

/**
 * {@linkcode Home}ページSSGへの値取得用のファンクション
 *
 * @returns homeに表示するブログ記事リスト
 */
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
