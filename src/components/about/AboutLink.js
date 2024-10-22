import React from "react";
import { Link } from "react-router-dom";
import { RiProfileLine } from "react-icons/ri";

function AboutLink() {
  return (
    <div className="projectsLink">
      <Link to="/">
        {" "}
        About me <RiProfileLine />
      </Link>
    </div>
  );
}

export default AboutLink;
