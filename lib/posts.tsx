import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export type blogList = {
  blogId: string;
  title: string;
  date: string;
}[];

export type blog = {
  blogId: string;
  title: string;
  date: string;
};

export type idList = {
  params: { blogId: string };
}[];

export const getSortedPostsData = (): blogList => {
  // /posts　配下のファイル名を取得する
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: blogList = fileNames.map((fileName) => {
    // id を取得するためにファイル名から ".md" を削除する
    const blogId = fileName.replace(/\.md$/, "");

    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // 投稿のメタデータ部分を解析するために gray-matter を使う
    const matterResult = matter(fileContents);
    const title: string = matterResult.data["title"];
    const date: string = matterResult.data["date"];
    // データを id と合わせる
    return {
      blogId,
      title,
      date,
    };
  });
  // 投稿を日付でソートする
  return allPostsData.sort((a, b) => {
    if (a.blogId < b.blogId) {
      return 1;
    } else {
      return -1;
    }
  });
};

/**
 * Next.js動的ルーティングのpathsに与える配列は、
 * ルールとして以下のような配列を構築する必要が有ります。
 *
 * [
 *   {
 *     params: {
 *       blogId: 'ssg-ssr'
 *     }
 *   },
 *   {
 *     params: {
 *       blogId: 'pre-rendering'
 *     }
 *   }
 * ]
 * @returns file名をidとした配列
 */
export const getAllPostIds = (): idList => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        blogId: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

/**
 * ブログのIdを一件受け取り、本文を返却します.
 *
 * @param blogId ブログId
 * @returns ブログ本文
 */
export const getPostData = async (blogId: string): Promise<blog> => {
  const fullPath = path.join(postsDirectory, `${blogId}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // 投稿のメタデータ部分を解析するために gray-matter を使う
  const matterResult = matter(fileContents);
  const date: string = matterResult.data["date"];
  const title: string = matterResult.data["title"];

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  // データを id と組み合わせる
  return {
    blogId,
    date,
    title,
  };
};
