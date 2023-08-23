import styles from "./projectCard.module.css";
import Image from "next/image";

export default function ProjectCard(props) {
  return (
    <>
      <div class={styles.cardContainer}>
        <div class={styles.imageContainer}>
          <img
            class={styles.image}
            src={props.imgpath}
            height={600}
            width={600}
            draggable={false}
            style={{ objectPosition: `${((props.precentage-(-126)) / (0-(-126))) * 100}% 100%` }}
          />
        </div>
        <div class={styles.textContainer}>
          <div class={styles.projectTagContainer}>
            <p class={styles.projectTagText}>WEBSITE</p>
          </div>
          <div class={styles.projectHeaderContainer}>
            <p class={styles.projectHeaderText}>Off-Tone</p>
          </div>
          <div class={styles.projectDescContainer}>
            <p class={styles.projectDescription}>
              Through art management and webdesign principles I help my clients
              around the world grow their business. Through art management and
              webdesign principles I help my clients around the world grow their
              business. Through art management and webdesign principles I help
              my clients around the world grow their business.{" "}
            </p>
          </div>
          <div class={styles.dateContainer}>
            <p class={styles.dateText}>13th Dec, 2016 </p>
          </div>
        </div>
      </div>
    </>
  );
}
