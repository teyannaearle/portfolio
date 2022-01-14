import './App.scss';
import { Routes, Route, Link } from "react-router-dom"
import Logo from "./assets/Logo.png"
import TopNav from "./components/navs/topNav/TopNav"
import SideNav from "./components/navs/sideNav/SideNav"
import Footer from "./components/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import BottomNav from './components/navs/bottomNav/BottomNav';
import "../src/components/navs/topNav/TopNav.scss"

function App() {
  return (
    <div className="App">
      <TopNav /> 
      {/* <SideNav /> */}
      {/* <BottomNav /> */}

    <div className="main"> 
    <div className="main__content"> 
      <Link className="main__logoMin" to="/"><img src={Logo} alt="logo"/></Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SideNav />
      </div>
      <Footer />
      </div>



    </div>
  );
}

export default App;
