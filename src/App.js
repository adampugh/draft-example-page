import React, { Component } from 'react';
// import './App.css';

import Navbar from "./components/navbar";
import HeroBanner from "./components/heroBanner/heroBanner";
import ProductGrid from "./components/products/productGrid";
// import CustomEditor from "./components/custom/customEditor";
import CustomMegadraft from "./components/custom/customMegadraft";
import FixedEl from "./components/custom/fixedElement";

import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar logo="LOGO"/>
        <HeroBanner 
          mainTitle="BODY FITNESS" 
          tagline="Get ripped for winter! 💪🏻"
          shopText="SHOP NOW" />
        <ProductGrid />
        <CustomMegadraft />
        {/* <CustomEditor /> */}
        <Footer />
        <FixedEl />
      </div>
    );
  }
}

export default App;
