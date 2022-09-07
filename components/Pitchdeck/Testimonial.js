
import moment from 'moment';
import useSWR from "swr";

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
                <div className="container">
                    <Slider {...settings}>
                        {data && data.map((item, index)=>{
                            const { Content, ClientName, publishedAt } = item.attributes
                            //const TESTI_ENDPOINT = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/testimonies/${item.id}?populate=*`
                            //const { data: testiData, error } = useSWR(TESTI_ENDPOINT, fetcher);
                            //console.log('testiDatatestiData',testiData)
                            //const AuthImage = testiData?.data?.attributes?.ClientImage?.data?.attributes?.url ? testiData?.data?.attributes?.ClientImage?.data?.attributes?.url : DefaultImg
                            return(
                                <div className="testimonial" key={index}>
                                    <h3 className="mt-2 mb-5 text-center">{Content && Content}</h3>
                                    <div className="user-info">
                                        <ImgLoader src={DefaultImg} width={64} height={64} alt={ClientName && ClientName} className="rounded-circle" />
                                        <p className="name mt-3">{ClientName && ClientName}</p>
                                        <p className="designation">Published <time dateTime={moment(publishedAt).format('DD MMM YYYY')}> {moment(publishedAt).format('DD MMM YYYY')} </time></p>
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