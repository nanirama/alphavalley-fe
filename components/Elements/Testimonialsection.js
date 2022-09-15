import Slider from "react-slick"

import ImgLoader from '../Image'


import TestAvatar from "../../assets/images/test-avatar.png"
import TestImg1 from "../../assets/images/test-img2.png"
import TestImg2 from "../../assets/images/test-img1.png"

import TestImg3 from "../../assets/images/test-img3.png"

import TestImg4 from "../../assets/images/test-img4.png"

import TestImg5 from "../../assets/images/test-img5.png"



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DefaultImg from '../../assets/images/author-default.png'

export default function Testimonialsection({ data }) {
    var settings = {
        infinite: true,
        arrow: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
    }
    return (

        <div className="testimonial-section">
            <div className="container">
                <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-0 col-sm-0 col-0"></div>
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 hometestmnl">
                        <Slider {...settings}>
                            {data && data.map((item, index) => {
                                const { Content, ClientName, Designation, publishedAt } = item.attributes
                                return (
                                    <div key={index}>
                                        <h3>{Content && Content}</h3>
                                        <div className="user">
                                            <ImgLoader src={DefaultImg} width={64} height={64} alt={ClientName && ClientName} className="rounded-circle" />
                                            <h6>{ClientName && ClientName}</h6>
                                            {Designation && <p>{Designation}</p>}

                                        </div>
                                    </div>
                                )
                            })}

                        </Slider>

                        <div id="companies">
                            <div className="testcompanies">
                                <ImgLoader src={TestImg1} width={130} height={40} alt="Logo" />
                                <ImgLoader src={TestImg2} width={130} height={40} alt="Logo" />
                                <ImgLoader src={TestImg3} width={130} height={40} alt="Logo" />
                                <ImgLoader src={TestImg4} width={130} height={40} alt="Logo" />
                                <ImgLoader src={TestImg5} width={130} height={40} alt="Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-0 col-sm-0 col-0"></div>
                </div>
            </div>
        </div>

    )

}