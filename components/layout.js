import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className={styles.fullContainer}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </div>
  );
}
