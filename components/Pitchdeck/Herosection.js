import ImgLoader from '../Image'
import LandingPageForm from '../USA/LandingPageForm'
import PitchdeckImg from "../../assets/images/pitchdeckbanner.png"

export default function Herosection() {

   return (
      <>
         <div className="header-section">
            <div className="container">
               <div className="header-box">
               
                     <div className="content-box overflow-hidden">
                        <h1>VC-Grade Pitch Decks for Visionary Startups</h1>
                        <p>We create compelling, investor-ready pitch decks for startups.</p>
                        {/* <button className="btn">Contact us</button> */}
                        <div className="my-4 py-2">
                        <LandingPageForm subject="Pitch Deck Enquiry"/>
                        </div>
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
