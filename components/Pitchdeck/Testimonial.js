
import moment from 'moment';
import useSWR from "swr";
import parse from 'html-react-parser';
import Slider from "react-slick"

import ImgLoader from '../Image'
import { fetcher } from '../../lib/api'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




import TestAvatar from "../../assets/images/test-avatar.png"
import DefaultImg from '../../assets/images/author-default.png'

export default function TestimonialsectionPitch({data}) {
    var settings = {
        infinite: true,
        arrow: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
    }
    
    return (
        <>
            <div className="testimonial-section">
                <div className="container px-3">
                    <Slider {...settings}>
                        {data && data.map((item, index)=>{
                            const { Content, ClientName, publishedAt } = item.attributes
                        return(
                                <div className="testimonial" key={index}>
                                    <h3 className="mt-2 mb-5 text-center text-white">{Content && parse(` ${Content}`)}</h3>
                                    <div className="user-info">
                                        <ImgLoader src={DefaultImg} width={64} height={64} alt={ClientName && ClientName} className="rounded-circle" />
                                        <p className="name mt-3">{ClientName && ClientName}</p>                                        
                                        <div className='d-flex justify-content-center align-items-center gap-1'>
                                            <svg  focusable="false" aria-hidden="true" width="24" height="24" fill="faaf00" viewBox="0 0 24 24" data-testid="StarIcon"><path fill="#faaf00" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                            <svg  focusable="false" aria-hidden="true" width="24" height="24" fill="faaf00" viewBox="0 0 24 24" data-testid="StarIcon"><path fill="#faaf00" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                            <svg  focusable="false" aria-hidden="true" width="24" height="24" fill="faaf00" viewBox="0 0 24 24" data-testid="StarIcon"><path fill="#faaf00" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                            <svg  focusable="false" aria-hidden="true" width="24" height="24" fill="faaf00" viewBox="0 0 24 24" data-testid="StarIcon"><path fill="#faaf00" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                            <svg  focusable="false" aria-hidden="true" width="24" height="24" fill="faaf00" viewBox="0 0 24 24" data-testid="StarIcon"><path fill="#faaf00" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>                    
                </div>
            </div>
        </>
    )
}