import React from "react";
import Header from "./Header";

export default function Main(props) {
  const {Cart} = props
  console.log(props)
  console.log(Cart)
  return (
    <div>
      <Header />
      Main
    </div>
  );
}
