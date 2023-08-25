import styles from "./navbar.module.css";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from 'react'; 

export default function Navbar() {
  function whichBrowser() {
    if (isFirefox()) {
    return "Firefox";
    } else if (isEdge()) {
    return "Edge";
    } else if (isIE()) {
    return "Internet Explorer";
    } else if (isOpera()) {
    return "Opera";
    } else if (isVivaldi()) {
    return "Vivalid";
    } else if (isChrome()) {
    return "Chrome";
    } else if (isSafari()) {
    return "Safari";
    } else {
    return "Unknown";
    }
    }
    
    function agentHas(keyword) {
    return window.navigator.userAgent.toLowerCase().search(keyword.toLowerCase()) > -1;
    }
    
    function isIE() {
    return !!document.documentMode;
    }
    
    function isSafari() {
    return (!!window.ApplePaySetupFeature || !!window.safari) && agentHas("Safari") && !agentHas("Chrome") && !agentHas("CriOS");
    }
    
    function isChrome() {
    return agentHas("CriOS") || agentHas("Chrome") || !!window.chrome;
    }
    
    function isFirefox() {
    return agentHas("Firefox") || agentHas("FxiOS") || agentHas("Focus");
    }
    
    function isEdge() {
    return agentHas("Edg");
    }
    
    function isOpera() {
    return agentHas("OPR");
    }
    
    function isVivaldi() {
    return agentHas("Vivaldi");
    }

  const [currentBrowser, setCurrentBrowser] = useState('');

  useEffect(() => {
    setCurrentBrowser(whichBrowser());
    console.log(currentBrowser);
  }, []);

  const scrollToPortfolioViewport = () => {
    const portfolioViewport = document.getElementById('portfolioFrame');
    if(portfolioViewport){
      window.scrollTo({
        top: portfolioViewport.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  const scrollToAboutViewport = () => {
    const aboutViewport = document.getElementById('aboutFrame');
    if(aboutViewport){
      window.scrollTo({
        top: aboutViewport.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  const scrollToContactViewport = () => {
    const contactViewport = document.getElementById('contactFrame');
    if(contactViewport){
      window.scrollTo({
        top: contactViewport.offsetTop,
        behavior: 'smooth',
      })
    }
  }
  
  return (
    <>
      <div
        className={`${styles.navbarContainer} ${styles.mobileNavbarContainer}`}
      >
        <div className={`${currentBrowser === "Chrome" ? styles.navbarChromeContent : styles.navbarContent } ${styles.mobileContent}`}>
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
          <div
            className={`${styles.hiddenMiddleComponent} ${styles.middleBox}`}
          >
            <div className={styles.middleTextWrapper}>
              <p className={styles.middleTextButton} onClick={scrollToPortfolioViewport}>portfolio</p>
            </div>
            <div className={styles.middleTextWrapper}>
              <p className={styles.middleTextButton} onClick={scrollToAboutViewport}>about</p>
            </div>
            <div className={styles.middleTextWrapper}>
              <p className={styles.middleTextButton} onClick={scrollToContactViewport}>contact</p>
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
    </>
  );
}
