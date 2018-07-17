import React from "react";

// import "../../styles/products/product.css";

const product = (props) => (
    <div className="product">
        <img src={props.imgUrl} alt={props.title}/>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <button className="btn-purple">ADD TO CART</button>
    </div>
);

export default product;