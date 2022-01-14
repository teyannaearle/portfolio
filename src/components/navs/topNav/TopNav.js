import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import info from "../../../data/info.json";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { MdClose } from "react-icons/md"
import "./TopNav.scss";

function TopNav() {
  const [active, setActive] = useState(false);

  return (
    <div className="topNav">
      <Link to="/" className="topNav__logo">
        {" "}
        <img src={Logo} alt="logo" />{" "}
      </Link>
      <div
        className={active ? "topNav__openMenuIcon" : "topNav__collapsedMenuIcon"}
        onClick={() => setActive(!active)}
      >
        {active ? <ImMenu4 /> : <ImMenu3 />}
      </div>
      <div
        className={active ? "topNav__menuItems-active" : "topNav__menuItems"}
      >
        <ul>
          {info.map((item, key) => {
            return (
              <li key={key}className="topNav__listItems">
                <Link  onClick={() => setActive(false)}  to={item.url}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TopNav;
