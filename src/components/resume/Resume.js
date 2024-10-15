import React from "react";
import { HiExternalLink } from "react-icons/hi";
import "./Resume.scss";

function Resume() {
  return (
    <div className="resumeLink">
      <a
        href="https://docs.google.com/document/d/e/2PACX-1vQTJKVDC-woX_QoqQDkqlig7sk47tzPG9-8_GjiUtfmTLzsRxEGop1CEfF-EIN-eLNAXMFJhIag3E6u/pub"
        target="_blank"
        rel="noreferrer"
      >
        View Resume <HiExternalLink />
      </a>
    </div>
  );
}

export default Resume;
