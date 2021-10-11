import React from 'react';
import { Carousel } from "react-responsive-carousel";
import Group from "../images/group.jpg"
import Me from "../images/me.jpg"
import Ted from "../images/ted.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CommunityLifeSection = ({titleClassName,onTitleClick,toggleContent}) => {
    return ( <div >
        <h2 className={titleClassName} onClick={onTitleClick} >Activities and Community Life</h2>
        <div className={toggleContent?" show ":"hide"}   >
            <div className="carousel-section">
            <span> OC member at TEDxYouth@SadikiCollege. May 2016</span>
        <Carousel width="100%"  showArrows={true} >
     
       <div>
                    <img src={Me} />
                    <p className="legend">Me in 2016</p>
                </div>

               
                <div>
                    <img src={Group} />
                    <p className="legend">Group photo</p>
                </div>
                <div>
                    <img src={Ted} />
                    <p className="legend">TED stage</p>
                </div>
      

        </Carousel>
                </div>
       </div></div>
          );
}
 
export default CommunityLifeSection;