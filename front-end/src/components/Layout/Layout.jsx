import React from "react";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import NumberBanner from "../NumberBanner/NumberBanner";
import AboutMe from "../../pages/AboutME/AboutMe";
import Skills from "../../pages/Skills/Skills";
import Projects from "../../pages/Projects/Projects";
import MyServices from "../MyServices/MyServices";
import HireMe from "../../pages/HireMe/HireMe";
import Footer from "../../components/Footer/Footer";
import Routers from "../Routers/Routers";

function Layout() {
  return (
    <div>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default Layout;
