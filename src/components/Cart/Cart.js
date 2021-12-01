import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { checkoutCart } from "../../redux/actions/dataActions";

import "./Cart.scss";

const Cart = () => {
  const [totalPriceShow, SetTotalPriceShow] = useState(0);
  const cartItems = useSelector((state) => state.data.cartItems);

  const dispatch = useDispatch();

  const totalPrice = {};

  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);

  const CalculatePrice = (id, e) => {
    totalPrice[id] = e;
    SetTotalPriceShow(sumValues(totalPrice));
  };

  const OnCheckOut = () => {
    dispatch(checkoutCart());
  };

  return (
    <div className="cart-wrapper">
      <h2 className="cart-title">YOUR BAG</h2>
      <div className="cart-bottom">
        <div className="cart-info">
          {cartItems.map((item, index) => (
            <CartItem
              item={item}
              key={index}
              id={index}
              totalPrice={(id, e) => CalculatePrice(id, e)}
            />
          ))}
        </div>
        <div className="summary">
          <h2 className="summary-title">ORDER SUMMARY</h2>
          <div className="summary-item">
            <span className="summary-item-text">Total</span>
            {/* <span className="summary-item-price">${cartItems.total}</span> */}
            <span className="summary-item-price">${totalPriceShow}</span>
            <Link to={`/success/`} onClick={OnCheckOut}>
              <input
                type="submit"
                className="checkout-button"
                value="CHECKOUT NOW"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
