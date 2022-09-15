import ImgLoader from '../Image'

import Financialhero from "../../assets/images/pitchdeckbanner.png"

export default function Herosection() {

    return (
        <>

            <div className="header-section">
                <div className="container">
                    <div className="header-box">
                        <div className="content-box">
                            <h1>Investor Pitch Deck Design Service for Startups That Don&apos;t Settle For Less</h1>
                            <p>It only takes 1.3 milliseconds for the audience to identify the content of your slide and start emotionally processing it.</p>
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
