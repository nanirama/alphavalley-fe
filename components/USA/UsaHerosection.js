import ImgLoader from '../Image'
import LandingPageForm from './LandingPageForm'
import CheckIcon from "../../assets/images/checkicon.png"
import AVlogo from "../../assets/images/av-logo.png"
export default function UsaHerosection() {

    return (
        <div>
            <div className="header-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <h1>Stunning, VC-grade Pitch Decks For <span>Busy Founders</span></h1>
                            <p>Win over investors with a bullet proof investor deck. Crafted by a specialist team with proven experience.</p>
                            <div className="content">
                                <div>
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                    <p>Compelling story</p>
                                </div>
                                <div>
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                    <p>Strong investment thesis</p>
                                </div>
                                <div>
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                    <p>Stunning design</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 form-box">
                            <div className="outer-box">
                                <div className="inner-box">
                                    <ImgLoader src={AVlogo} width={32} height={32} alt="AVlogo" />
                                    <h6>Book Free Consultation</h6>
                                    <LandingPageForm subject="Pitch Deck Enquiry - USA" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
