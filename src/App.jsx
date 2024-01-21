import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Banner from "./Component/Banner/Banner";
import BusinessCard from "./Component/BusinessCard/BusinessCard";
import Marketing from "./Component/Marketing/Marketing";
import Testimonial from "./Component/Testimonial/Testimonial";
import Articles from "./Component/Articels/Articles";
import Strategy from "./Component/Strategy/Strategy";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <BusinessCard />
      <Marketing />
      <Testimonial />
      <Articles />
      <Strategy />
    </>
  );
}

export default App;
