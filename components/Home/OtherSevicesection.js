import ImgLoader from '../Image'


import Macbook1 from "../../assets/images/half-macbook.png"
import Macbook2 from "../../assets/images/full-macbook1.png"

import Downarrow from "../../assets/images/downarrow.png"
import Icon1 from "../../assets/images/othericon1.png"
import Icon2 from "../../assets/images/othericon2.png"
import Icon3 from "../../assets/images/othericon3.png"
import Icon4 from "../../assets/images/othericon4.png"




export default function OtherSevicesection() {
    return (
        <div className="other-service-section">
            <div className="container">
                <div className="heading">
                    <span>Additional services</span>
                    <h1>Other services</h1>
                    <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                </div>
                <div className="image-content">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-sm-6 col-12">
                                    <div className="box">
                                        <ImgLoader src={Icon1} width={48} height={48} alt="icon" />
                                        <h5>Startup Valuation</h5>
                                        <p>Valuation service to startups seeking capital from venture capitalists or angel investors. We also offer this service for businesses seeking valuation for sale/acquisition/exit.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12">
                                    <div className="box">
                                        <ImgLoader src={Icon2} width={48} height={48} alt="icon" />
                                        <h5>Financial Modeling</h5>
                                        <p>Bespoke financial modeling and forecasting services for startups, management consultants, and boutique investment banks/advisors.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12">
                                    <div className="box">
                                        <ImgLoader src={Icon3} width={48} height={48} alt="icon" />
                                        <h5>Investor Connect</h5>
                                        <span className="tags">Coming soon!</span>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12">
                                    <div className="box">
                                        <ImgLoader src={Icon4} width={48} height={48} alt="icon" />

                                        <h5>Investment Research</h5>
                                        <p>Cutting-edge investment research offering for investment managers. Scouting investment opportunities, financial analysis and modelling, sector/economic analysis &amp; more.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image other-img">
                <div>
                    <div className='show'>
                        <ImgLoader src={Macbook1} width={570} height={500} alt="dashboard" />
                    </div>
                    <div className='hide'>
                        <ImgLoader src={Macbook2} width={688} height={450} alt="dashboard" />
                    </div>
                </div>
                <div className='hand-arrow '>
                    <ImgLoader src={Downarrow} width={284} height={245} alt="arrow" />
                </div>
            </div>


        </div>
    )
}