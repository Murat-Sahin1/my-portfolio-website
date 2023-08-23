import styles from "./portfolioFrameContainer.module.css";

export default function PortfolioFrameContainer() {
  return (
    <>
      <div id={"portfolioFrame"} class={styles.portfolioFrameContainer}>
        <div class={styles.headerContainer}>
          <div class={styles.portfolioTextContainer}>
            <p class={styles.portfolioText}>portfolio</p>
          </div>
          <div class={styles.descriptionTextContainer}>
            <p class={styles.descriptionText}>
              Through art management and webdesign principles I help my clients
              around the world grow their business.
            </p>
          </div>
        </div>
        <div class={styles.projectsContainer}>
          <div class={styles.projectStripe}>
            
          </div>
        </div>
      </div>
    </>
  );
}
