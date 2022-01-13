import React from "react";
import { HiExternalLink } from "react-icons/hi";
import "./Resume.scss";

function Resume() {
  return (
    <div className="resumeLink">
      <a
        href="https://docs.google.com/document/d/e/2PACX-1vTfIJ6wYZfBlTa4qz0y20zKXx0Hpma9aPw00OM7NWHBrWKdyBTXcbRZnwoQBe9iTX2_gEP2MuXzPnnH/pub"
        target="_blank"
        rel="noreferrer"
      >
        View Resume <HiExternalLink />
      </a>
    </div>
  );
}

export default Resume;
