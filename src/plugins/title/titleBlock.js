import React, {Component} from "react";
import { Editor, EditorState } from "draft-js";

// import "../../../node_modules/megadraft/dist/css/megadraft.css"

export default class ImageBlock extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onChange = (editorState) => {
      this.setState({editorState});
  }

  render(){
    return (
      <div className="titleBlock">
        <h1 className="">
          <Editor 
            editorState={this.state.editorState} 
            onChange={this.onChange} 
            placeholder="Title"
          />
        </h1>
      </div>
    );
  }
}



/* <section className="heroBanner">
          <HeroBannerMainText />
          <HeroBannerTagline />
          <button className="btn-purple">SHOP NOW</button>
        </section> */
