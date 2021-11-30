import React from "react";
import BANNER from "../../images/banner.png";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="image-container">
          <img src={BANNER} alt="banner" />
        </div>
        <div className="info-container">
          <h2 className="banner-title">AUTUMN COLLECTION</h2>
          <p className="banner-description">
            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
          </p>
          <a href="#products_container" className="banner-button">
            SHOW NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
