import React, { useState, useEffect } from "react";
import { Add, Remove } from "@material-ui/icons";
import "./ItemController.scss";

const ItemController = (props) => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    setCount(props.currentCount);
  }, [props.currentCount]);

  const Increament = () => {
    if (count < props.stock) {
      setCount((prev) => prev + 1);
      props.count(count + 1);
    } else {
      setError(true);
      props.error(true);
    }
  };

  const Decreament = () => {
    if (count <= 0) {
      setCount(0);
      setError(false);
      props.count(0);
      props.error(false);
    } else {
      setCount((prev) => prev - 1);
      setError(false);
      props.count(count - 1);
      props.error(false);
    }
  };
  return (
    <div className="amount-container">
      <Remove onClick={Decreament} />
      <span className="amount">{count}</span>
      <Add onClick={Increament} />
    </div>
  );
};

export default ItemController;
