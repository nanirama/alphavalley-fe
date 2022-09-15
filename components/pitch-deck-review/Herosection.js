import ImgLoader from '../Image'

import AVLogo from "../../assets/images/av-logo.png"

export default function Herosection() {

    return (

        <div className='home-usa'>
                <div className="header-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="header-left">
                                    <h1>Stunning, VC-grade Pitch Decks For <span>Busy Founders</span></h1>
                                    <p>Win over investors with a bullet proof investor deck. Crafted by a specialist team with proven experience.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12 form-box">
                                <div className="outer-box">
                                    <div className="inner-box">
                                    <ImgLoader src={AVLogo} alt="Cards" />
                                        <h6>Book Free Consultation</h6>
                                        <form>
                                            <div className="form-group"><label htmlFor="name">Name *</label><input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                            </div>
                                            <div className="form-group"><label htmlFor="email">Email *</label>
                                                <input type="email" className="form-control" id="email" placeholder="Enter your email" /></div>
                                            <div className="form-group"><button className="btn" type="submit">Book Now</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            )
}