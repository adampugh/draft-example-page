import React, { Component } from "react";
import { MegadraftIcons, MegadraftPlugin } from "megadraft";
import { Draggable } from 'react-beautiful-dnd';


// import "../../../node_modules/megadraft/dist/css/megadraft.css"
const { CommonBlock } = MegadraftPlugin;

export default class ProductsBlock extends Component {

  render(){
    const blockActions = [
      {
        key: 'delete',
        icon: MegadraftIcons.DeleteIcon,
        action: this.props.container.remove,
      },
    ];

    return (
      
      
      <Draggable draggableId={String(Math.random())} index={0}>
        {(provided, snapshot) => (
          <div
          ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <CommonBlock 
              actions={blockActions} 
              {...this.props}
            >
              <div className="product">  
                <img src={this.props.data.src} alt={this.props.data.title}/>
                <h1>{this.props.data.title}</h1>
                <p>{this.props.data.description}</p>
                <p>{this.props.data.price}</p>
                <a href="">
                  <button className="btn-purple">ADD TO CART</button>
                </a>
              </div>
            </CommonBlock>
          </div>
        )}
        
      </Draggable>
    );
  }
}