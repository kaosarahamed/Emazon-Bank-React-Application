import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Product(props) {
  const { name, img, price, category, stock, seller } = props.product;
  return (
    <div className="Product">
      <div className="items">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="content">
          <h2>{name}</h2>
          <h2>Price: ${price}</h2>
          <h3>category: {category}</h3>
          <h4>Stock: {stock}</h4>
          <h4>Seller: {seller}</h4>
          <button
            onClick={() => {
              props.handaleClick(props.product);
            }}
            className="button"
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
