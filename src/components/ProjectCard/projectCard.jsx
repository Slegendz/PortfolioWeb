import "./projectCard.scss";

const projectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="projectCard">
      <div className="projectCard-img">
        <img src={imgUrl} alt="Img" />
      </div>
      <div className="projectCard-desc">
        <h4> {title} </h4>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default projectCard;
