import React, { useEffect, useState } from "react";
import { WatchScroll } from "../../../hooks/WatchScroll"
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import info from "../../../data/info.json";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import "./TopNav.scss";

function TopNav() {
  const [active, setActive] = useState(false);
  const { scrollDirection } = WatchScroll();  

  useEffect(()=>{
    if (scrollDirection ==="down"){
      setActive(false)
    }
  },[scrollDirection])


  return (
    <div className={scrollDirection ==="up" ?  "topNav topNav-hidden" : "topNav"}>
      <Link to="/" className="topNav__logo" onClick={() => setActive(false)}>
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
