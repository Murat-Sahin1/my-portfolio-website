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
        type: "WEB APP",
        descriptionText:
          "This is a multi-user blog platform developed with the .NET framework. It features a distributed microservice architecture, utilizing Kubernetes, Docker, and RabbitMQ. The application includes a custom identity solution built with .NET, Entity Framework, and PostgreSQL. Each service adheres to clean architecture principles.",
        imgpath: "/images/Medium.png",
        date: "13th Dec 2017",
        link: "https://github.com/Murat-Sahin1/off-tone"
      },
      {
        name: "E Commerce",
        type: "WEB APP",
        descriptionText:
          "Developed an e-commerce application utilizing .NET 6 Web API and Angular 14, designed as a distributed microservice architecture with Docker. The system employs RabbitMQ as the message broker, and integrates Redis and Stripe for managing shopping carts, orders, and transactions. The application adheres to clean architecture principles to ensure maintainability.",
        imgpath: "/images/ecommerce.png",
        date: "13th Dec 2017",
        link: "https://github.com/Murat-Sahin1/hvl-shopping-api"
      },
      {
        name: "Social Media Site",
        type: "WEB APP",
        descriptionText:
          "This social site application is developed using the MERN stack (MongoDB, Express.js, React, Node.js). Redux is employed for state management. The backend is straightforward, with a primary focus on the frontend. Mongoose ORM is utilized to handle entity relationships.",
        imgpath: "/images/socialmedia.png",
        date: "13th Dec 2017",
        link: "https://github.com/Murat-Sahin1/MERN-Social-Site-App"
      },
      {
        name: "Know Your Slang",
        type: "MOBILE APP",
        descriptionText:
          "This mobile app, built with React Native, serves as an English dictionary featuring entries contributed by users of Urban Dictionary through its API. It provides a comprehensive collection of contemporary slang, phrases, and colloquial expressions with a user-friendly interface and real-time updates.",
        imgpath: "/images/dictionary.png",
        date: "13th Dec 2017",
        link: "https://github.com/Murat-Sahin1/Know-Your-Slang"
      },
      {
        name: "Tinker",
        type: "WEB APP",
        descriptionText:
          "I developed an AI model ordering and execution platform using .NET and React, with Redux for state management. Additionally, I implemented model evaluation and execution handlers in Python, making them accessible to customers directly through the platform.",
        imgpath: "/images/tinker.png",
        date: "13th Dec 2017",
        link: "https://github.com/Murat-Sahin1/tinker"
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

  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-380%"]);

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
                      link = {item.link}
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
