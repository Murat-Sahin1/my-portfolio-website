import styles from "./portfolioFrameContainer.module.css";
import { useState, useEffect } from "react";
import ProjectCard from "@/components/common/projectCard";

export default function PortfolioFrameContainer() {
  const [isDragging, setIsDragging] = useState(false);
  const [clickedX, setClickedX] = useState(null);
  const [precentage, setPrecentage] = useState(0);
  const [prevPrecentage, setPrevPrecentage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleClick = (event) => {
    setIsDragging(true);
    const xPosition = event.clientX;
    setClickedX(xPosition);
    console.log(isDragging);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      console.log(isDragging);
      setPrevPrecentage(precentage);
    }
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const maxValue = windowWidth / 2;
      const totalDrag = event.clientX - clickedX;
      var precent = ((totalDrag / maxValue) * 100) + prevPrecentage;
      if (precent >= 0) {
        precent = 0;
      } else if (precent <= -126) {
        precent = -126;
      }
      setPrecentage(precent);
    }
    console.log(precentage);
  };

  return (
    <>
      <div
        id={"portfolioFrame"}
        class={styles.portfolioFrameContainer}
        onMouseDown={handleClick}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
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
          <div
            class={styles.projectStripe}
            style={{ transform: `translateX(${precentage}%)` }}
          >
            <div class={styles.project}>
              <ProjectCard precentage={precentage}/>
            </div>
            <div class={styles.project}>
              <ProjectCard precentage={precentage}/>
            </div>
            <div class={styles.project}>
              <ProjectCard precentage={precentage}/>
            </div>
            <div class={styles.project}>
              <ProjectCard precentage={precentage}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
