import React from 'react'
import { Link } from "react-router-dom" 
import Logo from "../../assets/Logo.png"
import "./TopNav.scss"

function TopNav() {
    return (
        <div className="topNav">
            <Link to="/" className="topNav__logo"> <img src={Logo} alt="logo"/> </Link>
            <div className="topNav__menuItems">
               <ul>
                <li><Link to="/about"> who am i ? </Link></li>
                <li><Link to="/projects" className="topNav__menuItems-middle"> what have i made ? </Link></li>
                <li><Link to="/contact"> how can we connect ? </Link></li>
               </ul>
            </div>
        </div>
    )
}

export default TopNav
