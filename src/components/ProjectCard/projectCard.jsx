import "./projectCard.scss";
import React from 'react';

const projectCard = ({ title, description, imgUrl, url }) => {
  return (
    <div className="projectCard">
      <div className="projectCard-img" onClick = {() => window.location.href = url}>
        <img src={imgUrl} alt="Img" />
      </div>
      <div className="projectCard-desc">
        <h4 onClick = {() => window.location.href = url}> {title} </h4>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default projectCard;
