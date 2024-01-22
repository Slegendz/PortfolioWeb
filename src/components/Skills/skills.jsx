import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../assets/Img/meter1.svg";
import meter2 from "../../assets/Img/meter2.svg";
import meter3 from "../../assets/Img/meter3.svg";
import colorSharp from "../../assets/Img/color-sharp.png";
import './skills.scss'

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
      items: 1,
    },
  };

  return (
    <div className="skill" id="skills">
      <div className = "skill-box">
        <div className = "skill-box-text">
          <h2> Skills </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sit
            laborum mollitia rerum delectus quos debitis officia ut sint aut
            sapiente blanditiis fuga, fugiat placeat iure.
          </p>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          className="skill-slider"
          autoPlay={true}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <div className="item">
            <img src={meter1} alt="Image" />
            <h5> Brand Identity </h5>
          </div>

          <div className="item">
            <img src={meter2} alt="Image" />
            <h5> Logo Design </h5>
          </div>

          <div className="item">
            <img src={meter3} alt="Image" />
            <h5> Web Development</h5>
          </div>
        </Carousel>
      </div>
      <img className="background-image-left" src={colorSharp} alt="color" />
    </div>
  );
};

export default Skills;
