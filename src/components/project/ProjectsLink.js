import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import "./Project.scss";

function ProjectsLink() {
  return (
    <div className="projectsLink">
      <a href="/projects">
        View Projects <FaLaptopCode />
      </a>
    </div>
  );
}

export default ProjectsLink;
