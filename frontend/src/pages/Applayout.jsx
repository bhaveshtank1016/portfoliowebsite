import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "./about/About";
import Services from "./services/Services";
import Projects from "./Projects/Projects";
import Contect from "./Contects/Contect";
import AchievementsSection from "./achivments/achievements ";
// import Homesection from "./Herosection";

function Applayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <About />
      <Services />
      <Projects />
      <AchievementsSection/>
      <Contect />
      <Footer/>
    </div>
  );
}

export default Applayout;
