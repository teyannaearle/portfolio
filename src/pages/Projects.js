import React from "react";
import Project from "../components/Project";
import Resume from "../components/Resume";
import projectsData from "../data/projectsData";
import "./Projects.scss";

function Projects() {
  return (
    <div>
      <Resume />
      <ul>
        {projectsData.map((project, key) => {
          return <Project project={project} key={key} />;
        })}
      </ul>
    </div>
  );
}

export default Projects;
