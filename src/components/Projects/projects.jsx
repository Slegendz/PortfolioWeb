import projImg1 from "./../../assets/Img/project2.png";
import projImg2 from "./../../assets/Img/project1.jpg";
import projImg3 from "./../../assets/Img/project3.png";
import projImg4 from "./../../assets/Img/project4.jpg";
import "./projects.scss";
import React, { useState } from "react";
import "animate.css";
import ProjectCard from "./../ProjectCard/projectCard";
import colorSharp from "../../assets/Img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

const projects = () => {
  const projectArray = [
    {
      title: "Social Media Application",
      description: "Created a website where user can interact and chat with each other and bots.",
      imgUrl: projImg2,
      url: "https://letztalkchat.netlify.app/",
    },
    {
      title: "Wedding Photography Website",
      description: "Created a wedding website for my client and helped their wedding photography studio get online.",
      imgUrl: projImg1,
      url : "https://mangaltithi.netlify.app/",
    },
    {
      title: "Movie Review Website",
      description: "Created a website which fetches movie details from API and users can post review of the movie.",
      imgUrl: projImg3,
      url: "https://moviewebdev.netlify.app/",
    },
    {
      title: "Chat Gpt Website",
      description: "Created website using react focusing on good user experience.",
      imgUrl: projImg4,
      url: "https://gpt-future.netlify.app/",
    }
  ];

  return (
    <div className="project" id="projects">
      <div className="project-box">
        <TrackVisibility once>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animated__animated animate__fadeIn" : ""}
            >
              <div className="project-heading">
                <h2> Projects </h2>
                <p> Using MERN Stack and Machine Learning </p>
              </div>
            </div>
          )}
        </TrackVisibility>

        <div className="project-content">
          <div className="project-cards">
            <div className="project-cards-first">
              {projectArray.map((card, idx) => {
                return <ProjectCard key={idx} {...card} />;
              })}
            </div>
          </div>
        </div>

      </div>
      <img src={colorSharp} className="background-image-right" />
      <img src={colorSharp} className="background-image-right secondImage" />
    </div>
  );
};

export default projects;
