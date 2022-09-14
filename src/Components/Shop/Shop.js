import React, { useState } from "react";
import Data from "../../fakeData/products.json";
import Product from "./Product/Product";
import "./Shop.css";
import Cart from "./Cart/Cart";

function Shop() {
  const jsonData = Data.slice(0, 50);
  const [productData] = useState(jsonData);
  const [total, setTotal] = useState([]);
  console.log(total);

  const handaleClick = (product) => {
    const newCost = [...total, product];
    setTotal(newCost);
  };

  return (
    <div className="shop">
      <div className="shop-component">
        <div className="product">
          <ul>
            {productData.map((products) => (
              <Product handaleClick={handaleClick} product={products}></Product>
            ))}
          </ul>
        </div>
        <div className="cart">
          <Cart total={total}></Cart>
        </div>
      </div>
    </div>
  );
}

export default Shop;
