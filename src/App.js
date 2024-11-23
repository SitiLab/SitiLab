import React from "react";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Services from "./Services";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const App = ({ props }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
