import React, { Fragment } from "react";
import TopBar from "../../components/TopBar/TopBar";
import SuccessBanner from "../../components/SuccessBanner/SuccessBanner";
import Footer from "../../components/Footer/Footer";

const Success = () => {
  return (
    <Fragment>
      <div className="main-wrapper">
        <TopBar />
        <SuccessBanner />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Success;
