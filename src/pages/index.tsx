import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import Date from "../components/Date";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * Homeページ表示用SSGファンクション
 *
 * @param allPostsData ブログ記事リスト
 * @returns Homeページの{@link JSX.Element}
 */
const Home: NextPage<Props> = ({ allPostsData }: Props): JSX.Element => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ blogId, date, title }) => (
            <li key={blogId}>
              <Link href={`/posts/${blogId}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
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
