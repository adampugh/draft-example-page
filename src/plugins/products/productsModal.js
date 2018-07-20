import React, { Component } from "react";
import Modal from "react-modal";
import FaClose from "react-icons/lib/fa/close";
import ProductModalBlock from "./productModalBlock";

const customStyles = {
    overlay: {
        zIndex: 2000,
        background: "rgba(0, 0, 0, 0.6)"
    }
}

class ProductModal extends Component {
    state = {
        // fetch this data via redux?
        products: [
            {
                id: "erger",
                src: "https://gracefitguide.com/img/products/3-1.png",
                price: "£2.40",
                description: "This thing si good, This thing si good, This thing si good, This thing si good, This thing si good, This thing si good,",
                title: "2 Mega Bundle"
            },
            {
                id: "ergddddr",
                src: "https://gracefitguide.com/img/products/blue-dumb.png",
                price: "£19.40",
                description: "This thing si good, This thing si good, This thing si good, This thing si good, This thing si good, This thing si good,",
                title: "Party Time"
            },
        ]
    }

    render() {
        return (
            <Modal 
                isOpen={this.props.isOpen}
                appElement={document.getElementById('root')}
                onRequestClose={this.props.closeModal}
                style={customStyles}
                closeTimeoutMS={200}
                className="modal"
            >
                <div className="modal--products">
                    <span onClick={this.props.closeModal}><FaClose /></span>
                    <h2>Please select a product</h2>
                    {this.state.products.map((product) => 
                        <ProductModalBlock 
                            key={product.id}
                            title={product.title} 
                            price={product.price}
                            product={product}
                            addProduct={this.props.addProduct}
                        />)}
                    <button className="btn-purple">ADD PRODUCT</button>
                </div>
            </Modal>
        )
    }
}

export default ProductModal;