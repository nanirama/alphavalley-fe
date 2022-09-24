import React, { useEffect, useState } from "react";
import ImgLoader from '../Image'
import HalfMockbook from "../../assets/images/half-macbook.3.png"
import FullMockbook from "../../assets/images/full-macbook.png"

import CompellingStory from "../../assets/images/compelling-story.jpg";
import ProfessionalDesign from "../../assets/images/professional-design.jpg";
import InvestmentThesis from "../../assets/images/investment-thesis.jpg";

export default function PitchDeckSection() {
    const [offeringImage, setOfferingImage] = useState(CompellingStory);
    return (
        <div className="pitch-deck-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
                        <div className="pitch-header">
                            <span>Offering</span>
                            <h2>Intelligent Pitch Deck Service</h2>
                            <p>
                                Leave the heavy lifting of IM development to us, while you
                                focus on what matters the most – customers and product!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="content">
                <div
                  className="content-box"
                  onMouseEnter={() => setOfferingImage(CompellingStory)}
                  onMouseLeave={() => setOfferingImage(CompellingStory)}>
                  <h6>Compelling Story</h6>
                  <p>
                    We craft a compelling narrative to make your pitch deck
                    stand out.
                  </p>
                </div>
                <div
                  className="content-box"
                  onMouseEnter={() => setOfferingImage(InvestmentThesis)}
                  onMouseLeave={() => setOfferingImage(CompellingStory)}>
                  <h6>Strong Investment Thesis</h6>
                  <p>
                    Strong business investment case backed by unique insights.
                  </p>
                </div>
                <div
                  className="content-box"
                  onMouseEnter={() => setOfferingImage(ProfessionalDesign)}
                  onMouseLeave={() => setOfferingImage(CompellingStory)}>
                  <h6>Professional Design</h6>
                  <p>
                    Professional, minimalistic design that leaves a lasting
                    impression.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <ImgLoader className="offering-image" src={offeringImage} alt="story" />
            </div>
          </div>
            </div>
        </div>
            )

}



            {/* <div className="pitch-deck-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="pitch-header">
                                <span>Offering</span>
                                <h2>Intelligent Pitch Deck Service</h2>
                                <p>Leave the heavy lifting of IM development to us, while you focus on what matters the most – customers and product!</p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="content-box">
                            <h6>Compelling Story</h6>
                            <p>We craft a compelling narrative to make your deck stand out.</p>
                        </div>
                        <div className="content-box">
                            <h6>Strong Investment Thesis</h6>
                            <p>Strong business investment case backed by unique insights.</p>
                        </div>
                        <div className="content-box">
                            <h6>Professional Design</h6>
                            <p>Professional, minimalistic design that leaves a lasting impression.</p>
                        </div>
                    </div>
                </div>

                <div className="image col-lg-6 col-md-12 col-sm-12 col-12 pitch-deckimg">
                    <div className='show'>
                        <ImgLoader src={HalfMockbook} width={688} height={560} alt="Cards" />
                    </div>
                    <div className='hide'>
                        <ImgLoader src={FullMockbook} width={688} height={450} alt="Cards" />
                    </div>
                </div>
            </div> */}