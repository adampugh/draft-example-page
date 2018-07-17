import React from "react";

import ShoppingCart from "react-icons/lib/fa/shopping-cart";

// import "../styles/navbar.css";

const navbar = (props) => (
    <nav>
        <div className="navbar__content container">
            <span className="logo">{props.logo}</span>
            <span className="cart">CART <ShoppingCart /></span>
        </div>
    </nav>
);

export default navbar;