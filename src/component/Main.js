import React from "react";
import Header from "./Header";

export default function Main(props) {
  const {cartItemTotal} = props
  return (
    <div>
      <Header cartItemTotal={cartItemTotal} />
      <div>
        <p>
          Welcome. come and buy some colors
        </p>
      </div>
    </div>
  );
}
