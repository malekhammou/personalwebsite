import React from "react";
import Doctonise from "../icons/doctonise.jpg";
const ProjectsSection = ({ titleClassName, onTitleClick, toggleContent }) => {
  return (
    <div>
      <h2 className={titleClassName} onClick={onTitleClick}>
        Projects
      </h2>
      <div className={toggleContent ? " show" : "hide"}>
        <div className="section">
          <div className="section-title">
            <img className="project-logo" src={Doctonise} />
            <span className="bold ">Doctonise</span>
          </div>
          <div className="section-description"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
