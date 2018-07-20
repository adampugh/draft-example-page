import React, {Component} from "react";
import { Editor, EditorState, createWithContent } from "draft-js";
import {MegadraftIcons, MegadraftPlugin} from "megadraft";



// import "../../../node_modules/megadraft/dist/css/megadraft.css"
const {BlockContent, BlockData, BlockInput, CommonBlock} = MegadraftPlugin;

export default class ProductsBlock extends Component {
  // state = {
  //   editorState: EditorState.createEmpty(),
  // }

  // onChange = (editorState) => {
  //     this.setState({editorState});
  // }

  


  render(){
    const blockActions = [
      {
        key: 'delete',
        icon: MegadraftIcons.DeleteIcon,
        action: this.props.container.remove,
      },
    ];

    return (
      <CommonBlock actions={blockActions} {...this.props}>
        <div className="product">  
          <img src={this.props.data.src} />
          <h1>{this.props.data.title}</h1>
          <p>{this.props.data.description}</p>
          <p>{this.props.data.price}</p>
          <a href="#">
            <button className="btn-purple">ADD TO CART</button>
          </a>
        </div>
      </CommonBlock>
    );
  }
}