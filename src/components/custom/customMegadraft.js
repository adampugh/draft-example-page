import React, { Component } from 'react';
import { MegadraftEditor, editorStateFromRaw } from 'megadraft';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import '../../../node_modules/megadraft/dist/css/megadraft.css'
// import "../../styles/custom/customMegadraft.css";

import MyPlugin1 from '../../plugins/title/plugin';
import ImagePlugin from '../../../node_modules/megadraft/lib/plugins/image/plugin';
import MyPlugin2 from '../../plugins/products/plugin';

class CustomMegadraft extends Component {
    state = {
        editorState: editorStateFromRaw(null),
        // an array that manages component position

    }

    onChange = (editorState) => {
        this.setState({editorState});
    }

    onDragEnd = (result) => {
        // do nothing if dropped outside the list
        if (!result.destination) {
            return;
        }

        // const reorder = (arr, startIndex, endIndex) => {
        //     const res = arr;
        //     const [removed] = res.splice(startIndex, 1);
        //     res.splice(endIndex, 0, removed);

        //     return res;
        // }

        // // add function to utils folder
        // let components = reorder(
        //     this.state.components,
        //     result.source.index,
        //     result.destination.index
        // );

        // this.setState({
        //     components: components
        // });
    }

    render() {
        return (
            <section className="customMegadraft container" id="customMegadraft">
                <DragDropContext
                    onDragEnd={this.onDragEnd}
                >
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...this.props.droppableProps}>
                                <MegadraftEditor 
                                    editorState={this.state.editorState}
                                    onChange={this.onChange}
                                    plugins={[ImagePlugin, MyPlugin1, MyPlugin2]}          
                                />
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </section>
        );
    }
}

export default CustomMegadraft;