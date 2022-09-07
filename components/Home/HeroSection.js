import ImgLoader from '../Image'

import HeroImg1 from "../../assets/images/home-mainimg.png"
import HeroImg2 from "../../assets/images/heroimg.png"

import Icon1 from "../../assets/images/brand1.jpg"
import Icon2 from "../../assets/images/brand3.png"
import Icon3 from "../../assets/images/brand2.png"
import Icon4 from "../../assets/images/brand6.png"
import Icon5 from "../../assets/images/brand5.png"
import Icon6 from "../../assets/images/brand4.png"




export default function HeroSection() {
    return (
      
<div className="header-section">
<div className="container">
   <div className="row">
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
         <h1><span>Top 1% </span>Pitch Deck Consultant</h1>
         <p>AlphaValley is the preferred choice of focused founders. We craft compelling investor pitch decks and business plans.</p>
         <button className="btn">Learn more</button>
         <div className="alumnus">
            <p>Admired by alumnus of </p>
            <div className="image-list gap-5">
            <ImgLoader src={Icon1} width={120} height={40} alt="icon" />
            <ImgLoader src={Icon2} width={120} height={40} alt="icon" />
            <ImgLoader src={Icon3} width={100} height={60} alt="icon" />
            <ImgLoader src={Icon4} width={120} height={30} alt="icon" />
            <ImgLoader src={Icon5} width={120} height={70} alt="icon" />
            <ImgLoader src={Icon6} width={120} height={40} alt="icon" />
            </div>
         </div>
      </div>
   </div>
</div>
<div className="image hero-img">
    <div  className="show">
<ImgLoader src={HeroImg1} width={600} height={520} alt="" />
</div>
<div className="hide">

<ImgLoader src={HeroImg2} width={600} height={400} alt="" />
</div>
</div>

</div>

    )
}