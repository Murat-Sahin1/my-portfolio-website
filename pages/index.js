import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Navbar from "../components/mainPage/navbar";
import indexStyles from "../styles/index.module.css";
import MainFrameContainer from "@/components/mainPage/mainFrame/mainFrameContainer";
import PortfolioFrameContainer from "@/components/mainPage/portfolioFrame/portfolioFrameContainer";
import AboutFrameContainer from "@/components/mainPage/aboutFrame/aboutFrameContainer";


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
        <MainFrameContainer />
      </div>

      <div class={indexStyles.secondaryFrameContent}>
        <PortfolioFrameContainer />
      </div>

      <div class={indexStyles.thirdFrameContent}>
        <AboutFrameContainer />
      </div>

      <div class={indexStyles.fourthFrameContent}>
        
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
