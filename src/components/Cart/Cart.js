import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getcartItems } from "../../redux/actions/dataActions";
import CartItem from "../CartItem/CartItem";

import "./Cart.scss";

const Cart = () => {
  const cartItems = useSelector((state) => state.data.productsAvailable);
  const loading = useSelector((state) => state.UI.loading);

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getcartItems());
  //   }, []);

  return (
    <div className="cart-wrapper">
      <h2 className="cart-title">YOUR BAG</h2>
      <div className="cart-bottom">
        <div className="cart-info">
          {cartItems.map((item, index) => (
            <CartItem item={item} key={index} id={index} />
          ))}
        </div>
        <div className="summary">
          <h2 className="summary-title">ORDER SUMMARY</h2>
          <div className="summary-item">
            <span className="summary-item-text">Total</span>
            {/* <span className="summary-item-price">${cartItems.total}</span> */}
            <span className="summary-item-price">$100</span>
            <Link to={`/success/`} >
              <input type="submit" className="checkout-button" value="CHECKOUT NOW" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
