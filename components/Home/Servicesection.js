import ImgLoader from '../Image'

import Img1 from "../../assets/images/serviceimg1.png"

import Icon1 from "../../assets/images/serviceicon1.png"
import Icon2 from "../../assets/images/serviceicon2.png"
import Icon3 from "../../assets/images/serviceicon3.png"

import Dots from "../../assets/images/lineimg.png"




export default function Servicesection() {
    return (
        <div className='service-section'>
<div className="container">
   <div className="heading">
      <span>Services</span>
      <h1>Startup advisory services</h1>
      <p>Our services are carefully aligned to the dynamic needs of PE/VC funds, investment managers, and startups.</p>
   </div>
   <div className="contents">
      <div className="box right">
         <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
               <div className="content">
            <ImgLoader src={Icon1} width={56} height={56} alt="icon" />
                  <h5>Investor Pitch Deck</h5>
                  <p>End-to-end investor pitch creation service for seed to series-A stage. We also craft stunning investor decks for demo day, accelerators, and startup competitions.</p>
                  <button className="btn">Learn more</button>
               </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 image">
               <div className="outer-box">
                  <div className="inner-box"><ImgLoader src={Img1} width={488} height={328} alt="" /></div>
                  <div className='bottom-right'>
                  <ImgLoader src={Dots} width={298} height={408} alt="icon" />

                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="box left">
         <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 image">
               <div className="outer-box">
                  <div className="inner-box"><ImgLoader src={Img1} width={488} height={328} alt="" /></div>
                  <div className='bottom-left'>
                  <ImgLoader src={Dots} width={298} height={408} alt="icon" />

                  </div>
               </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
               <div className="content">
               <ImgLoader src={Icon2} width={56} height={56} alt="icon" />
                  <h5>Business Plan</h5>
                  <p>Looking to raise capital from banks or private financiers? Contact us. We professional business plan writing service for entrepreneurs who require bank loan or grants.</p>
                  <button className="btn">Learn more</button>
               </div>
            </div>
         </div>
      </div>
      <div className="box right">
         <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
               <div className="content">
               <ImgLoader src={Icon3} width={56} height={56} alt="icon" />
                  <h5>Pitch Deck Design</h5>
                  <p>Professional presentation design service for startups who want to save time and make a mark.</p>
                  <button className="btn">Learn more</button>
               </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 image">
               <div className="outer-box">
                  <div className="inner-box"><ImgLoader src={Img1} width={488} height={328} alt="" /></div>
                  <div className='bottom-right'>
                  <ImgLoader src={Dots} width={298} height={408} alt="icon" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>


        </div>
    )
}