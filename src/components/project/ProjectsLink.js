import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import "./Project.scss";

function ProjectsLink() {
  return (
    <div className="projectsLink">
      <Link to="/projects">
        {" "}
        View Projects <FaLaptopCode />
      </Link>
      {/* <a href="/projects">
        View Projects <FaLaptopCode />
      </a> */}
    </div>
  );
}

export default ProjectsLink;
