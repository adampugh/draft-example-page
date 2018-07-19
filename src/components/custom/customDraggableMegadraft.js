import React, { Component } from "react";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import "../../../node_modules/megadraft/dist/css/megadraft.css"
// import "../../styles/custom/customMegadraft.css";


const getItemStyle = (isDragging, draggableStyle) => ({
    border: isDragging ? 'lightgreen 1px solid' : 'inherit',
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey'
});


class CustomDraggableMegadraft extends Component {
    state = {
        editorState: editorStateFromRaw(null)
    }

    onDragEnd = (result) => {
        // dropped if outside the list
        if (!result.destination) {
            return;
        };

        if (window.innerWidth > 600) {
            return;
        };

        const reorder = (arr, startIndex, endIndex) => {
            const res = arr;
            const [removed] = res.splice(startIndex, 1);
            res.splice(endIndex, 0, removed);
        
            return res;
        };

        let products = reorder(
            this.state.products,
            result.source.index,
            result.destination.index
        );

        this.setState({
            products: products
        });
    }

    onChange = (editorState) => {
        this.setState({editorState});
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <section className="customMegadraft container">
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div 
                                className=""
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}>
                                <MegadraftEditor 
                                    editorState={this.state.editorState}
                                    onChange={this.onChange}
                                />
                            </div>
                        )}
                    </Droppable>
                </section>
            </DragDropContext>
        );
    }
}

export default CustomDraggableMegadraft;