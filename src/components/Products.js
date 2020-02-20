import React, { useContext } from "react";
import productContext from "../contexts/products";

// Components
import Product from "./Product";

const Products = ({products, addItem}) => {
	// const products = useContext(productContext)
	// console.log(products)
  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
