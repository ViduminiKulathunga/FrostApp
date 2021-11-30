import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedProduct } from "../../redux/actions/dataActions";
import BucketProduct from "../BucketProduct/BucketProduct";
import LOADING from "../../images/loading.gif";
import "./ProductItem.scss";

const ProductItem = (props) => {
  const productSelected = useSelector((state) => state.data.viewProduct);
  const loading = useSelector((state) => state.UI.loading);
  //const productId = props.match.params.id;
  let { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedProduct(id));
  }, []);

  return (
    <div className="product-container">
      <BucketProduct item={productSelected} id={id} single={true} />
    </div>
  );
};

export default ProductItem;
