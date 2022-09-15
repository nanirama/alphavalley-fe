import ImgLoader from '../Image'

import Financialhero from "../../assets/images/pitchdeckbanner.png"

export default function Herosection() {

    return (
        <>

            <div class="header-section">
                <div class="container">
                    <div class="header-box">
                        <div class="content-box">
                            <h1>Financial Models for Startups</h1>
                            <p>AlphaValley Advisors develop bullet-proof financial models for startups looking to raise funds and for businesses that want to analyze their financial.</p>
                            <button class="btn">Contact us</button>
                        </div>
                        <div class="image-box">
                            <ImgLoader src={Financialhero} alt="Cards" className="banner-image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
