import React from "react";
import "./page.css";
const Card = () => {
  return (
    <div className="card">
      <img src="/images/cactus_img.jpg" className="image"></img>
      <div className="design-container">
        <span className="design">Design</span>
      </div>
      <div className="design-body">
        <span className="design-body-title">Embracing Minimalism</span>
        <span className="design-body-description">
          From minimalist sculptures to minimalist paintings, this blog will
          inspire you to appreciate the beauty that lies in simplicity.
        </span>
      </div>
      <div className="line"></div>
      <div className="design-body">
        <span className="design-bottom-bottom-tag">Annie Spratt</span>
      </div>
    </div>
  );
};

export default Card;
