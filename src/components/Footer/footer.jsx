import MailChimpForm from "../Form/MailChimpForm";
import logo from "../../assets/Img/logo.png";
import navIcon1 from "../../assets/Img/nav-icon1.svg";
import navIcon2 from "../../assets/Img/nav-icon2.svg";
import navIcon3 from "../../assets/Img/nav-icon3.svg";
import "./footer.scss";
import React from 'react';

const footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer-upper">
        <MailChimpForm />
      </div> */}

      <div className="footer-lower">
        <div className="footer-img">
          <div className="footer-img-logo">
            <img src={logo} alt="LOGO" />
          </div>
        </div>

        <div className="footer-nav-icons">
          <div className="icons">
            <a href="https://www.linkedin.com/in/sachin-negi-458a44210/">
              <img src={navIcon1} alt="Linkedin" />
            </a>
            <a href="https://github.com/Slegendz">
              <img src={navIcon2} alt="Github" />
            </a>
            <a href="https://www.instagram.com/slegendz.ig/">
              <img src={navIcon3} alt="Instagram" />
            </a>
          </div>

          <p> Copyright 2023 </p>
        </div>
      </div>
    </div>
  );
};

export default footer;
