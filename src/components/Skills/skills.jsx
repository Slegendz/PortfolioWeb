import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../../assets/Img/skill1.png";
import skill2 from "../../assets/Img/skill2.png";
import skill3 from "../../assets/Img/skill3.png";
import skill4 from "../../assets/Img/skill4.png";
import skill5 from "../../assets/Img/skill5.png";
import skill6 from "../../assets/Img/skill6.png";
import skill7 from "../../assets/Img/skill7.png";
import colorSharp from "../../assets/Img/color-sharp.png";
import "./skills.scss";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const skills = [
    { img: skill1, name: "NodeJs" },
    { img: skill2, name: "Python" },
    { img: skill3, name: "React" },
    { img: skill4, name: "C++" },
    { img: skill5, name: "Mern Stack" },
    { img: skill6, name: "Communication Skill" },
    { img: skill7, name: "JavaScript" },
  ];

  return (
    <div className="skill" id="skills">
      <div className="skill-box">
        <div className="skill-box-text">
          <h2> Skills </h2>
          <p>
            I have proficient skill in programming languages like C, C++, Python
            and JavaScript. I like web technologies and i use MERN stack for web
            development. Apart from that i have good communication skills and
            leadership skills.
          </p>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          className="skill-slider"
          autoPlay={true}
          autoPlaySpeed={2500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {skills.map((skill, idx) => (
            <div className="item" key = {idx}>
              <img src={skill.img} alt={skill.name} />
              <h4> {skill.name} </h4>
            </div>
          ))}
        </Carousel>
      </div>
      <img className="background-image-left" src={colorSharp} alt="color" />
    </div>
  );
};

export default Skills;
