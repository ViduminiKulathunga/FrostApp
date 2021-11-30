import React, { Fragment } from "react";
import TopBar from "../../components/TopBar/TopBar";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <div className="main-wrapper">
        <TopBar />
        <Products />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
