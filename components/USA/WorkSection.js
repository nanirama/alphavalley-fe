import ImgLoader from '../Image'

import WorkImg1 from "../../assets/images/work-img1.png"
import WorkImg2 from "../../assets/images/work-img2.png"
import WorkImg3 from "../../assets/images/work-img3.png"
import WorkImg4 from "../../assets/images/work-img4.png"


export default function Worksection() {

    return (

         <div className="work-section">
                <div className="container">
                    <div className="heading">
                        <h3>How does it work?</h3>
                        <p>Investor pitch deck consulting process at AlphaValley</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="box">
                            <ImgLoader src={WorkImg1} width={48} height={48} alt="Work" />
                                <div className="content">
                                    <h6>Project kick-off</h6>
                                    <p>Agreement on terms of engagement.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="box">
                            <ImgLoader src={WorkImg2} width={48} height={48} alt="Work" />
                                <div className="content">
                                    <h6>Immersion</h6>
                                    <p>Expectation setting and questionnaire discussion with the founder(s).</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="box">
                            <ImgLoader src={WorkImg3} width={48} height={48} alt="Work" />
                                <div className="content">
                                    <h6>Pitch deck creation</h6>
                                    <p>AlphaValley team crafts the deck, shares the interim deliverable with you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="box">
                            <ImgLoader src={WorkImg4} width={48} height={48} alt="Work" />
                                <div className="content">
                                    <h6>Iterations</h6>
                                    <p>We collaborate closely with the founders to fine tune the final deliverable.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 


    )

}