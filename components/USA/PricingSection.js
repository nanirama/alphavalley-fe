import ImgLoader from '../Image'

import MostPopular from "../../assets/images/most-popular.png"
import CheckIcon from "../../assets/images/checkicon.png"

export default function Pricingsection() {

    return (
        <div className="pricing-section">
            <div className="container">
                <div className="heading">
                    <span>Pricing</span>
                    <h1>Startup-friendly pricing</h1>
                    <p>Payment terms: 40% advance, remaining milestone-based.</p>
                </div>
                <div className="pricing">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="pricing-box">
                                <div className="fav">
                                <ImgLoader src={MostPopular} width={60} height={46} alt="check" />
                                    <span>Most popular!</span></div>
                                <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-s18byi">
                                    <div className="main-content">
                                        <h3>$1,290</h3>
                                        <b>Seed</b>
                                        <p>Revamp your existing deck</p>
                                    </div>
                                    <div className="check-box">
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                        <p>Elevate your existing deck</p>
                                    </div>
                                    <div className="check-box">
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                        <p>Standard professional design</p>
                                    </div>
                                    <div className="check-box">
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                        <p>Content cleanup</p>
                                    </div>
                                    <div className="check-box">
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                        <p>Deword - Make the deck concise</p>
                                    </div>
                                    <div className="check-box">
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                        <p>1 iteration included</p>
                                    </div>
                                    <button>Get started</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="pricing-box">
                                <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-s18byi">
                                    <div className="main-content">
                                        <h3>$2,490</h3>
                                        <b>Sprout</b>
                                        <p>Investor-ready deck from scratch</p>
                                    </div>
                                    <div className="check-box">
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                        <p>Content from scratch</p>
                                    </div>
                                    <div className="check-box">
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                        <p>Modern design</p>
                                    </div>
                                    <div className="check-box">
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                        <p>High level market research</p>
                                    </div>
                                    <div className="check-box">
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                        <p>Professional financial model template</p>
                                    </div>
                                    <div className="check-box">
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                        <p>Priority support</p>
                                    </div>
                                    <button>Get started</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="pricing-box">
                                <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-s18byi">
                                    <div className="main-content">
                                        <h3>$3,990</h3>
                                        <b>Sapling</b>
                                        <p>VC-grade deck for rowing startups</p>
                                    </div>
                                    <div className="check-box">
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                        <p>Everything in Seed+</p>
                                    </div>
                                    <div className="check-box">
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                        <p>Advanced content structure (incl. pyramid principle)</p>
                                    </div>
                                    <div className="check-box">
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                        <p>Teaser deck</p>
                                    </div>
                                    <div className="check-box">
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                        <p>Customized financial model &amp; valuation</p>
                                    </div>
                                    <div className="check-box">
                                    <ImgLoader src={CheckIcon} width={32} height={32} alt="check" />
                                        <p>Additional iteration</p>
                                    </div>
                                    <button>Get started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}