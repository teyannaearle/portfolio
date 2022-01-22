import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./util/ScrollToTop";
import TopNav from "./components/navs/topNav/TopNav";
import SideNav from "./components/navs/sideNav/SideNav";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "../src/components/navs/topNav/TopNav.scss";

function App() {
  const location = useLocation().pathname;

  return (
    <div className="App">
      <TopNav />
      <SideNav />

      <div className={location === "/" ? "main main-home" : "main"}>
        <div className="main__content">
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
