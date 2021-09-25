import React from "react";
import Header from "./Header";
import ProductItem from "./ProductItem";

export default function Shop(props) {
  const { product, onClick, cartItemTotal } = props;

  return (
    <div>
      <Header cartItemTotal={cartItemTotal} />
      <div className="item-container">
        {product.map((product) => (
          <ProductItem key={product.id} product={product} onClick={onClick} />
        ))}
      </div>
    </div>
  );
}
