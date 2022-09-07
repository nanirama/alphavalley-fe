import React from 'react';
import ImgLoader from '../Image'

import StatImage from "../../assets/images/stat-image.png"

const WhyAlphavalley = () => {
    return (


<div class="stat-section">
   <div class="container">
      <div class="heading">
         <span class="title">WHY ALPHAVALLEY?</span>
         <h1>We’re committed to delivering value to SMBs and startups</h1>
         <span class="s-text">We don’t have </span>
      </div>
      <div class="row">
         <div class="col-lg-6 col-md-12">
            <div class="row stat-item">
               <div class="col-md-6 col-sm-6 col-12 item">
                  <h1>$<span>100</span>M+</h1>
                  <span>Funds raised by clients</span>
               </div>
               <div class="col-md-6 col-sm-6 col-12 item">
                  <h1><span>5000</span>+</h1>
                  <span>Slides crafted</span>
               </div>
               <div class="col-md-6 col-sm-6 col-12 item">
                  <h1><span>92</span>%</h1>
                  <span>Client satisfaction score</span>
               </div>
               <div class="col-md-6 col-sm-6 col-12 item">
                  <h1><span>4.8</span></h1>
                  <span>Average rating</span>
               </div>
            </div>
         </div>
         <div class="col-lg-6 col-md-12"><ImgLoader src={StatImage} width={560} height={560} alt="" /></div>
      </div>
   </div>
</div>
    )
}
export default WhyAlphavalley;
