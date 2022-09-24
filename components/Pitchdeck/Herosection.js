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
                        <LandingPageForm subject="Pitch Deck Enquiry - UAE"/>
                        </div>
                        {/* <iframe width='110%' height='450px' className="overflow-hidden" src='https://bigin.zoho.in/crm/WebFormServeServlet?rid=f1a1faee80712dc9c0d45324653a5bd02198df88165532d85a64ab75dc0680e8gid6cd952f3e5be67584d0644fe79b8ff8f467182910d36d1784d783e5c92f37855'></iframe> */}
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
