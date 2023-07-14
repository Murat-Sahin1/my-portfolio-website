import styles from "./navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        <div className={styles.box}>
          <Image
          className={styles.logoImage}
            src="/images/logo.gif"
            height={0}
            width={50}
            alt="Hourglass Logo"
          />
          <div style={{width:15}}>

          </div>
          <div className={styles.logoTextWrapper}>
            <p className={styles.logoText}>muratsahin.dev</p>
          </div>
        </div>
        <div className={styles.middleBox}>
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
        <div className={styles.box}></div>
      </div>
    </div>
  );
}
