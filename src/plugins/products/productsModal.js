import React, { Component } from "react";
import Modal from "react-modal";
import FaClose from "react-icons/lib/fa/close";

const customStyles = {
    overlay: {
        zIndex: 2000,
        background: "rgba(0, 0, 0, 0.6)"
    }
}

class ProductModal extends Component {
    state = {}

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
                    <button className="btn-purple">ADD PRODUCT</button>
                </div>
            </Modal>
        )
    }
}

export default ProductModal;