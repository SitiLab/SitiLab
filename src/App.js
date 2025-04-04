import React from "react";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Services from "./Services";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import ServiceModal from "./ServiceModal"; 

const App = ({ props }) => {
    return (
        <>
            <Navbar />
            <div id="home">
                <Hero />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="about-us">
                <AboutUs />
            </div>
            <div id="contact-us">
                <ContactUs />
            </div>
            <Footer />
        </>
    );
};

export default App;