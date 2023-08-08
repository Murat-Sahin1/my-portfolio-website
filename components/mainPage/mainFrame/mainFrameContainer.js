import styles from "./mainFrameContainer.module.css";
import Head from "next/head";

export default function MainFrameContainer() {
  return (
    <>
      <div
        className={`${styles.midMainFrameContainer} ${styles.mainFrameContainer}`}
      >
        <div className={styles.mainFrameTextContainer}>
          <div className={styles.welcomeContainer}>
            <p
              className={`${styles.welcomeText} ${styles.line1} ${styles.typewriter}`}
            >
              Welcome...
            </p>
          </div>
          <div className={styles.nameContainer}>
            <p className={styles.nameText}>murat</p>
            <p className={styles.surNameText}>ŞAHİN</p>
          </div>
          <div className={styles.jobTitleContainer}>
            <p className={styles.jobTitleText}>Full Stack Developer</p>
          </div>
          <div className={styles.descriptionContainer}>
            <p className={styles.descriptionText}>
              Fourth-grade Computer Engineering student with experience in
              creating full-stack web applications with .Net, C#, and React &
              Angular; Looking for a junior web developer or trainee position
              where I could learn from my environment and contribute to it.
            </p>
          </div>
        </div>
        <div className={styles.mainFrameButtonsContainer}>
          <div className={styles.cardContainer}>
            <div className={`${styles.mainFrameButton} ${styles.topLeft}`}>
              <div className={`${styles.frontCard}`}>
                <p className={`${styles.buttonText}`}>Stack</p>
              </div>
              <div className={`${styles.backCard}`}>
                <p>testttt</p>
              </div>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={`${styles.mainFrameButton} ${styles.topRight}`}>
              <div className={`${styles.frontCard}`}>
                <p className={`${styles.buttonText}`}>Linkedin</p>
              </div>
              <div className={`${styles.backCard}`}>
                <p>testttt</p>
              </div>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={`${styles.mainFrameButton} ${styles.bottomLeft}`}>
              <div className={`${styles.frontCard}`}>
                <p className={`${styles.buttonText}`}>GitHub</p>
              </div>
              <div className={`${styles.backCard}`}>
                <p>testttt</p>
              </div>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={`${styles.mainFrameButton} ${styles.bottomRight}`}>
              <div className={`${styles.frontCard}`}>
                <p className={`${styles.buttonText}`}>Blog</p>
              </div>
              <div className={`${styles.backCard}`}>
                <p>testttt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* 
<div className={styles.jobTitleContainer}>
          <p className={styles.jobTitleText}>Full Stack Developer</p>
        </div>
*/
