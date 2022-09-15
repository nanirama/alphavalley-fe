import ImgLoader from '../Image'

import Businessplan from "../../assets/images/business-plan.jpg"
import Pitchdeckdesign from "../../assets/images/pitch-deck-design.jpg"


export default function Introduction() {

    return (

        <div class="home introduction">
            <div class="service-section">
                <div class="container">
                    <div class="heading"><span>Introduction</span></div>
                    <div class="contents">
                 
                            <div class="box left">
                                <div class="row">
                                   
                                    <div class="col-lg-6 col-md-12 col-sm-12 col-12 image">
                                        <div class="outer-box">
                                            <div class="inner-box">
                                            <ImgLoader src={Businessplan} alt="Cards" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div class="content">
                                            <h2>Business Plan</h2>
                                            <p>Looking to raise capital from banks or private financiers? Contact us. We professional business plan writing service for entrepreneurs who require bank loan or grants.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box right">
                                <div class="row">
                                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div class="content">
                                            <h2>Pitch Deck Design</h2>
                                            <p>Professional presentation design service for startups who want to save time and make a mark.</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 col-12 image">
                                        <div class="outer-box">
                                            <div class="inner-box">
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