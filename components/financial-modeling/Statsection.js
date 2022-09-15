import ImgLoader from '../Image'

import Statimg from "../../assets/images/stat-image.png"


export default function StatSection() {

    return (
        <>

            <div class="stat-section">
                <div class="container">
                    <div class="heading">
                        <span class="title">WHY ALPHAVALLEY?</span>
                        <h1>We’re committed to delivering value to SMBs and startups</h1>
                        <span class="s-text">We don’t have </span>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="row stat-item">
                                <div class="col-md-6 col-sm-6 col-12 item">
                                    <h1>$100M+</h1>
                                    <span>Funds raised by clients</span>
                                </div>
                                <div class="col-md-6 col-sm-6 col-12 item">
                                    <h1>5000+</h1>
                                    <span>Slides crafted</span>
                                </div>
                                <div class="col-md-6 col-sm-6 col-12 item">
                                    <h1>92%</h1>
                                    <span>Client satisfaction score</span>
                                </div>
                                <div class="col-md-6 col-sm-6 col-12 item">
                                    <h1>4.8</h1>
                                    <span>Average rating</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                        <ImgLoader src={Statimg} alt="Cards" />
                       
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}