import React, { useState } from "react";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./TopBar.scss";

const TopBar = () => {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  return (
    <div className="wrapper">
      <div className="logo">
        <Link to={`/`}>
          <h1>CatStore.</h1>
        </Link>
      </div>

      <div className="shopping">
        <Badge badgeContent={quantity} color="secondary">
          <a href="#modal">
            <ShoppingCartOutlined />
          </a>
        </Badge>
      </div>
    </div>
  );
};

export default TopBar;
