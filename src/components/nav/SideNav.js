import React from 'react'
import contact from "../../data/contact"
import { Link } from "react-router-dom"
import "./sideNav.scss"

function SideNav() {
    return (
        <ul className="sideNav">
        {contact.map((item, key) => {
          return (
            <li key={key}>
              <a href={item.url}>{item.icon}</a>
            </li>
          );
        })}
      </ul>
    )
}

export default SideNav
