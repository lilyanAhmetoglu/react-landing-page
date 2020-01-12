import React from "react";
import { Element } from "react-scroll";
import "./resources/styles.css";
import Header from "./resources/components/header_footer/Header";
import Featured from "./resources/components/featured";
import Info from "./resources/components/venueNfo";
import Highlights from "./resources/components/Highlights";
import Pricing from "./resources/components/pricing";
import Location from "./resources/components/location";
import Footer from "./resources/components/header_footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="info">
        <Info />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
