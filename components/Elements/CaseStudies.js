import React from "react";
import Link from 'next/link'

import Slider from "react-slick"
import CaseStudyItem from "./CaseStudyItem";

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
                <div className="row">
                  <div className="col-md-6 col-sm-12 d-flex justify-content-md-start">
                    <div className="heading">
                        <h1>Case Studies</h1>
                        <p>Select case studies of our contribution to the startup ecosystem.</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className=" d-flex justify-content-md-end mb-5">
                  <Link href="/casestudy"><a className="btn">Learn more</a></Link>   
                  </div> 
                  </div>
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
