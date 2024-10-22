import React from "react";
import Resume from "../../resume/Resume";
import AboutLink from "../../about/AboutLink";

function LinksSectionProjects() {
  return (
    <div className="linksSection">
      <div></div>
      <div>
        <AboutLink />
        <Resume />
      </div>
    </div>
  );
}

export default LinksSectionProjects;
