import React from "react";
import "./Project.scss"

function Project({project, key}) {
  return (
    <li key={key}>
      <img src={project.src} alt={project.alt} />
      <span>{project.caption}</span>
      <ul>
        {project.technologies.map((tech, index) => {
          return <li key={index}>{tech}</li>;
        })}
      </ul>
    </li>
  );
}

export default Project;
