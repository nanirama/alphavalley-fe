import ImgLoader from '../Image'
import CTABtn from '../Elements/CTABtn'

import Homehero from "../../assets/images/home-hero.jpg"

import Icon1 from "../../assets/images/svg/clients-01.svg"
import Icon2 from "../../assets/images/svg/clients-02.svg"
import Icon3 from "../../assets/images/svg/clients-03.svg"
import Icon4 from "../../assets/images/svg/clients-04.svg"
import Icon5 from "../../assets/images/svg/clients-05.svg"
import Icon6 from "../../assets/images/svg/clients-06.svg"

export default function HeroSection() {
   return (

      <div className="header-section">
         <div className="container">
            <div className="row ">
               <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h1><span>Top 1% </span>Investor Pitch Deck Consultant</h1>
                  <p>AlphaValley is the preferred choice of focused founders. We craft compelling investor pitch decks and business plans.</p>
                  <CTABtn label="Learn more" />
                  <div className="alumnus">
                     <p>Admired by alumnus of </p>
                     <div className="image-list">
                        <div className='alumnusimg'><ImgLoader src={Icon1} width={120} height={40} alt="icon" /></div>
                        <div className='alumnusimg'><ImgLoader src={Icon2} width={120} height={40} alt="icon" /></div>
                        <div className='alumnusimg'><ImgLoader src={Icon5} width={120} height={40} alt="icon" /></div>
                        <div className='alumnusimg'><ImgLoader src={Icon3} width={120} height={40} alt="icon" /></div>
                        <div className='alumnusimg'><ImgLoader src={Icon4} width={120} height={40} alt="icon" /></div>
                        <div className='alumnusimg'><ImgLoader src={Icon6} width={120} height={40} alt="icon" /></div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="image hero-img">
                     <div className="">
                        <ImgLoader src={Homehero} width={720} height={586} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}