import React, { useState } from "react";
import { Link } from "react-router-dom";
import info from "../../data/info.json";
import contact from "../../data/contact.js";
import "./BottomNav.scss";

function BottomNav() {
  const [infoMenu, setInfoMenu] = useState(false);
  const [contactMenu, setContactMenu] = useState(false);

  const infoClickHandler = () => {
    setContactMenu(false)
    setInfoMenu(!infoMenu)

  }

  const contactClickHandler = () => {
    setInfoMenu(false)
    setContactMenu(!contactMenu)
  }

  return (
    <div className="bottomNav">
      <div className={infoMenu ? "bottomNav__info-active" : "bottomNav__info"}>
        <ul>
          {info.map((item, key) => {
            return (
              <li key={key}>
                <Link to={item.url} onClick={()=> setInfoMenu(false)}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={
          contactMenu ? "bottomNav__contact-active" : "bottomNav__contact"
        }
      >
        <ul>
          {contact.map((item, key) => {
            return (
              <li key={key}>
                <Link to={item.url} onClick={()=> setContactMenu(false)}>{item.icon}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="bottomNav__collapsed">
      <li className="bottomNav__collapsedInfo"> <span onClick={infoClickHandler}>{infoMenu ? <> &#x2193; </> : <> &#x2191; </>} My Info 	</span></li>
      <li className="bottomNav__collapsedContact"> <span onClick={contactClickHandler}> {contactMenu ? <> &#x2193; </> : <> &#x2191; </>} Find me on .. </span></li>
      </ul>
    </div>
  );
}

export default BottomNav;
