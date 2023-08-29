import styles from "./projectCard.module.css";
import Image from "next/image";

export default function ProjectCard(props) {
  return (
    <>
      <div class={styles.cardContainer}>
        <div class={styles.imageContainer}>
          <img
            id="scrolling-image"
            class={styles.image}
            src={props.imgpath}
            height={600}
            width={600}
            draggable={false}
            style={{ objectPosition: `${((props.precentage))}% 100%` }}
          />
        </div>
        <div class={styles.textContainer}>
          <div class={styles.projectTagContainer}>
            <p class={styles.projectTagText}>{props.type}</p>
          </div>
          <div class={styles.projectHeaderContainer}>
            <p class={styles.projectHeaderText}>{props.name}</p>
          </div>
          <div class={styles.projectDescContainer}>
            <p class={styles.projectDescription}>
              {props.descriptionText}
            </p>
          </div>
          <div class={styles.dateContainer}>
            <p class={styles.dateText}>{props.date}</p>
          </div>
        </div>
      </div>
    </>
  );
}
