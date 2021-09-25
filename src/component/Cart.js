import React from "react";
import Header from "./Header";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;

  var total = 0;
  cartItems.forEach((app) => {
    total += app.qty * app.price;
  });

  return (
    <div>
      <Header />
      <div className="cart-checkout">
        {cartItems.length === 0 && <div>Cart Empty</div>}
        <div>
          {cartItems.length !== 0 && <div>Your Shopping Cart</div>}
          <div className="cart-item">
            {cartItems.map((item) => (
              <div key={item.id}>
                <div id='checkout-color' style={{ backgroundColor: `${item.color}` }}></div>
                <span>{item.name}</span>
                <div>
                  <button onClick={() => onRemove(item)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => onAdd(item)}>+</button>
                </div>
                <div>
                  <span>${item.price * item.qty}</span>
                </div>
              </div>
            ))}
          </div>
          <div>Total: {total}</div>
        </div>
      </div>
    </div>
  );
}
