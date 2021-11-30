import React from "react";
import { Add, Remove } from "@material-ui/icons";
import { SampleImage } from "../BucketProduct/SampleImage";
import "./CartItem.scss";

const CartItem = (props) => {
  return (
    <div className="sum-product">
      <div className="sum-product-detail">
        <img className="sum-image" alt="item" src={SampleImage[props.id]} />
        <div className="sum-detail">
          <span className="sum-productname">
            <b>Product:</b> {props.item.name}
          </span>
        </div>
      </div>
      <div className="add-container">
        <div className="amount-container">
          <Add />
          <span className="amount">{props.item.quantity}</span>
          <Remove />
        </div>
        <div className="product-price">
          {props.item.price * props.item.quantity}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
