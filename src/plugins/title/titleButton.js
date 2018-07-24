import React, { Component } from "react";
import { insertDataBlock } from "megadraft";

class BlockButton extends Component {
    onClick = (e) => {
        e.preventDefault();
        const data = {"type": "title"};
        this.props.onChange(insertDataBlock(this.props.editorState, data));
    }

    render() {
        const svgStyles = {
            width: "24px",
            height: "24px",
            viewBox: "0 0 24 24",
            color: "white"
        } 

        return (
            <button className={this.props.className} onClick={this.onClick}>
                <svg style={svgStyles} className="sidemenu__button__icon">
                    <path d="M5 5v3h5v11h3V8h5V5z" fillRule="evenodd" fill="white"/>
                </svg>
            </button>
        );
    }
}


export default BlockButton;