import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { cartItemTotal } = props;

  return (
    <header>
      <div className="logo">Colors</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <div>
        <Link to="/cart">Cart({cartItemTotal})</Link>
      </div>
    </header>
  );
}
