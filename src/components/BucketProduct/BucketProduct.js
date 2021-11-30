import React from "react";
import { Link } from "react-router-dom";
import AmountContainer from "../AmountContainer/AmountContainer";
import { SampleImage } from "./SampleImage";
import "./BucketProduct.scss";

const BucketProduct = (props) => {
  return (
    <div className="bucket-wrapper">
      <Link to={`/product/${props.id}`} className="item-view">
        <div className="left">
          <img
            //src={props.item.imageUrl}
            src={SampleImage[props.id]}
            alt="prodcut"
            className="product-image"
          />
        </div>
        <div className="center">
          <h2 className="product-title">{props.item.name} </h2>

          {props.single ? (
            <p className="product-description">{props.item.description}</p>
          ) : (
            <>
              <p className="product-description">
                {props.item.description.slice(0, 100) + "..."}
              </p>
              <Link to={`/product/${props.id}`} className="button-view">
                VIEW
              </Link>
            </>
          )}
        </div>
      </Link>
      <div className="right">
        <p className="price">${props.item.price}</p>
        <div className="price-wrap">
          <AmountContainer stock={props.item.stock} id={props.id} />
        </div>
      </div>
    </div>
  );
};

export default BucketProduct;
