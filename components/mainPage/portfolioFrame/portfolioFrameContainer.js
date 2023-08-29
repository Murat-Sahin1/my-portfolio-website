import styles from "./portfolioFrameContainer.module.css";
import { useState, useEffect } from "react";
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import ProjectCard from "@/components/common/projectCard";

export default function PortfolioFrameContainer() {
  function getCards() {
    const cards = [
      {
        name: "Off-Tone",
        type: "WEBSITE",
        descriptionText:
          "Through art management and webdesign principles I help my clients around the world grow their business. Through art management and webdesign principles I help my clients around the world grow their business. Through art management and webdesign principles I help my clients around the world grow their business.",
        imgpath: "/images/desert.jpg",
        date: "13th Dec 2017",
      },
      {
        name: "Off-Tone",
        type: "WEBSITE",
        descriptionText:
          "Through art management and webdesign principles I help my clients around the world grow their business. Through art management and webdesign principles I help my clients around the world grow their business. Through art management and webdesign principles I help my clients around the world grow their business.",
        imgpath: "/images/desert.jpg",
        date: "13th Dec 2017",
      },
      {
        name: "Off-Tone",
        type: "WEBSITE",
        descriptionText:
          "Through art management and webdesign principles I help my clients around the world grow their business. Through art management and webdesign principles I help my clients around the world grow their business. Through art management and webdesign principles I help my clients around the world grow their business.",
        imgpath: "/images/desert.jpg",
        date: "13th Dec 2017",
      },
      {
        name: "Off-Tone",
        type: "WEBSITE",
        descriptionText:
          "Through art management and webdesign principles I help my clients around the world grow their business. Through art management and webdesign principles I help my clients around the world grow their business. Through art management and webdesign principles I help my clients around the world grow their business.",
        imgpath: "/images/desert.jpg",
        date: "13th Dec 2017",
      },
    ];

    return cards;
  }

  const [cards, setCards] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const fetchedCards = getCards();
    setCards(fetchedCards);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollProgress = window.scrollY / (document.body.clientHeight - window.innerHeight);
      setScrollProgress(newScrollProgress);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const horizontalPosition = scrollProgress * 100;

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-280%"]);

  return (
    <>
      <div ref={targetRef} id={"portfolioFrame"} class={styles.stickyContainer}>
        <div  class={styles.portfolioFrameContainer}>
          <div class={styles.headerContainer}>
            <div class={styles.portfolioTextContainer}>
              <p class={styles.portfolioText}>portfolio</p>
            </div>
            <div class={styles.descriptionTextContainer}>
              <p class={styles.descriptionText}>
                Through art management and webdesign principles I help my
                clients around the world grow their business.
              </p>
            </div>
          </div>
          <div class={styles.projectsContainer}>
            <div class={styles.projectStripe}>
              {cards.map((item, index) => {
                return (
                  <motion.div style={{x}} key={index} class={styles.project}>
                    <ProjectCard
                      name={item.name}
                      descriptionText={item.descriptionText}
                      type={item.type}
                      date={item.date}
                      imgpath={item.imgpath}
                      precentage = {horizontalPosition}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* 

var precent = ((totalDrag / maxValue) * 100) + prevPrecentage;

<div class={styles.project}>
              <ProjectCard
                precentage={precentage}
                imgpath={"/images/desert.jpg"}
              />
            </div>
            <div class={styles.project}>
              <ProjectCard
                precentage={precentage}
                imgpath={"/images/desert.jpg"}
              />
            </div>
            <div class={styles.project}>
              <ProjectCard
                precentage={precentage}
                imgpath={"/images/desert.jpg"}
              />
            </div>
            <div class={styles.project}>
              <ProjectCard
                precentage={precentage}
                imgpath={"/images/desert.jpg"}
              />
            </div>
*/
