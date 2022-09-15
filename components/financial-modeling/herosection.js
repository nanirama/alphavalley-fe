import ImgLoader from '../Image'

import Financialhero from "../../assets/images/pitchdeckbanner.png"

export default function Herosection() {

    return (
        <>

            <div className="header-section">
                <div className="container">
                    <div className="header-box">
                        <div className="content-box">
                            <h1>Financial Models for Startups</h1>
                            <p>AlphaValley Advisors develop bullet-proof financial models for startups looking to raise funds and for businesses that want to analyze their financial.</p>
                            <button className="btn">Contact us</button>
                        </div>
                        <div className="image-box">
                            <ImgLoader src={Financialhero} alt="Cards" className="banner-image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
