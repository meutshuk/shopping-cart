import React from "react";
import Header from "./Header";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;

  return (
    <div>
      <Header />
      {cartItems.length === 0 && <div>Cart Empty</div>}

      {cartItems.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => onRemove(item)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => onAdd(item)}>+</button>
        </div>
      ))}
    </div>
  );
}
