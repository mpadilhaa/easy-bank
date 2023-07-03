import "./Card.css";

import React from "react";

const CardAdvantage = ({ image, title, text }) => {
  return (
    <div className="card-advantage">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default CardAdvantage;
