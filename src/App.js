import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
//Pages 
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Success from "./pages/Success/Success";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/success" element={<Success />} />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
