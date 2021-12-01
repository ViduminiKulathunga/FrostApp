import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedProduct } from "../../redux/actions/dataActions";
import BucketProduct from "../BucketProduct/BucketProduct";
import "./ProductItem.scss";

const ProductItem = (props) => {
  const productSelected = useSelector((state) => state.data.viewProduct);
  let { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedProduct(parseInt(id)));
  }, []);

  return (
    <div className="product-container">
      <BucketProduct item={productSelected} id={parseInt(id)} single={true} />
    </div>
  );
};

export default ProductItem;
