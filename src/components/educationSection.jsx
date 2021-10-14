import React from "react";
const EducationSection = ({ titleClassName, onTitleClick, toggleContent }) => {
  return (
    <div>
      <h2 className={titleClassName} onClick={onTitleClick}>
        Education
      </h2>
      <div className={toggleContent ? " show" : "hide"}>
        <div className="section">
          <div className="section-title">
            <span className="bold degree">
              <i className="fa fa-graduation-cap font-awesome-icon"></i>
              Engineering Degree
            </span>
            <span className="place bold">
              <i className="fa fa-university font-awesome-icon"></i>National
              School of Computer science
            </span>
            <span className="date bold"> Sept 2020 - Sept 2023</span>
          </div>
          <div className="section-description"></div>
        </div>
        <div className="section">
          <div className="section-title">
            <span className="bold degree">
              {" "}
              <i className="fa fa-graduation-cap font-awesome-icon "></i>BSc in
              Information Technology Management
            </span>
            <span className="place bold">
              <i className="fa fa-university font-awesome-icon"></i>Higher
              Institute of Management
            </span>

            <span className="date bold"> Sept 2017 - Sept 2020</span>
          </div>
          <div className="section-description"></div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
