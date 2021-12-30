import './App.scss';
import { Routes, Route } from "react-router-dom"
import TopNav from "./components/nav/TopNav"
import SideNav from "./components/nav/SideNav"
import Footer from "./components/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

function App() {
  return (
    <div className="App">
      <TopNav />
      <SideNav />
      <Footer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
