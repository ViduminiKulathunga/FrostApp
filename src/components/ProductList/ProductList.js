import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/dataActions";
import BucketProduct from "../BucketProduct/BucketProduct";
import "./ProductList.scss";

const ProductList = () => {
  const productsAvailable = useSelector(
    (state) => state.data.productsAvailable
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="product-container " id="products_container">
      {productsAvailable.map((item, index) => (
        <BucketProduct item={item} key={index} id={index} single={false} />
      ))}
    </div>
  );
};

export default ProductList;
