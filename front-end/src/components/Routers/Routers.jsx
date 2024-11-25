import { Route, Router } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home/Home";
import AboutMe from "../../pages/AboutME/AboutMe";
import Skills from "../../pages/Skills/Skills";
import Projects from "../../pages/Projects/Projects";
import MyServices from "../MyServices/MyServices";
import HireMe from "../../pages/HireMe/HireMe";
import { Link } from "react-router-dom";
function Routers() {
  return (
    <Router>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/service" element={<MyServices />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/hireMe" element={<HireMe />} />
    </Router>
  );
}

export default Routers;
