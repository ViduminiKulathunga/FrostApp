import React, { Fragment } from "react";
import TopBar from "../../components/TopBar/TopBar";
import ProductItem from "../../components/ProductItem/ProductItem";
import Footer from "../../components/Footer/Footer";

const Product = () => {
  return (
    <Fragment>
      <div className="main-wrapper">
        <TopBar />
        <ProductItem />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Product;
