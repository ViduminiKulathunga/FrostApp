import React from "react";
import BANNER from "../../images/banner.png";
import "./SuccessBanner.scss";

const SuccessBanner = () => {
  return (
    <div className="s-banner-containers">
      <div className="s-banners">
        <div className="s-image-containers">
          <img src={BANNER} alt="banner" />
        </div>
        <div className="s-info-containers">
          <h2 className="s-banner-titles">SUCCESSFULLY SHIPPED</h2>
          <p className="s-banner-descriptions">
            HAPPY SHOPPING. THANK YOU.. STAY SAFE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessBanner;
