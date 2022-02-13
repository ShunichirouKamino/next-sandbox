import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";

export const Post = () => {
  return <Layout home={undefined}>...</Layout>;
};

/**
 * {@linkcode Post}投稿記事Post
 *
 * @returns
 */
export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  // params.id を使用して、ブログの投稿に必要なデータを取得する
};

export default Post;
