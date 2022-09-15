import React, { useState, useEffect } from 'react';

import ImgLoader from '../Image'





import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GallerySection({ ImgArray }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    // setNav1(slider1);
    // setNav2(slider2);

  });

  const next = () => {
    slider2.current.slickNext()
  }
  const previous = () => {
    slider2.current.slickPrev()
  }
  const settingsThumbs = {
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
          // adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settings = {

    infinite: true,
    arrow: false,
    dots: false,

    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  }

  return (


    <>
      <div className='container usaslider'>
        <Slider {...settings}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
          className='mb-4 activeslid'>
            {ImgArray && ImgArray.map((item,index)=>(
              <div key={index}>
              <ImgLoader src={item} width={1000} height={550} alt="Cards" className="slick-slide-image" />
            </div>
            ))}          
        </Slider>

        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}>
               {ImgArray && ImgArray.map((item,index)=>(
                <div key={index}>
                <ImgLoader src={item} width={120} height={80} alt="Cards" />
              </div>
              ))}            
          </Slider>
        </div>
      </div>
    </>
  )

}