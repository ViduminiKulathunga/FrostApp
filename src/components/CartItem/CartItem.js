import React, { useState, useEffect } from "react";
import { SampleImage } from "../BucketProduct/SampleImage";
import ItemController from "../ItemController/ItemController";
import Error from "../Error/Error";
import "./CartItem.scss";

const CartItem = (props) => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    setCount(props.item.count);
  }, [props.item.count]);

  useEffect(() => {
    props.totalPrice(props.item.id, props.item.item.price * count);
  }, [props, count]);

  return (
    <div className="sum-product">
      <div className="sum-product-detail">
        <img className="sum-image" alt="item" src={SampleImage[props.id]} />
        <div className="sum-detail">
          <span className="sum-productname">
            <b>Product:</b> {props.item.item.name}
            <br /> <br />
            <b>Unit:</b> ${props.item.item.price}
          </span>
        </div>
      </div>
      <div className="add-container">
        <ItemController
          stock={props.item.item.stock}
          count={(e) => setCount(e)}
          error={(e) => setError(e)}
          currentCount={count}
        />
        {error ? (
          <Error> Only {props.item.item.stock} Stock Available!!</Error>
        ) : null}
        <div className="product-price">
          <b>Price:</b> ${props.item.item.price * count}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
