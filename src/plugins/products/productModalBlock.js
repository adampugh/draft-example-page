import React from "react";

const productModalBlock = (props) => (
    <div className="productModalBlock" onClick={() => props.addProduct(props.product)}>
        <p>{props.title}</p>
        <p>{props.price}</p>
    </div>
);

export default productModalBlock;