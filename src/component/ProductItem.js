import React from "react";

export default function ProductItem(props) {
  const { product, onClick } = props;

  return (
    <div id={product.id}>
      <img
        src={product.img}
        alt={product.name}
        height="300px"
        width="300px"
      ></img>
      <h3>{product.name}</h3>
      <h3>$ {product.price}</h3>
      <button onClick={() => onClick(product)}>Add To Cart</button>
    </div>
  );
}
