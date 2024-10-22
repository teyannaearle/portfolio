import React from "react";
import Project from "../components/project/Project";
import Resume from "../components/resume/Resume";
import projectsData from "../data/projectsData";
import {
  FaGitAlt,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiPostgresql, SiRedux, SiJavascript } from "react-icons/si";
import { BsArrowLeft, BsArrowRight, BsArrowDown } from "react-icons/bs";
import "./Projects.scss";
import LinksSectionProjects from "../components/navs/topNav/LinksSectionProjects";

function Projects() {
  return (
    <div className="projectPage">
      <LinksSectionProjects />
      {/* <Resume /> */}
      <ul className="projectPage__skills">
        <li>
          {" "}
          <FaReact /> <br /> React
        </li>
        <li>
          {" "}
          <SiJavascript /> <br /> JavaScript
        </li>
        <li>
          {" "}
          <FaHtml5 /> <br /> HTML
        </li>
        <li>
          <FaCss3Alt /> <br /> CSS
        </li>
        <p>
          <BsArrowLeft /> Skills <BsArrowRight />
        </p>
        <li>
          <FaGitAlt /> <br />
          git
        </li>
        <li>
          {" "}
          <FaNodeJs /> <br /> Node.js
        </li>
        <li>
          {" "}
          <SiPostgresql /> <br /> PostgreSQL
        </li>
        <li>
          {" "}
          <SiRedux /> <br /> Redux
        </li>
      </ul>

      <div className="projectPage__skills--smallView">
        <h2>
         Skills
        </h2>
        <div>
          <ul> 
          <li>
            <FaGitAlt /> <br />
            git
          </li>
          <li>
            {" "}
            <FaNodeJs /> <br /> Node.js
          </li>
          <li>
            {" "}
            <SiPostgresql /> <br /> PostgreSQL
          </li>
          <li>
            {" "}
            <SiRedux /> <br /> Redux
          </li>
          </ul>
        </div>
        <div>
          <ul> 
          <li>
            {" "}
            <FaReact /> <br /> React
          </li>
          <li>
            {" "}
            <SiJavascript /> <br /> JavaScript
          </li>
          <li>
            {" "}
            <FaHtml5 /> <br /> HTML
          </li>
          <li>
            <FaCss3Alt /> <br /> CSS
          </li>
          </ul>
        </div>
 
      </div>
      <ul className="projectPage__container">
        {projectsData.map((project, i) => {
          return <Project project={project} key={i} />;
        })}
      </ul>
    </div>
  );
}

export default Projects;
