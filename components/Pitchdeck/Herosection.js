import ImgLoader from '../Image'

import PitchdeckImg from "../../assets/images/pitch-deck-main.png"

export default function Herosection() {

   return (
      <>
         <div className="header-section">
            <div className="container">
               <div className="header-box">
                  <div className="content-box">
                     <h1>VC-Grade Pitch Decks for Visionary Startups</h1>
                     <p>We create compelling, investor-ready pitch decks for startups.</p>
                     <button className="btn">Contact us</button>
                  </div>
                  <div className="image-box">
                     <ImgLoader src={PitchdeckImg} alt="Cards" className="banner-image" />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
