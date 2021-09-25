import React from "react";

export default function ProductItem(props) {
  const { product, onClick } = props;

  return (
    <div className="product-tab" id={product.id}>
      <div>
        <div
          className="color"
          style={{ backgroundColor: `${product.color}` }}
        ></div>
      </div>
      <h3>{product.name}</h3>
      <h3>$ {product.price}</h3>
      {/* <button onClick={() => onClick(product)}>Add To Cart</button> */}

      <button class="button-5" onClick={() => onClick(product)}>
        Add To Cart
      </button>
    </div>
  );
}


