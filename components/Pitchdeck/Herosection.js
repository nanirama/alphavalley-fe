import ImgLoader from '../Image'

import PitchdeckImg from "../../assets/images/pitch-deck-main.png"

export default function Herosection() {

    return (
<>
<div class="header-section">
   <div class="container">
      <div class="header-box">
         <div class="content-box">
            <h1>VC-Grade Pitch Decks for Visionary Startups</h1>
            <p>We create compelling, investor-ready pitch decks for startups.</p>
            <button class="btn">Contact us</button>
         </div>
         <div class="image-box">
         <ImgLoader src={PitchdeckImg} alt="Cards" class="banner-image"  />
            </div>
      </div>
   </div>
</div>
</>
    )
}
