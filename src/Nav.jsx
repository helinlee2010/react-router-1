import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>

        <Link to="/signup">
          <Button variant="contained" color="primary" disableElevation>
            Sign Up
          </Button>
        </Link>
      </ul>
    </nav>
  );
}
