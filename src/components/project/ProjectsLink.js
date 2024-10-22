import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import "./Project.scss";

function ProjectsLink() {
  return (
    <div className="projectsLink">
      <Link to="/projects">
        {" "}
        Projects <FaLaptopCode />
      </Link>
    </div>
  );
}

export default ProjectsLink;
