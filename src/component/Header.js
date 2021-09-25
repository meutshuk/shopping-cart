import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className='logo'>Colors</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <div>
        <Link to="/cart">cart</Link>
      </div>
    </header>
  );
}
