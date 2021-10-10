import React from 'react';
import Simula from "../icons/simula-logo.png"
import Ooredoo from "../icons/ooredoo-logo.png"
import Logis from "../icons/Logis-logo.png"
const WorkExperienceSection = ({titleClassName,
    onTitleClick,
    toggleContent}) => {
    return (<div>
        <h2 className={titleClassName} onClick={onTitleClick}  >Work Experience</h2>
<div className={toggleContent?" show ":"hide"}  >

          <div className="section">

<div className="work-experience-section-title">
<img
className="work-experience-logo"
    src={Simula}
  />
<div className="work-experience-place-and-date">

<span className="place bold">          Simula Research Laboratory
</span>
<span className="position">Research Intern
</span>
<span className="date bold"> Dec 2020 - Present</span>
</div>
</div>
<div className="section-description">
Contributed to the development of an <a  className="link" href="https://medimetrics.no/" target='_blank'>open-source web-based tool</a>, used to evaluate the performance of AI models.


The work was conducted in conjunction with a <a className="link" href="https://www.medrxiv.org/content/10.1101/2021.04.07.21254975v2" target="_blank"> study</a> on evaluation metrics for medical applications of artificial intelligence.




The tool performs a recalculation of all reported and missing metrics and generates useful visualizations and comparisons the user may freely incorporate in their research.




In fact, no single metric captures all the desirable properties of a model and no tool exists to compare models using the same performance metrics.

</div>
</div>
<div className="section">

<div className="work-experience-section-title">
<img
className="work-experience-logo"
    src={Ooredoo}
  />
<div className="work-experience-place-and-date">
<span className="place bold">          ooredoo
</span>
<span className="position">Business Intelligence Developer Intern
</span>
<span className="date bold"> Feb 2020 - Aug 2020</span>
</div>
</div>
<div className="section-description">
Ensured the design and development of a solution consisting of a reporting dashboard and an incident forecasting model for better visibility and management of incidents occurring at network station level.

Automation of the ETL process (SQL Server Integration Services | SQL Server Agent).
Data Restitution (Microsoft Power BI).
Generation of ML forecast model with Scikit learn library.
Development of a web app (SQL Server | Flask | Angular 8) for user access management.

</div>
</div>
<div className="section">

<div className="work-experience-section-title">
<img
className="work-experience-logo"
src={Logis}
/>
<div className="work-experience-place-and-date">
<span className="place bold">          Logis
</span>
<span className="position">Front End Developer
</span>
<span className="date bold"> Juin 2019 - Aug 2019</span>
</div>
</div>
<div className="section-description">
Worked closely with web designers and spearheaded the 
development of intuitive and responsive UI for a new CRM tool. I used React.js (HTML | CSS | Bootstrap) and jQuery. I also collaborated with the backend team for API integration.
</div>
</div>

          </div>
    </div>  );
}
 
export default WorkExperienceSection;