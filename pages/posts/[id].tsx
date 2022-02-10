import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";

export default function Post() {
  return <Layout home={undefined}>...</Layout>;
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  // params.id を使用して、ブログの投稿に必要なデータを取得する
}
