import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


import Product from "./product";

// import "../../styles/products/productGrid.css";



const getItemStyle = (isDragging, draggableStyle) => ({
    border: isDragging ? 'lightgreen 1px solid' : 'inherit',
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    // background: isDraggingOver ? 'lightblue' : 'lightgrey'
});




class ProductGrid extends Component {
    state = {
        products: [
            {
                id: "erger",
                imgUrl: "https://gracefitguide.com/img/products/3-1.png",
                price: "£2.40",
                description: "This thing si good, This thing si good, This thing si good, This thing si good, This thing si good, This thing si good,",
                title: "2 Mega Bundle"
            },
            {
                id: "2fve",
                imgUrl: "https://gracefitguide.com/img/products/strap-orange.png",
                price: "£2.40",
                description: "This thing si good",
                title: "Strap Orange"
            },
            {
                id: "erberrb",
                imgUrl: "https://gracefitguide.com/img/products/pink-pad.jpg",
                price: "£2.40",
                description: "This thing si good",
                title: "Pink Pad"
            },
            {
                id: "efbd2",
                imgUrl: "https://gracefitguide.com/img/products/blue-dumb.png",
                price: "£2.40",
                description: "This thing si good",
                title: "Blue Dumb"
            }
        ]
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

    // render draggable component if on mobile -- if on desktop render non-draggable version

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <section className="productGrid__wrapper">
                    <h1>Products</h1>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div 
                                className="productGrid container"
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}>

                                {   window.innerWidth < 600 
                                    ? this.state.products.map((product, i) => 
                                    <Draggable key={product.id} draggableId={product.id} index={i}>
                                        {(provided, snapshot) => (
                                            <div
                                                className="product__wrapper"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                <Product 
                                                    key={i + product.title}
                                                    price={product.price}
                                                    imgUrl={product.imgUrl}
                                                    description={product.description}
                                                    title={product.title} 
                                                />
                                            </div> 
                                        )}
                                    </Draggable>
                                ) : this.state.products.map((product, i) => 
                                    <div className="product__wrapper" key={product.id}>
                                        <Product 
                                            key={i + product.title}
                                            price={product.price}
                                            imgUrl={product.imgUrl}
                                            description={product.description}
                                            title={product.title} 
                                        />
                                    </div>
                                )
                                }
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </section>
            </DragDropContext >
        )
    }
}

export default ProductGrid;