import React from "react";
import Project from "../components/Project";
import Resume from "../components/Resume";
import projectsData from "../data/projectsData";
import {
  FaGitAlt,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiPostgresql, SiRedux, SiJavascript } from "react-icons/si";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./Projects.scss";

function Projects() {
  return (
    <div className="projectPage">
      <Resume />
      <ul className="projectPage__skills">
        <FaGitAlt />
        <FaNodeJs />
        <SiPostgresql />
        <SiRedux />
        <p>
          <BsArrowLeft /> Skills <BsArrowRight />
        </p>
        <FaReact />
        <SiJavascript />
        <FaHtml5 />
        <FaCss3Alt />
      </ul>
      <ul className="projectPage__container">
        {projectsData.map((project, i) => {
          return <Project project={project} key={i} />;
        })}
      </ul>
    </div>
  );
}

export default Projects;
