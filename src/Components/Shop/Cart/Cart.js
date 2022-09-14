import React from "react";
import "./Cart.css";

function Cart(props) {
  const Cart = props.total;
  const totalPrice = Cart.reduce((total, prd) => total + prd.price, 0);
  const Discount = (10 / 100) * totalPrice;
  const tax = (5 / 100) * totalPrice;
  const totalCost = totalPrice - Discount + tax;

  const toFix = (num) => {
    return num.toFixed(2);
  };
  return (
    <div className="cart">
      <h2>Your Order Summery</h2>
      <h3>Order Summery: {Cart.length}</h3>
      <h3>Total Price: {toFix(totalPrice)}</h3>
      <h3>Discount: {toFix(Discount)} (10%)</h3>
      <h3>Tax: {toFix(tax)} (5%)</h3>
      <h3>Total Cost: {toFix(totalCost)}</h3>
      <button>Review Order</button>
    </div>
  );
}

export default Cart;
