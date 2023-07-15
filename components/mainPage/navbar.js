import styles from "./navbar.module.css";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  return (
    <div
      className={`${styles.navbarContainer} ${styles.mobileNavbarContainer}`}
    >
      <div className={`${styles.navbarContent} ${styles.mobileContent}`}>
        <div className={`${styles.logoBox} ${styles.mobileLogoBox}`}>
          <Image
            className={`${styles.logoImage} ${styles.mobileLogoImage}`}
            src="/images/logo.gif"
            height={0}
            width={50}
            alt="Hourglass Logo"
          />
          <div style={{ width: 15 }}></div>
          <div className={styles.logoTextWrapper}>
            <p className={`${styles.logoText} ${styles.mobileLogoText}`}>
              muratsahin.dev
            </p>
          </div>
        </div>
        <div className={`${styles.hiddenMiddleComponent} ${styles.middleBox}`}>
          <div className={styles.middleTextWrapper}>
            <p className={styles.middleTextButton}>portfolio</p>
          </div>
          <div className={styles.middleTextWrapper}>
            <p className={styles.middleTextButton}>about</p>
          </div>
          <div className={styles.middleTextWrapper}>
            <p className={styles.middleTextButton}>contact</p>
          </div>
        </div>
        <div className={`${styles.hiddenComponent} ${styles.box}`}></div>
        <div
          className={`${styles.slideScreenButtonBox} ${styles.appearSlideButton}`}
        >
          <div className={`${styles.menuIconWrapper}`}>
            <AiOutlineMenu
              className={`${styles.menuIcon} ${styles.mobileMenuIcon}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
