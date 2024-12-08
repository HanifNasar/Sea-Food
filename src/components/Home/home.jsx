import React from "react";
import Hero from "../Hero";
import Products from "../Products/Products";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";



const Home = () => {
  return (
    <main>
      <Hero/>
      <Products/>
      <Banner/>
      <Footer/>
    </main>
  );
};

export default Home;
