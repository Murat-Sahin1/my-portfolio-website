import styles from "./aboutFrame.module.css";
import Image from "next/image";

export default function AboutFrameContainer() {
  return (
    <>
      <div id={"aboutFrame"} class={styles.aboutFrameContainer}>
        <div class={styles.aboutMeContainer}>
          <div class={styles.aboutMeContent}>
            <div class={styles.aboutMeHeaderContainer}>
              <p class={styles.aboutMeText}>*about me</p>
            </div>
            <div clasS={styles.writingContainer}>
              <div class={styles.headerSubTitleContainer}>
                <p clasS={styles.headerSubtitleText}>
                  I’m a Full Stack Developer and a Webdesigner from Istanbul,
                  Turkey.
                </p>
              </div>
              <div class={styles.descriptionContainer}>
                <p class={styles.descriptionText}>
                I have specialized in making web apps using .Net and Next.js frameworks, 
                I also do web design and regularly program new projects. Those include Machine
                Learning models, games, mobile apps, etc. I would love to work and contribute 
                to a software team that develops web apps.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class={styles.briefContainer}>
          <div class={styles.briefContent}>
            <div class={styles.upperPartContainer}>
              <div class={styles.profilePicContainer}>
                <Image src={"/images/profilepic.png"} width={82} height={82} />
              </div>
              <div class={styles.nameContainer}>
                <p class={styles.nameText}>murat şahin</p>
              </div>
              <div class={styles.jobTitleContainer}>
                <p class={styles.jobTitleText}>developer, Istanbul</p>
              </div>
              <div class={styles.briefLookContainer}>
                <p class={styles.briefLookText}>brief look...</p>
              </div>
            </div>
            <div class={styles.bottomPartContainer}>
              <div class={styles.lineContainer}>
                <div class={styles.smallLineContainer}>
                  <p>─</p>
                </div>
                <p class={styles.lineText}>
                  Creates web apps, using .Net and other technologies.
                </p>
              </div>
              <div class={styles.lineContainer}>
                <div class={styles.smallLineContainer}>
                  <p>─</p>
                </div>
                <p class={styles.lineText}>
                  Does webdesign for his projects and customers.
                </p>
              </div>
              <div class={styles.lineContainer}>
                <div class={styles.smallLineContainer}>
                  <p>─</p>
                </div>
                <p class={styles.lineText}>
                  Trains specialized machine learning models from time to time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
