import React, { Component } from "react";
import { Editor, EditorState } from "draft-js";

class HeroBannerTagline extends Component {
    state = {
        editorState: EditorState.createEmpty()
    }

    onChange = (editorState) => this.setState({editorState});

    render() {
        return (
            <h2>
                <Editor 
                    editorState={this.state.editorState} 
                    onChange={this.onChange} 
                    placeholder="Tagline" />
            </h2>
        )
    }
}

export default HeroBannerTagline;