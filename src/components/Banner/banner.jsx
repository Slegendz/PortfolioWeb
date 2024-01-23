import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import headerImg from "../../assets/Img/header-img.svg";
import "animate.css";
import "./banner.scss";

const Banner = () => {
  const toRotate = ["Web Developer", "Leetcoder", "UI/UX developer"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="banner" id="home">
      <div className="align-items-center">
        <div className="banner-text">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animated__animated animate__fadeIn" : ""
                }
              >
                <span className="tagline"> Welcome to my Portfolio </span>
                <h1>
                  {`Hi I'm Slegendz `} <span className="wrap"> {text} </span>
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus blanditiis vitae aliquid libero. Dignissimos, magnam
                  minus.
                </p>
                <button onClick={() => console.log("connext")}>
                  Let's connect <ArrowRightCircle />
                </button>
              </div>
            )}
          </TrackVisibility>
        </div>

        <div className="banner-img">
          <TrackVisibility once>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animated__animated animate__bounceInRight" : ""
                }
              >
                <img
                  src={headerImg}
                  width="100%"
                  height="auto"
                  alt="Header Img"
                />
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    </div>
  );
};

export default Banner;
