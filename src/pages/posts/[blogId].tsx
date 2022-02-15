import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

import { getAllPostIds, getPostData } from "../../lib/posts";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * ブログPostページ表示用SSGファンクション
 *
 * @param postData ブログ記事
 * @returns ブログPostページの{@link JSX.Element}
 */
const Post: NextPage<Props> = ({ postData }: Props): JSX.Element => {
  return (
    <Layout home={undefined}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
    </Layout>
  );
};

/**
 * {@linkcode Post}ページSSGへのパス取得用のファンクション
 *
 * @returns postページの動的パス
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

/**
 * {@linkcode Post}ページSSGへの値取得用のファンクション
 *
 * @returns postに表示するブログ記事リスト
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.blogId as string);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
