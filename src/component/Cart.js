import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Cart(props) {
  const { cartItemTotal, cartItems, onAdd, onRemove } = props;

  var total = 0;
  cartItems.forEach((app) => {
    total += app.qty * app.price;
  });

  if (cartItemTotal === 0) {
    return (
      <div>
        <Header cartItemTotal={cartItemTotal} />
        <div className="cart-checkout">
          <div className="cart-header">
            <span>Cart Empty</span>
          </div>

          <button class="button-66">
            <Link to="/shop">Shop Now</Link>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header cartItemTotal={cartItemTotal} />
      <div className="cart-checkout">
        <div className="cart-header">
          <span>Your Shopping Cart</span>
        </div>

        <div className="cart-item">
          {cartItems.map((item) => (
            <div key={item.id}>
              <div
                id="checkout-color"
                style={{ backgroundColor: `${item.color}` }}
              ></div>
              <div>
                <span id="item-name">{item.name}</span>
                <div>
                  <button onClick={() => onRemove(item)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => onAdd(item)}>+</button>
                </div>
              </div>
              <div>
                <span>${item.price * item.qty}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="total">
          <span>Total: ${total}</span>
        </div>
      </div>
    </div>
  );
}
