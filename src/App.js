import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./util/ScrollToTop";
import SideNav from "./components/navs/sideNav/SideNav";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Banner from "./components/navs/Banner";
import "../src/components/navs/topNav/TopNav.scss";
import "./App.scss";

function App() {
  const location = useLocation().pathname;

  return (
    <div className="App">
      <Banner />
      <SideNav />
      <div className={location === "/" ? "main main-home" : "main"}>
        <div className="main__content">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
