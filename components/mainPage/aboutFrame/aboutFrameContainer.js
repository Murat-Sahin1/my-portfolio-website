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
                  Through art management and webdesign principles I help my
                  clients around the world grow their business. Through art
                  management and webdesign principles I help my clients around
                  the world grow their business. Through art management and
                  webdesign principles I help my clients around the world grow
                  their business.{" "}
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
                  Through art management and webdesign principles I help my
                  clients.
                </p>
              </div>
              <div class={styles.lineContainer}>
                <div class={styles.smallLineContainer}>
                  <p>─</p>
                </div>
                <p class={styles.lineText}>
                  Through art management and webdesign principles I help my.
                </p>
              </div>
              <div class={styles.lineContainer}>
                <div class={styles.smallLineContainer}>
                  <p>─</p>
                </div>
                <p class={styles.lineText}>
                  Through art management and web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
