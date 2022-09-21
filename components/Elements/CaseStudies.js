import React from "react";

import Slider from "react-slick"
import CaseStudyItem from "./CaseStudyItem";
import ImgLoader from '../Image'

import CasestudyImg1 from "../../assets/images/case-study1.png"
import CasestudyImg2 from "../../assets/images/case-study2.png"
import CasestudyImg3 from "../../assets/images/case-study3.png"
import Casestudyarw from "../../assets/images/casestudy-arw.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CaseStudiessection({ data }) {
    
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '5%',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                centerMode: false,
                centerPadding: '0%',
              }
            },
         
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                centerMode: false,
                centerPadding: '0%',
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                centerMode: false,
                centerPadding: '0%',
              }
            }
          ]
    };
    return (
        <div className="case-study-section">
            <div className="container">
                <div className="heading">
                    <h1>Case Studies</h1>
                    <p>Select case studies of our contribution to the startup ecosystem.</p>
                </div>
                <div className="case-studyslide case-study">
                  <div className="w-100 relative">
                    <Slider {...settings}>
                        {data && data.map((item, index)=> <CaseStudyItem key={index} id={item.id}/>)}
                    </Slider>
                </div>
                </div>
            </div>
        </div>
    )
}
