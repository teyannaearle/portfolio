import React from "react";
import Project from "../components/Project";
import Resume from "../components/Resume";
import projectsData from "../data/projectsData";
import "./Projects.scss";

function Projects() {
  return (
    <div className="projectPage">
      <Resume />
      <ul className="projectPage__container">
        {projectsData.map((project, i) => {
          return <Project project={project} key={i} />;
        })}
      </ul>
    </div>
  );
}

export default Projects;
