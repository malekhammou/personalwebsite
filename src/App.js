import React,{useState,useEffect} from "react";
import "./App.css";
import Malek from "../src/images/nobg.png";
import Github from "../src/icons/github.png";
import Linkedin from "../src/icons/linkedin.png";
import Scholar from "../src/icons/scholar.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import EducationSection from "./components/educationSection";
import WorkExperienceSection from "./components/workExperienceSection";



const App=()=> {
  useEffect(()=>{

  })
  const [toggleEducation,setToggleEducation]=useState(false);
  const [toggleWorkExperience,setToggleWorkExperience]=useState(false);

 
  return (
    <div className="App">
      <div className="photoAndFullname">
        {" "}
        <img className="profile-image"
        
          src={Malek}
        />
        <span className="fullname">MALEK HAMMOU</span>
      </div>
      <p className="global-intro">
       Malek is an <span className="highlight">engineering student</span> at the <span className="highlight">National School of Computer Science</span> in Tunisia.
      </p>
      <div style={{ display: "flex" }}>
        <a href="https://github.com/malekhammou" target="_blank">
          <img
            style={{
              height: "3em",
              width: "3m",
              borderRadius: "50%",
              margin: "0.5em",
            }}
            src={Github}
          />
        </a>
        <a href="https://www.linkedin.com/in/malekhammou/" target="_blank">
          <img
            style={{
              height: "3em",
              width: "3m",
              borderRadius: "50%",
              margin: "0.5em",
            }}
            src={Linkedin}
          />
        </a>
        <a
          href="https://scholar.google.com/citations?user=TD74CeYAAAAJ&hl=fr"
          target="_blank">
          <img
            style={{
              height: "3em",
              width: "3m",
              borderRadius: "50%",
              margin: "0.5em",
            }}
            src={Scholar}
          />
        </a>
      </div>

      <div className="main-wrapper">
        <EducationSection
        titleClassName="main-section-title"
        onTitleClick={()=>setToggleEducation(!toggleEducation)}
        toggleContent={toggleEducation}
        />
        <WorkExperienceSection
        titleClassName="main-section-title"
        onTitleClick={()=>setToggleWorkExperience(!toggleWorkExperience)}
        toggleContent={toggleWorkExperience}
        />
          </div>
          <footer className="footer"> Created by Malek Hammou</footer>
    </div>
  );
}

export default App;
