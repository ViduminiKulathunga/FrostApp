import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { puttItemsToCart } from "../../redux/actions/dataActions";
import Modal from "../Modal/Modal";
import Cart from "../Cart/Cart";
import Error from "../Error/Error";
import ItemController from "../ItemController/ItemController";
import "./AmountContainer.scss";

const AmountContainer = (props) => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hideAddCart, setHideAddCart] = useState(false);

  const dispatch = useDispatch();
  const cartItemsKeys = useSelector((state) => state.data.cartItemsKeys);

  useEffect(() => {
    cartItemsKeys.includes(props.id)
      ? setHideAddCart(true)
      : setHideAddCart(false);
  }, [count, cartItemsKeys, props.id]);

  const AddToCart = () => {
    if (count > 0) {
      const pushProduct = {};
      pushProduct.item = props.item;
      pushProduct.id = props.id;
      pushProduct.count = count;
      pushProduct.totalPrice = props.item.price * count;
      dispatch(puttItemsToCart(pushProduct));
    }
  };

  const CloseModal = () => {
    setIsModalOpen(false);
  };

  const OpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="add-container">
        {hideAddCart ? (
          <button className="button-viewcart" onClick={OpenModal}>
            VIEW CART
          </button>
        ) : (
          <>
            <ItemController
              stock={props.stock}
              count={(e) => setCount(e)}
              error={(e) => setError(e)}
              currentCount={0}
            />
            <button className="button" onClick={AddToCart}>
              ADD TO CART
            </button>
            {error ? (
              <Error> Only {props.stock} Stock Available!!</Error>
            ) : null}
          </>
        )}
      </div>
      <Modal isModalOpen={isModalOpen} closeModal={CloseModal}>
        <Cart />
        <button className="button-close" onClick={CloseModal}>
          Close
        </button>
      </Modal>
    </>
  );
};

export default AmountContainer;
