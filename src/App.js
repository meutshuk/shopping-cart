import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Main from "./component/Main";
import Shop from "./component/Shop";
import Cart from "./component/Cart";
import { useState } from "react";
import data from "./component/data";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const { product } = data;

  let cartItemTotal = 0;
  cartItems.forEach((item) => {
    cartItemTotal += item.qty;
  });

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  const onClick = (product) => {
    //check if item exist
    const exist = cartItems.find((item) => item.id === product.id);

    if (!exist) {
      // setCartItems((item) => [...item, { ...product, qty: 1 }]);
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main cartItemTotal={cartItemTotal} />
        </Route>
        <Route
          exact
          path="/shop"
          render={(props) => (
            <Shop
              {...props}
              product={product}
              onClick={onClick}
              cartItemTotal={cartItemTotal}
            />
          )}
        />

        <Route
          exact
          path="/cart"
          render={(props) => (
            <Cart
              {...props}
              cartItemTotal={cartItemTotal}
              cartItems={cartItems}
              onRemove={onRemove}
              onAdd={onClick}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
