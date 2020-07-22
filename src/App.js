import React from "react";

import "./styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Nav from "./Nav";
import SignUp from "./components/signup/SignUp";

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

const ErrorPage = () => {
  return <h1>Not Found</h1>;
};
