import React, { Component } from "react";

import HeroBannerMainText from "./heroBannerMainText";
import HeroBannerTagline from "./heroBannerTagline";

// import "../../styles/heroBanner.css";

class HeroBanner extends Component {
    

    render() {
        return (
            <section className="heroBanner">
                <HeroBannerMainText />
                <HeroBannerTagline />
                <button className="btn-purple">SHOP NOW</button>
            </section>
        );
    }
}

export default HeroBanner;