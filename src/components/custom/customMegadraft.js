import React, { Component } from "react";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";

import "../../../node_modules/megadraft/dist/css/megadraft.css"
// import "../../styles/custom/customMegadraft.css";

import MyPlugin1 from "../../plugins/title/plugin";
import ImagePlugin from "../../../node_modules/megadraft/lib/plugins/image/plugin";
import MyPlugin2 from "../../plugins/products/plugin";

class CustomMegadraft extends Component {
    state = {
        editorState: editorStateFromRaw(null)
    }

    onChange = (editorState) => {
        this.setState({editorState});
    }

    render() {
        return (
            <section className="customMegadraft container" id="customMegadraft">
                <MegadraftEditor 
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    plugins={[ImagePlugin, MyPlugin1, MyPlugin2]}
                />
            </section>
        );
    }
}

export default CustomMegadraft;