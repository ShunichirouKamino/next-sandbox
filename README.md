This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Tree Diagram

- `$ npx create-next-app`
  - enter your project name.

<pre>
D:.
├─.next
│  ├─cache
│  │  ├─eslint
│  │  ├─images
│  │  │  └─TDJRueuYcYoug4QVLZYIJ3F6lQJH6M1bBN6HhcDQ4xM=
│  │  └─webpack
│  │      ├─client-development
│  │      ├─client-production
│  │      ├─server-development
│  │      └─server-production
│  ├─server
│  │  ├─chunks
│  │  └─pages
│  │      └─api
│  └─static
│      ├─chunks
│      │  └─pages
│      ├─css
│      └─jhletS84WVIwI8aBuRf5v
├─node_modules
│  ├─...
│
├─pages
│  └─api
├─styles
├─next.config.js
├─.eslintrc.json
├─package.json
└─package-lock.json
</pre>

#### pages

Next.js は pages フォルダを参照し、アプリケーションのページをファイル名に基づいてルーティングします。
例えば、pages/hoge.js というファイルがあった場合、localhost:3000/hoge にルーティングされることになります。
プロジェクト作成初期は、`localhost:3000`にアクセスした際、index.js にルーティングされます。

#### public

画像などの静的ファイルを配置します。
public に配置したファイルに対しては、プロジェクトルートとみなされ、ルート参照が可能。

```html
<head>
  <title>Create Next App</title>
  <link rel="icon" href="/favicon.ico" />
</head>
```

#### styles

CSS 等のスタイルシートの配置。

## Tutorial

#### ページ遷移を理解する

- `pages`配下に、`sandbox`ディレクトリを作り`sandbox-pages.js`を配置する。
  - コンポーネント名称は任意、`default`のエクスポートが必須。
- この状態で、`localhost:3000/sandbox/sandbox-page`にアクセスすると、ページが表示される。

```js
export default function FirstPost() {
  return <h1>First Post</h1>;
}
```

#### Link コンポーネントによる遷移

- クライアントサイドでリンクを張り、ページ遷移を行う際は Link コンポーネントを利用します。

  - <Link>という<a>タグをラップしたリアクトコンポーネントです。

- index.js に追記

```js
/* 追記部分 */
import Link from "next/link";

...

<h1 className={styles.title}>
  Welcome to <a href="https://nextjs.org">Next.js!</a>
</h1>

/* 追記部分 */
<h1 className={styles.title}>
  <Link href="/sandbox/sandbox-page">
    <a>Move to Sandbox</a>
  </Link>
</h1>

...
```

#### Layout の反映

- `components`配下に`layout.module.css`を配置します。

```css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}
```

- `components`配下に`layout.js`を配置します。

```js
import styles from "./layout.module.css";

function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default Layout;
```

- sandbox-page.js の一番外の components に対して、Layout を反映する。

```js
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
```

#### グローバルな管理

- `_app.js`は、全てのページに共通するトップレベルコンポーネント
  - グローバルに管理したい store
  - 全ページに適用したい style
- root プロジェクトに配置した`styles`ディレクトリに`global.css`を配置し、以下のように`_app.js`にインポートすることで、全ページで適用したいスタイリングを定義することが可能。

```js
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

#### プリレンダリングとデータフェッチ

- [とても分かりやすいプリレンダリングとデータフェッチの説明](https://qiita.com/thesugar/items/01896c1faa8241e6b1bc#%E3%83%AC%E3%83%83%E3%82%B9%E3%83%B34-%E3%83%97%E3%83%AA%E3%83%AC%E3%83%B3%E3%83%80%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E3%83%95%E3%82%A7%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0)
  - そもそも、Next.js では全てのページをプリレンダリングします。
  - プリレンダリングとは、`$ yarn build`時に、ページごとに、HTML と、そのページを構築するための最小限の JavaScript との関連付けを行うことです。
  - 実際にページが読み込まれ、JavaScript コードが実行されるプロセスはハイドレーションと言います。
  - この際、ブラウザに外部データを取得して表示することをフェッチと言います。
  - [Next - Data Fetching Overview](https://nextjs.org/docs/basic-features/data-fetching)

##### `getStaticProps`を使った、データ有りの SSG

- `getStaticProps`は、本番環境用のビルド、`$ yarn build`時に実行されます。
- `$ yarn dev`時は、毎回のリクエストごとに実行されます。
- 関数の流れとしては、データを取得し、props としてページに渡します。
- もっと砕けて言うと、「このページにはいくつか外部データが有るので、ビルド時にこのページをプリレンダリングする際は、その依存関係を解決して欲しい」と Next に伝える関数です。
- getStaticProps の export は、pages からのみ行えます。page ではないファイルから export することはできません。

```js
export default function Home(props) { ... }

export async function getStaticProps() {
    // ファイルシステムやDB などから外部データを取得する
    const data = ...

    // `props` キーに対応する値が `Home` コンポーネントに渡される
    return {
        props: ...
    }
}
```

##### `getServerSideProps`を使った、データ有りの SSR

- リクエスト時に毎回データをプリレンダリングする必要が有る場合は、SSR にて実現ができます。
- なお、ユーザ毎に異なるダッシュボードのような画面を構築する際は、CSR が向いています。
  - その際は、データフェッチから Global State 管理まで含めて SWR を使うのがおススメ

```js
// リクエスト時に呼ばれるため、contextはその際のパラメータ
export async function getServerSideProps(context) {
  return {
    props: {
      // コンポーネントに渡すための props
    },
  };
}
```

#### 動的ルーティング

`プリレンダリングとデータフェッチ`は、ページの内容が外部データに依存する場合ですが、動的ルーティングはページのパスが外部データに依存する場合の実現方法です。

- Next.js では、`[`で始まり`]`で終わるファイルは動的なページとして認識されます。
