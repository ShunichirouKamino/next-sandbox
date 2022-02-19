import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { getData } from "../../lib/csvData";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Result: NextPage<Props> = ({ resultData }: Props): JSX.Element => {
  return <Head>{resultData.members}</Head>;
};

/**
 * {@linkcode Post}ページSSGへの値取得用のファンクション
 *
 * @returns postに表示するブログ記事リスト
 */
export const getStaticProps: GetStaticProps = async () => {
  const resultData = await getData();

  return {
    props: {
      resultData,
    },
  };
};

export default Result;
