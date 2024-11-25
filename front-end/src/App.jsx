import { useState } from "react";
import "./App.css";
import Layout from "../src/components/Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutME/AboutMe";
import Skills from "./pages/Skills/Skills";
import MyServices from "./components/MyServices/MyServices";
import Projects from "./pages/Projects/Projects";
import HireMe from "./pages/HireMe/HireMe";
import NotFound from "./components/Notfound/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <MyServices />
      <Skills />
      <Projects />
      <HireMe />
      <Footer />
    </div>

    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/aboutMe" element={<AboutMe />} />
    //     <Route path="/myServices" element={<MyServices />} />
    //     <Route path="/skills" element={<Skills />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="/hireMe" element={<HireMe />} />
    //   </Routes>
    //   <Footer />
    // </Router>
  );
}

export default App;
