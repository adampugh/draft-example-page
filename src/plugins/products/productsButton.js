import React, { Component } from "react";
import { insertDataBlock } from "megadraft";

import ProductsModal from "./productsModal";


class ProductsButton extends Component {
    state={
        productsModalIsOpen: false,
        products: [
            {
                id: "erger",
                imgUrl: "https://gracefitguide.com/img/products/3-1.png",
                price: "£2.40",
                description: "This thing si good, This thing si good, This thing si good, This thing si good, This thing si good, This thing si good,",
                title: "2 Mega Bundle"
            },
        ]
    }

    onClick = (e) => {
        // e.preventDefault();

        this.openProductsModal();
        // this.setState({
        //     productsModalIsOpen: true
        // })

        // const data = {"type": "title"};
        // this.props.onChange(insertDataBlock(this.props.editorState, data));
    }

    closeProductsModal = () => {
        this.setState({
            productsModalIsOpen: false
        });
    }
  
    openProductsModal = () => {
        this.setState({
            productsModalIsOpen: true
        });
    }


    render() {
        const svgStyles = {
            width: "24px",
            height: "24px",
            viewBox: "0 0 24 24",
            color: "white"
        } 

        return (
            <div >
                <ProductsModal 
                    isOpen={this.state.productsModalIsOpen}
                    closeModal={this.closeProductsModal}
                />
                <button className={this.props.className} onClick={this.onClick}>
                    <svg style={svgStyles} className="sidemenu__button__icon">
                        <path d="M5 5v3h5v11h3V8h5V5z" fillRule="evenodd" fill="white"/>
                    </svg>
                </button>
            </div >
        );
    }
}

export default ProductsButton;