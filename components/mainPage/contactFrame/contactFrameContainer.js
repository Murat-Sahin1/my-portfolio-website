import styles from "./contactFrame.module.css";
import Image from "next/image";

export default function ContactFrameContainer() {
  return (
    <>
      <div id={"contactFrame"} class={styles.contactFrameContainer}>
        <div class={styles.contactContainer}>
          <div class={styles.upperBufferContainer}>
            <div class={styles.contactTextWrapper}>
              <p class={styles.contactText}>*contact</p>
            </div>
          </div>
          <div class={styles.contactContentContainer}>
            <div class={styles.contactContent}>
              <div class={styles.rowEntry}>
                <div class={styles.contactLineWrapper}>
                  <p class={styles.contactLineText}>─</p>
                </div>
                <div class={styles.contactLineWrapper}>
                  <Image src="/images/mail-icon.png" width={40} height={40} />
                </div>
                <div class={styles.contactLineWrapper}>
                  <a href="mailto:murat.sahin.dev@gmail.com" class={styles.socialText}>murat.sahin.dev@gmail.com</a>
                </div>
              </div>
              <div class={styles.rowEntry}>
                <div class={styles.contactLineWrapper}>
                  <p class={styles.contactLineText}>─</p>
                </div>
                <div class={styles.contactLineWrapper}>
                  <Image src="/images/phone-icon.png" width={40} height={40} />
                </div>
                <div class={styles.contactLineWrapper}>
                  <p class={styles.socialText}>+90 534 896 39 92</p>
                </div>
              </div>
              <div class={styles.rowEntry}>
                <div class={styles.contactLineWrapper}>
                  <p class={styles.contactLineText}>─</p>
                </div>
                <div class={styles.contactLineWrapper}>
                  <Image
                    src="/images/linkedin-icon.png"
                    width={40}
                    height={40}
                  />
                </div>
                <div class={styles.contactLineWrapper}>
                  <a href="https://www.linkedin.com/in/murat-sahin442" class={styles.socialText}>
                    linkedin.com/in/murat-sahin442
                  </a>
                </div>
              </div>
              <div class={styles.rowEntry}>
                <div class={styles.contactLineWrapper}>
                  <p class={styles.contactLineText}>─</p>
                </div>
                <div class={styles.contactLineWrapper}>
                  <Image src="/images/github-icon.png" width={40} height={40} />
                </div>
                <div class={styles.contactLineWrapper}>
                  <a href="https://www.github.com/Murat-Sahin1" class={styles.socialText}>github.com/Murat-Sahin1</a>
                </div>
              </div>
              <div class={styles.rowEntry}>
                <div class={styles.contactLineWrapper}>
                  <p class={styles.contactLineText}>─</p>
                </div>
                <div class={styles.contactLineWrapper}>
                  <Image src="/images/medium-icon.png" width={40} height={40} />
                </div>
                <div class={styles.contactLineWrapper}>
                  <a href="https://www.medium.com/@murat.sahin.dev" class={styles.socialText}>medium.com/@murat.sahin.dev</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class={styles.mailFormContainer}>
          <div class={styles.upperBufferContainer}></div>
          <div class={styles.mailContentContainer}>
            <div class={styles.mailForm}>
              <div class={styles.formHeaderContainer}>
                <p class={styles.formHeaderText}>SEND ME A MESSAGE</p>
              </div>
              <div class={styles.inputBoxContainer}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Name"
                />
              </div>

              <div class={styles.inputBoxContainer}>
              <input
                  type="text"
                  className={styles.input}
                  placeholder="Email"
                />
              </div>
              <div class={styles.inputBoxContainer}>
              <input
                  type="text"
                  className={styles.input}
                  placeholder="Subject"
                />
              </div>

              <div class={styles.messageBoxContainer}>

              <input
                  type="text"
                  className={styles.input}
                  placeholder="Your Message (THIS HAS TO BE A TEXT AREA)"
                  
                />

              </div>

              <a class={styles.buttonContainer}>
                <p class={styles.buttonText}>SEND</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*
                <div class={styles.inputBoxTextContainer}>
                  <p class={styles.inputBoxText}>Name</p>
                  
                </div>
*/