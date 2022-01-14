import React from "react";
import contact from "../data/contact";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">

      <ul className="footer__contactIcons">
        {contact.map((item, key) => {
          return (
            <li key={key}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
      Designed and Built by Té-yanna Earle
      
    </div>
  );
}

export default Footer;
