import projImg1 from "./../../assets/Img/project-img1.png";
import projImg2 from "./../../assets/Img/project-img2.png";
import projImg3 from "./../../assets/Img/project-img3.png";
import "./projects.scss";
import { useState } from "react";
import "animate.css";
import ProjectCard from "./../ProjectCard/projectCard";
import colorSharp from "../../assets/Img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

const projects = () => {
  const [currTab, setCurrTab] = useState("first");

  const projectArray = [
    {
      title: "AI Website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Music Player",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Website",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "AI Website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Music Player",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Website",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "AI Website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Music Player",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];

  return (
    <div className="project" id="projects">
      <div className="project-box">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
            className={isVisible ? "animated__animated animate__slideInUp": ""}
            >
              <div className="project-heading">
                <h2> Projects </h2>
                <p> Lorem Ipsum dhad dv epon cnaob </p>
              </div>
            </div>
          )}
        </TrackVisibility>

        <div className="project-content">
          <div className="project-tabs">
            <p
              onClick={() => setCurrTab("first")}
              className={`${currTab}` === "first" ? "active" : ""}
            >
              Tab One
            </p>
            <p
              onClick={() => setCurrTab("second")}
              className={`${currTab}` === "second" ? "active" : ""}
            >
              Tab Two
            </p>
            <p
              onClick={() => setCurrTab("third")}
              className={`${currTab}` === "third" ? "active" : ""}
            >
              Tab Three
            </p>
          </div>
          <div className="project-cards">
            {currTab == "first" && (
              <div className="project-cards-first">
                {projectArray.map((card, idx) => {
                  return <ProjectCard key={idx} {...card} />;
                })}
              </div>
            )}
            {currTab == "second" && (
              <p className="project-cards-second"> Lorem Ipsum </p>
            )}
            {currTab == "third" && (
              <p className="project-cards-third"> Lorem Ipsum </p>
            )}
          </div>
        </div>
      </div>
      <img src={colorSharp} className="background-image-right" />
      <img src={colorSharp} className="background-image-right secondImage" />
    </div>
  );
};

export default projects;
