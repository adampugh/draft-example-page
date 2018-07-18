import React, { Component } from 'react';
// import { DragDropContext } from 'react-beautiful-dnd';

import Navbar from "./components/navbar";
import HeroBanner from "./components/heroBanner/heroBanner";
import ProductGrid from "./components/products/productGrid";
// import CustomEditor from "./components/custom/customEditor";
import CustomMegadraft from "./components/custom/customMegadraft";

import Footer from "./components/footer/footer";

class App extends Component {
  onDragStart = () => {

  };

  onDragUpdate = () => {

  };

  onDragEnd = () => {

  };


  render() {
    return (
      <div className="App">
        {/* <DragDropContext
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd} > */}
          <Navbar logo="LOGO"/>
          <HeroBanner 
            mainTitle="BODY FITNESS" 
            tagline="Get ripped for winter! 💪🏻"
            shopText="SHOP NOW" />
          <ProductGrid />
          <CustomMegadraft />
          {/* <CustomEditor /> */}
          <Footer />
        {/* </DragDropContext> */}
      </div>
    );
  }
}

export default App;
