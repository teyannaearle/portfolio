import React from 'react'
import Logo from "../../assets/Logo.png"
import { Link } from "react-router-dom" 
import "./TopNav.scss"

function TopNav() {
    return (
        <div className="topNav">
            <Link to="/" className="topNav__logo"> <img src={Logo}/> </Link>
        </div>
    )
}

export default TopNav
