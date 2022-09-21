import ImgLoader from '../Image'

import Homehero from "../../assets/images/home-hero.jpg"
import HeroImg2 from "../../assets/images/heroimg.png"

import Icon1 from "../../assets/images/brand9.png"
import Icon2 from "../../assets/images/brand3.png"
import Icon4 from "../../assets/images/brand6.png"
import Icon5 from "../../assets/images/brand5.png"
import Icon7 from "../../assets/images/brand7.png"
import Icon8 from "../../assets/images/brand8.png"






export default function HeroSection() {
   return (

      <div className="header-section">
         <div className="container">
            <div className="row ">
               <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h1><span>Top 1% </span>Investor Pitch Deck Consultant</h1>
                  <p>AlphaValley is the preferred choice of focused founders. We craft compelling investor pitch decks and business plans.</p>
                  <button className="btn">Learn more</button>
                  <div className="alumnus">
                     <p>Admired by alumnus of </p>
                     <div className="image-list">
                        <div className='alumnusimg'><ImgLoader src={Icon4} width={120} height={30} alt="icon" /></div>
                        <div className='alumnusimg'><ImgLoader src={Icon2} width={120} height={40} alt="icon" /></div>
                        <div className='alumnusimg'><ImgLoader src={Icon1} width={120} height={40} alt="icon" /></div>
                        <div className='alumnusimg'><ImgLoader src={Icon7} width={120} height={40} alt="icon" /></div>
                        <div className='alumnusimg'><ImgLoader src={Icon5} width={120} height={40} alt="icon" /></div>
                        <div className='alumnusimg'><ImgLoader src={Icon8} width={120} height={40} alt="icon" /></div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="image hero-img">
                     <div className="">
                        <ImgLoader src={Homehero} width={720} height={586} alt="" />
                     </div>
                     {/* <div className="hide">
               <ImgLoader src={HeroImg2} width={600} height={400} alt="" />
            </div> */}
                  </div>
               </div>
            </div>
         </div>


      </div>

   )
}