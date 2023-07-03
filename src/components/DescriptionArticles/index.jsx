import "./DescriptionArticles.css";

import React from "react";

const DescriptionArticles = ({ title, children }) => {
  return (
    <div className="description-content">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default DescriptionArticles;
