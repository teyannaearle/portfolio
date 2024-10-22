import React from "react";
import Resume from "../../resume/Resume";
import ProjectsLink from "../../project/ProjectsLink";
import "./LinksSection.scss";

function LinksSection() {
  return (
    <div className="linksSection">
      <div className="linksSection__head">
        <h2> Full Stack Web Dev | Wellness Fanatic &nbsp;</h2>
      </div>
      <div>
        <ProjectsLink />
        <Resume />
      </div>
    </div>
  );
}

export default LinksSection;
