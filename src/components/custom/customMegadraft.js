import React, { Component } from "react";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";

import "../../../node_modules/megadraft/dist/css/megadraft.css"
import "../../styles/custom/customMegadraft.css";

class CustomMegadraft extends Component {
    state = {
        editorState: editorStateFromRaw(null)
    }

    onChange = (editorState) => {
        this.setState({editorState});
    }

    render() {
        return (
            <section className="customMegadraft container">
                <MegadraftEditor 
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                />
            </section>
        );
    }
}

export default CustomMegadraft;