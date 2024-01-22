import logo from "../assets/Img/logo.svg";
import navIcon1 from "../assets/Img/nav-icon1.svg";
import navIcon2 from "../assets/Img/nav-icon2.svg";
import navIcon3 from "../assets/Img/nav-icon3.svg";
import { useState, useEffect } from "react";

function navbar() {
  const { activeLink, setActiveLink } = useState("home");
  const { scrolled, setScrolled } = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`${
        scrolled ? "scrolled" : ""
      } fixed z-50 top-0 w-full transition duration-[32ms] ease-in-out py-4 px-5 flex justify-between`}
    >
      <img src={logo} alt="Logo" className="w-[9%] " />

      <div className="flex items-center">
        <div>
          {[
            ["Home", "#home"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
          ].map(([title, url]) => (
            <a
              href={url}
              className={`${
                activeLink === title ? "active" : "navbar-link"
              } hover:opacity-100 active:opacity-100`}
              onClick={() => setActiveLink(title)}
            >
              {title}
            </a>
          ))}
        </div>

        <div className="flex items-center mx-2">
          <div>
            {[
              [navIcon1, "Linkedin"],
              [navIcon2, "Facebook"],
              [navIcon3, "Instagram"],
            ].map(([source, name]) => (
              <a
                href="#"
                className="w-[42px] h-[42px] border border-white/50  bg-white/[0.1] inline-flex items-center justify-center rounded-full mr-1.5 relative 
                before:content-[''] before:w-[42px] before:h-[42px] before:absolute before:bg-teal-600
                before:transform before:rounded-full before:scale-0 before:transition before:duration-[30ms] before:ease-in-out before:hover:scale-100"
              >
                <img
                  src={source}
                  alt={name}
                />
              </a>
            ))}
          </div>
        </div>

        <button
          className="border border-2px p-2"
          onClick={() => console.log("connect")}
        >
          Let's Connect
        </button>
      </div>
    </div>
  );
}

export default navbar;
