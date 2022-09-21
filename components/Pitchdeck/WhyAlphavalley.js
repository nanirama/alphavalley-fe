import React from 'react';
import ImgLoader from '../Image'

import StatImage from "../../assets/images/stat-image.png"

const WhyAlphavalley = () => {
    return (


<div className="stat-section">
   <div className="container">
      <div className="heading">
         <span className="title">WHY ALPHAVALLEY?</span>
         <h1>We’re committed to delivering value to SMBs and startups</h1>
         <span className="s-text">We don’t have </span>
      </div>
      <div className="row">
         <div className="col-lg-6 col-md-12">
            <div className="row stat-item">
               <div className="col-md-6 col-sm-6 col-12 item">
                  <h1>$<span>100</span>M+</h1>
                  <span>Funds raised by clients</span>
               </div>
               <div className="col-md-6 col-sm-6 col-12 item">
                  <h1><span>5000</span>+</h1>
                  <span>Slides crafted</span>
               </div>
               <div className="col-md-6 col-sm-6 col-12 item">
                  <h1><span>92</span>%</h1>
                  <span>Client satisfaction score</span>
               </div>
               <div className="col-md-6 col-sm-6 col-12 item">
                  <h1><span>4.8</span></h1>
                  <span>Average rating</span>
               </div>
            </div>
         </div>
         <div className="col-lg-6 col-md-12 alphimg">
            <ImgLoader src={StatImage} width={560} height={560} alt="" /></div>
      </div>
   </div>
</div>
    )
}
export default WhyAlphavalley;
