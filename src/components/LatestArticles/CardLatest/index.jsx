import "./Card.css";

import React from "react";

const CardLatest = ({ image, title, text, madeBy }) => {
  return (
    <div className="card-latest">
      <img src={image} alt="" />
      <small>{madeBy}</small>
      <h4>{title}</h4>
      <span>{text}</span>
    </div>
  );
};

export default CardLatest;
