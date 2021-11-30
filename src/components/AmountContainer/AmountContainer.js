import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Add, Remove } from "@material-ui/icons";
import "./AmountContainer.scss";

const AmountContainer = (props) => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const Increament = () => {
    if (count < props.stock) {
      setCount((prev) => prev + 1);
    } else {
      setError(true);
    }
  };

  const Decreament = () => {
    if (count <= 0) {
      setCount(0);
      setError(false);
    } else {
      setCount((prev) => prev - 1);
      setError(false);
    }
  };

  return (
    <div className="add-container">
      <div className="amount-container">
        <Remove onClick={Decreament} />
        <span className="amount">{count}</span>
        <Add onClick={Increament} />
      </div>
      <button className="button">ADD TO CART</button>
      {error ? (
        <div className="error-container">No Stock Available!!</div>
      ) : null}
    </div>
  );
};

export default AmountContainer;
