import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Layout from "../../components/layout";
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
    <Layout home>
      {postData.title}
      <br />
      {postData.blogId}
      <br />
      {postData.date}
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
  console.log(params);
  const postData = getPostData(params.blogId as string);
  console.log(postData);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
