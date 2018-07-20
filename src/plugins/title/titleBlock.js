import React, {Component} from "react";
import { Editor, EditorState, createWithContent } from "draft-js";
import {MegadraftIcons, MegadraftPlugin} from "megadraft";

import HeroBannerMainText from "../../components/heroBanner/heroBannerMainText";
import HeroBannerTagline from "../../components/heroBanner/heroBannerTagline";

// const {BlockContent, BlockData, BlockInput, CommonBlock} = MegadraftPlugin;

import { MegadraftEditor, editorStateFromRaw } from "megadraft";

// import "../../../node_modules/megadraft/dist/css/megadraft.css"
const {BlockContent, BlockData, BlockInput, CommonBlock} = MegadraftPlugin;

export default class ImageBlock extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onChange = (editorState) => {
      this.setState({editorState});
  }

  render(){
    const blockActions = [
      {
        key: 'delete',
        icon: MegadraftIcons.DeleteIcon,
        action: this.props.container.remove,
      },
    ];

    return (
      // <CommonBlock actions={blockActions} {...this.props}>
      <div className="titleBlock">
        <h1 className="">
          <Editor 
            editorState={this.state.editorState} 
            onChange={this.onChange} 
            placeholder="Title"
          />
        </h1>
      </div>
      // </CommonBlock>
    );
  }
}



{/* <section className="heroBanner">
          <HeroBannerMainText />
          <HeroBannerTagline />
          <button className="btn-purple">SHOP NOW</button>
        </section> */}
