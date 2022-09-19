import ImgLoader from '../Image'

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
                                    {/* <form>
                                        <div className="form-group"><label htmlFor="name">Name *</label><input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                        </div>
                                        <div className="form-group"><label htmlFor="email">Email *</label>
                                            <input type="email" className="form-control" id="email" placeholder="Enter your email" /></div>
                                        <div className="form-group"><button className="btn" type="submit">Book Now</button></div>
                                    </form> */}
                                    <iframe width='100%' height='590px' src='https://bigin.zoho.in/crm/WebFormServeServlet?rid=f1a1faee80712dc9c0d45324653a5bd0019c78f214dac8ce60f36a331804123cgid6cd952f3e5be67584d0644fe79b8ff8f467182910d36d1784d783e5c92f37855'></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
           
           
           
           
           
           
            
           
            </div>
    )
}
