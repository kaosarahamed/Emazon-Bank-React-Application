import React from "react";
import Logo from "../../images/Logo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="container">
      <img src={Logo} alt="" />
      <nav className="menu">
        <a href="/header">Home</a>
        <a href="/cart">Cart</a>
        <a href="/review-order">Review Order</a>
        <a href="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </a>
      </nav>
    </div>
  );
}

export default Header;
