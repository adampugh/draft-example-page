import React, { Component } from "react";

import Product from "./product";

import "../../styles/products/productGrid.css";

class ProductGrid extends Component {
    state = {
        products: [
            {
                imgUrl: "https://gracefitguide.com/img/products/3-1.png",
                price: "£2.40",
                description: "This thing si good, This thing si good, This thing si good, This thing si good, This thing si good, This thing si good,",
                title: "2 Mega Bundle"
            },
            {
                imgUrl: "https://gracefitguide.com/img/products/3-1.png",
                price: "£2.40",
                description: "This thing si good",
                title: "2 Mega Bundle"
            },
            {
                imgUrl: "https://gracefitguide.com/img/products/3-1.png",
                price: "£2.40",
                description: "This thing si good",
                title: "2 Mega Bundle"
            },
            {
                imgUrl: "https://gracefitguide.com/img/products/3-1.png",
                price: "£2.40",
                description: "This thing si good",
                title: "2 Mega Bundle"
            }
        ]
    }


    render() {
        return (
            <section className="productGrid__wrapper">
                <h1>Products</h1>
                <div className="productGrid container">
                    {this.state.products.map((product, i) => 
                        <Product 
                            key={i + product.title}
                            price={product.price}
                            imgUrl={product.imgUrl}
                            description={product.description}
                            title={product.title} 
                        />)}
                </div>
            </section>
        )
    }
}

export default ProductGrid;