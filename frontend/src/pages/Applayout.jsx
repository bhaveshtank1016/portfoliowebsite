import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects/Projects";
import Team from "./Teams/Team";
import Testimonials from "./Testimonials";
import Contect from "./Contects/Contect";
// import Homesection from "./Herosection";

function Applayout() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <About />
      <Services />
      <Projects />
      <Team />
      <Testimonials />
      <Contect /> 
       
      <Footer></Footer> 
    </div>
  );
}

export default Applayout;
