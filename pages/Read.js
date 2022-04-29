/* 
 this is read page routes
*/

import Head from "next/head";
import styles from "../styles/Read.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Comments from "../Components/Comments";
export default function Read({ query }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Read page</title>
      </Head>

      <div className={styles.grid}>
        <Link href="/Blog">
          <a>
            {" "}
            <h2> Back to Blog </h2>{" "}
          </a>
        </Link>
        <h1 className={styles.title}>
          {" "}
          Read Blog {router.query.id ? router.query.id : " Sorry find error"}
        </h1>
        <p className={styles.paragraf}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Comments />
    </>
  );
}
