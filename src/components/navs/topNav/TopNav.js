import React from 'react'
import { Link } from "react-router-dom" 
import Logo from "../../../assets/Logo2.png"
import info from "../../../data/info.json"
import "./TopNav.scss"

function TopNav() {
    return (
        <div className="topNav">
            <Link to="/" className="topNav__logo"> <img src={Logo} alt="logo"/> </Link>
            <div className="topNav__menuItems">
               <ul>
                   {info.map((item, key) => {
                       return(
                        <li key={key}><Link to={item.url}>{item.text}</Link></li>
                       )
                   })}
               </ul>
            </div>
        </div>
    )
}

export default TopNav
