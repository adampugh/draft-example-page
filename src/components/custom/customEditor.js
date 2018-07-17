import React, { Component } from "react";
import { Editor, EditorState } from "draft-js";
import {colorStyleMap} from 'draft-js-color-picker-plugin'
import createToolbarPlugin from 'last-draft-js-toolbar-plugin';


import 'last-draft-js-toolbar-plugin/lib/plugin.css';


const toolbarPlugin = createToolbarPlugin();
const { Toolbar } = toolbarPlugin;

const plugins = [toolbarPlugin];

class CustomEditor extends Component {
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
                    plugins={plugins}    
                />
            </h1>
        )
    }
}

export default CustomEditor;