import ImgLoader from '../Image'

import Businessplan from "../../assets/images/business-plan.jpg"
import Pitchdeckdesign from "../../assets/images/pitch-deck-design.jpg"


export default function Introduction() {

    return (

        <div className="home introduction">
            <div className="service-section">
                <div className="container">
                    <div className="heading"><span>Introduction</span></div>
                    <div className="contents">
                 
                            <div className="box left">
                                <div className="row">
                                   
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 image">
                                        <div className="outer-box">
                                            <div className="inner-box">
                                            <ImgLoader src={Businessplan} alt="Cards" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="content">
                                            <h2>Business Plan</h2>
                                            <p>Looking to raise capital from banks or private financiers? Contact us. We professional business plan writing service for entrepreneurs who require bank loan or grants.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box right">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="content">
                                            <h2>Pitch Deck Design</h2>
                                            <p>Professional presentation design service for startups who want to save time and make a mark.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 image">
                                        <div className="outer-box">
                                            <div className="inner-box">
                                                <ImgLoader src={Pitchdeckdesign} alt="Cards" />
                                            </div>
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