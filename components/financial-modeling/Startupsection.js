import ImgLoader from '../Image'

import Intelligentimg from "../../assets/images/intelligent-img.jpg"
import Handarrow from "../../assets/images/downarrow.png"

import Financeimg1 from "../../assets/images/svg/finance-img1.svg"
import Financeimg2 from "../../assets/images/svg/finance-img2.svg"
import Financeimg3 from "../../assets/images/svg/finance-img3.svg"
import Financeimg4 from "../../assets/images/svg/finance-img4.svg"


export default function StartupSection() {

    return (
        <>
            <div className="home">
                <div className="other-service-section fincial-mdlngscn">
                    <div className="container">
                        <div className="heading">
                            <h1>Startup Financial Model – 5x Better Fundraising Chances</h1>
                            <p>It is imperative to answer the important questions of the investors in the least amount of time and still ensure to be memorable. Our experience as startup founders and as advisors to the investment fraternity and corporations gives us a good understanding of the habits & challenges in the board rooms of investors/decision-makers and in the cubicles of startup founders.</p>
                        </div>
                        <div className="image-content">
                            <div className="row">
                                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="row">
                                        <div className="col-sm-6 col-12">
                                            <div className="box">
                                                <div className="content-icons d-flex justify-content-center align-items-center rounded-pill">
                                                    <div className="inner-box d-flex justify-content-center align-items-center rounded-pill">
                                                    <ImgLoader src={Financeimg1} width={24} height={24} alt="icon" />
                                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 491.52 491.52" fill="#444ce7"><path d="M491.52 419.84V61.44h-82.513L378.88 24.85l-30.72 37.31v183.6h61.44V81.92h61.44v256H20.48v-256h61.44v184.32H61.44v20.48h368.64v-20.48h-102.4V0H81.92v61.44H0v358.4h153.6v51.2h-40.96v20.48h266.24v-20.48h-40.96v-51.2h153.6zm-102.4-194.56h-20.48V204.8h20.48v20.48zm0-40.96h-20.48V102.4h20.48v81.92zm0-102.4h-20.48V69.5l10.24-12.43 10.24 12.43v12.42zM102.4 20.48h204.8v245.76H102.4V20.48zm215.04 450.56H174.08v-51.2h143.36v51.2zM20.48 399.36V358.4h450.56v40.96H20.48z" /><path d="M122.88 40.96V153.6h163.84V40.96H122.88zm118.737 20.48L204.8 85.109 167.982 61.44h73.635zm-98.257 8.514 42.507 27.326-42.507 27.326V69.954zm24.622 63.166 36.818-23.669 36.818 23.669h-73.636zm98.258-8.514L223.733 97.28l42.507-27.326v54.652zM125.952 184.32h157.696v20.48H125.952zM159.744 225.28h90.122v20.48h-90.122z" /></svg> */}
                                                    </div>
                                                </div>
                                                <h5>Startup like DNA</h5>
                                                <p>We have startup like DNA – we move fast, iterate and focus on providing best financial model for your startup</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="box">
                                                <div className="content-icons d-flex justify-content-center align-items-center rounded-pill">
                                                    <div className="inner-box d-flex justify-content-center align-items-center rounded-pill">
                                                    <ImgLoader src={Financeimg2} width={24} height={24} alt="icon" />
                                                    </div>
                                                </div>
                                                <h5>Database Access</h5>
                                                <p>We use a wide-range of reliable and industry-specific data sources to ensure our analysis in the financial model is rooted in relevant and up-to-date data.</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="box">
                                                <div className="content-icons d-flex justify-content-center align-items-center rounded-pill">
                                                    <div className="inner-box d-flex justify-content-center align-items-center rounded-pill">
                                                    <ImgLoader src={Financeimg3} width={24} height={24} alt="icon" />
                                                    </div>
                                                </div>
                                                <h5>Investor-like Approach</h5>
                                                <p>When it comes to perfect financial modelling a 360-degree perspective developed with inputs from our investor network and designed for the investor’s mind-set.</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="box">
                                                <div className="content-icons d-flex justify-content-center align-items-center rounded-pill">
                                                    <div className="inner-box d-flex justify-content-center align-items-center rounded-pill">
                                                    <ImgLoader src={Financeimg4} width={24} height={24} alt="icon" />
                                                    </div>
                                                </div>
                                                <h5>Research Pedigree</h5>
                                                <p>We are a team of skilled consultants and analysts that have advised large corporations to startups in growth and operating strategies across verticals and geographies.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="image">
                                        <ImgLoader src={Intelligentimg} width={575} height={319} alt="Cards" />
                                        <div className='hand-arrow'>
                                            <ImgLoader src={Handarrow} alt="Cards" className="hand-arrow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}