import styles from "../styles/layout.module.css";
import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import TwitterLink from "../icons/TwitterLink";
import SetupLink from "../icons/SetupLink";
import AddressLink from "../icons/AddressLink";

const name: string = "Shunichiro";
export const siteTitle: string = "Ma-jan totalization";

const Layout = ({ children, home }): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        {home ? (
          <>
            <section className="text-right">
              <Link href={"/api/hello"}>
                <a className="no-underline hover:underline text-lg border-2 border-black p-2">
                  edit profile
                </a>
              </Link>
            </section>
            <div className="flex justify-center">
              <img
                src="/images/profile.png"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
            </div>
            <div className="flex justify-center">
              <h1 className="font-bold">{name}</h1>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-2 pt-2 pb-2">
                <div className="">
                  <TwitterLink link="https://twitter.com/syun_blue" />
                </div>
                <div>
                  <AddressLink link="/" />
                </div>
                <div>
                  <SetupLink link="/" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
