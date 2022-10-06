import ImgLoader from '../Image'


import Macbook1 from "../../assets/images/other-services.jpg"
import Otherservices from "../../assets/images/svg/otherservices.svg"

import Downarrow from "../../assets/images/downarrow.png"


import Icon1 from "../../assets/images/svg/service-1.svg"
import Icon2 from "../../assets/images/svg/service-4.svg"
import Icon3 from "../../assets/images/svg/service-3.svg"
import Icon4 from "../../assets/images/svg/service-5.svg"


export default function OtherSevicesection() {
    return (
        <div className="other-service-section">
            <div className="container">
                <div className="heading">
                    <span>Additional services</span>
                    <h1>Fundraising Services</h1>
                    <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                </div>
                <div className="image-content">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-sm-6 col-12">
                                    <div className="box">
                                        <div className='content-icons'>
                                            <div className="inner-box">
                                                <ImgLoader src={Icon1} width={20} height={20} alt="icon" />
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.52 491.52" width={24} height={24} fill="#444ce7"><path d="M491.52 419.84V61.44h-82.513L378.88 24.85l-30.72 37.31v183.6h61.44V81.92h61.44v256H20.48v-256h61.44v184.32H61.44v20.48h368.64v-20.48h-102.4V0H81.92v61.44H0v358.4h153.6v51.2h-40.96v20.48h266.24v-20.48h-40.96v-51.2h153.6zm-102.4-194.56h-20.48V204.8h20.48v20.48zm0-40.96h-20.48V102.4h20.48v81.92zm0-102.4h-20.48V69.5l10.24-12.43 10.24 12.43v12.42zM102.4 20.48h204.8v245.76H102.4V20.48zm215.04 450.56H174.08v-51.2h143.36v51.2zM20.48 399.36V358.4h450.56v40.96H20.48z" /><path d="M122.88 40.96V153.6h163.84V40.96H122.88zm118.737 20.48L204.8 85.109 167.982 61.44h73.635zm-98.257 8.514 42.507 27.326-42.507 27.326V69.954zm24.622 63.166 36.818-23.669 36.818 23.669h-73.636zm98.258-8.514L223.733 97.28l42.507-27.326v54.652zM125.952 184.32h157.696v20.48H125.952zM159.744 225.28h90.122v20.48h-90.122z" /></svg> */}
                                            </div>
                                        </div>
                                        <h5>Startup Valuation</h5>
                                        <p>Valuation service to startups seeking capital from venture capitalists or angel investors. We also offer this service for businesses seeking valuation for sale/acquisition/exit.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12">
                                    <div className="box">
                                        <div className='content-icons'>
                                            <div className="inner-box">
                                                <ImgLoader src={Icon2} width={20} height={20} alt="icon" />

                                            </div>
                                        </div>
                                        <h5>Financial Modeling</h5>
                                        <p>Bespoke financial modeling and forecasting services for startups, management consultants, and boutique investment banks/advisors.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12">
                                    <div className="box">
                                        <div className='content-icons'>
                                            <div className="inner-box">
                                                <ImgLoader src={Icon3} width={19} height={19} alt="icon" />
                                            </div>
                                        </div>
                                        <h5>Investor Connect</h5>
                                        <span className="tags">Coming soon!</span>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12">
                                    <div className="box">
                                        <div className='content-icons'>
                                            <div className="inner-box">
                                                <ImgLoader src={Icon4} width={19} height={19} alt="icon" />
                                            </div>
                                        </div>
                                        <h5>Investment Research</h5>
                                        <p>Cutting-edge investment research offering for investment managers. Scouting investment opportunities, financial analysis and modelling, sector/economic analysis &amp; more.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="image">
                                <div>
                                        <ImgLoader src={Otherservices} width={575} height={319} alt="dashboard" />
                                </div>
                                <div className='hand-arrow '>
                                    <ImgLoader src={Downarrow} width={284} height={245} alt="arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}