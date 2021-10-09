import "./App.css";
import Malek from "../src/images/nobg.png";
import Github from "../src/icons/github.png";
import Linkedin from "../src/icons/linkedin.png";
import Scholar from "../src/icons/scholar.png";

function App() {
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
      <h2>Education</h2>
      <div className="section">

        <div className="section-title">
          <span className="place bold">          National School of Computer science
</span>
<span className="date bold"> Sept 2020 - Sept 2023</span>
        </div>
        <div className="section-description">
        The National School of Computer Sciences or ENSI is a Tunisian school
        training engineers in information and communication technologies.
        </div>
      </div>
      <div className="section">

<div className="section-title">
  <span className="place bold">          Higher Institute of Management
</span>
<span className="date bold"> Sept 2017 - Sept 2020</span>
</div>
<div className="section-description">
Outre la possibilité d’intégrer les Mastères en informatique, 
</div>
</div>
    </div>
  );
}

export default App;
