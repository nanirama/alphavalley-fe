import ImgLoader from '../Image'

import Statimg from "../../assets/images/stat-image.png"


export default function StatSection() {

    return (
        <>

            <div className="stat-section">
                <div className="container">
                    <div className="heading">
                        <span className="title">WHY ALPHAVALLEY?</span>
                        <h1>We’re committed to delivering value to SMBs and startups</h1>
                        <span className="s-text">We have </span>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="row stat-item">
                                <div className="col-md-6 col-sm-6 col-12 item">
                                    <h1>$100M+</h1>
                                    <span>Funds raised by clients</span>
                                </div>
                                <div className="col-md-6 col-sm-6 col-12 item">
                                    <h1>5000+</h1>
                                    <span>Slides crafted</span>
                                </div>
                                <div className="col-md-6 col-sm-6 col-12 item">
                                    <h1>92%</h1>
                                    <span>Client satisfaction score</span>
                                </div>
                                <div className="col-md-6 col-sm-6 col-12 item">
                                    <h1>4.8</h1>
                                    <span>Average rating</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 alphimg">
                            <ImgLoader src={Statimg} alt="Cards" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}