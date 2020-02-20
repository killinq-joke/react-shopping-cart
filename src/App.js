import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import productContext from "./contexts/products";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);
 

  const addItem = item => {
	// add the given item to the cart
	setCart(cart.concat(item))
  };

  return (
    <productContext.Provider value={data}>
      <div className="App">
        <Navigation cart={cart} />

        {/* Routes */}
        <Route
          exact
          path="/"
          render={() => <Products products={products} addItem={addItem} />}
        />

        <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
      </div>
    </productContext.Provider>
  );
}

export default App;
