import React from "react";
import {  Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>Logo</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <div>
        <Link to="/cart">Cart</Link>
      </div>
    </header>
  );
}
