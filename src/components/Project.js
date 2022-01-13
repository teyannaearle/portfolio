import React from "react";
import { FiGithub } from "react-icons/fi";
import { HiExternalLink } from "react-icons/hi";
import "./Project.scss";

function Project({ project }) {
  return (
    <li className="projectCard">
      <div className="projectCard__title">
        <p>{project.title}</p>
        <span>
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href={project.siteLink} target="_blank" rel="noreferrer">
            <HiExternalLink />
          </a>
        </span>
      </div>

      <div className="projectCard__summary">
        <img src={project.src} alt={project.alt} />
        <span>&emsp; {project.caption}</span>
      </div>

      <ul className="projectCard__tech">
        {project.technologies.map((tech, index) => {
          return <li key={index}>{tech}</li>;
        })}
      </ul>
    </li>
  );
}

export default Project;
