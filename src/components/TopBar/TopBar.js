import React, { useState } from "react";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import Cart from "../Cart/Cart";
import "./TopBar.scss";

const TopBar = () => {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInnerModalOpen, setIsInnerModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <div className="wrapper">
        <div className="logo">
          <Link to={`/`}>
            <h1>CatStore.</h1>
          </Link>
        </div>

        <div className="shopping">
          <Badge badgeContent={quantity} color="secondary" onClick={openModal}>
            <ShoppingCartOutlined />
          </Badge>
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <Cart />
        <button className="button-close" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </>
  );
};

export default TopBar;
