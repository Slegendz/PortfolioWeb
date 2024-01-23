import React from 'react';
import logo from "../../assets/Img/logo.svg";
import navIcon1 from "../../assets/Img/nav-icon1.svg";
import navIcon2 from "../../assets/Img/nav-icon2.svg";
import navIcon3 from "../../assets/Img/nav-icon3.svg";
import { useState, useEffect } from "react";
import "./navbar.scss";

const navbar = () => {
  const [ activeLink, setActiveLink ] = useState("home");
  const [ scrolled, setScrolled ] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`nav ${scrolled ? "scrolled" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />

      <span className="navbar-toggler-icon"></span>

      <div className="nav-links">
        <div className="nav-routes">
          <a
            href="#home"
            className={`nav-anchors ${activeLink === "home" ? "active" : ""}`}
            onClick={() => setActiveLink("home")}
          >
            Home
          </a>

          <a
            href="#skills"
            className={`nav-anchors ${activeLink === "skills" ? "active" : ""}`}
            onClick={() => setActiveLink("skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={` nav-anchors ${
              activeLink === "projects" ? "active" : ""
            }`}
            onClick={() => setActiveLink("projects")}
          >
            Projects
          </a>
        </div>

        <div className="nav-icons">
          <a href="#">
            <img src={navIcon1} alt="Linkedin" />
          </a>
          <a href="#">
            <img src={navIcon2} alt="Facebook" />
          </a>
          <a href="#">
            <img src={navIcon3} alt="Instagram" />
          </a>
          <button className="nav-button" onClick={() => console.log("connect")}>
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default navbar;
