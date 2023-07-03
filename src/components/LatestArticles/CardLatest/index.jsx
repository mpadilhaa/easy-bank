import "./CardLatest.css";

import React from "react";

const CardLatest = ({ image, title, text, madeBy }) => {
  return (
    <div className="card-latest">
      <img src={image} alt="" />
      <div className="card-content">
        <small>{madeBy}</small>
        <h4>{title}</h4>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default CardLatest;
