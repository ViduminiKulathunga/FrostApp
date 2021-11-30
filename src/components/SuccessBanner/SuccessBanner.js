import React from "react";
import BANNER from "../../images/banner.png";
import "./SuccessBanner.scss";

const SuccessBanner = () => {
  return (
    <div className="banner-containers">
      <div className="banners">
        <div className="image-containers">
          <img src={BANNER} alt="banner" />
        </div>
        <div className="info-containers">
          <h2 className="banner-titles">SUCCESSFULLY SHIPPED</h2>
          <p className="banner-descriptions">
            HAPPY SHOPPING. THANK YOU.. STAY SAFE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessBanner;
