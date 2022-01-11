import './App.scss';
import { Routes, Route } from "react-router-dom"
import TopNav from "./components/navs/topNav/TopNav"
import SideNav from "./components/navs/sideNav/SideNav"
import Footer from "./components/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import BottomNav from './components/navs/bottomNav/BottomNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <SideNav />
      <Footer />
      <BottomNav />

    <div className="main"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>

    </div>
  );
}

export default App;
