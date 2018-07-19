import React, { Component } from "react";
import { Editor, EditorState } from "draft-js";
import {colorStyleMap} from 'draft-js-color-picker-plugin'

class HeroBannerMainText extends Component {
    state = {
        editorState: EditorState.createEmpty()
    }

    onChange = (editorState) => this.setState({editorState});

    render() {
        return (
            <h1>
                <Editor 
                    editorState={this.state.editorState} 
                    onChange={this.onChange}
                    customStyleMap={colorStyleMap}
                    placeholder="Default"    
                />
            </h1>
        )
    }
}

export default HeroBannerMainText;