import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Navbar from "../components/mainPage/navbar";
import indexStyles from "../styles/index.module.css";

export default function Home() {
  return (
    <Layout>
      <div class={indexStyles.background}>
        <div class={indexStyles.gridContainer}>
          <div class={indexStyles.column}></div>
          <div class={indexStyles.column}></div>
          <div class={indexStyles.column}></div>
          <div class={indexStyles.column}></div>
          <div class={indexStyles.column}></div>
          <div class={indexStyles.column}></div>
          <div class={indexStyles.column}></div>
          <div class={indexStyles.column}></div>
          <div class={indexStyles.column}></div>
          <div class={indexStyles.column}></div>
          <div class={indexStyles.column}></div>
          <div class={indexStyles.column}></div>
        </div>
      </div>

      <div class={indexStyles.content}>
        <Navbar />
      </div>
    </Layout>
  );
}

/* 
<Layout>
      <Head>
        <title>{siteTitle}</title>
        <link 
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap"
            rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div class="grid-container">
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
      </div>
    </Layout>
*/
