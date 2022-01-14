import React from 'react'
import contact from "../../../data/contact"
import "./sideNav.scss"
import { WatchScroll } from "../../../hooks/WatchScroll"

function SideNav() {
  const { scrolledToBottom } = WatchScroll ()

    return (
        <ul className={scrolledToBottom ? "sideNav sideNav-bottom" : "sideNav"}>
        {contact.map((item, key) => {
          return (
            <li key={key}>
              <a href={item.url} target="_blank" rel="noreferrer">{item.icon}</a>
            </li>
          );
        })}
      </ul>
    )
}

export default SideNav
