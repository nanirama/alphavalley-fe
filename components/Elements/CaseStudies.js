import ImgLoader from '../Image'

import CasestudyImg1 from "../../assets/images/case-study1.png"
import CasestudyImg2 from "../../assets/images/case-study2.png"
import CasestudyImg3 from "../../assets/images/case-study3.png"
import Casestudyarw from "../../assets/images/casestudy-arw.png"



export default function CaseStudiessection() {

    return (
        <div className="case-study-section">
            <div className="container">
                <div className="heading">
                    <h1>Case Studies</h1>
                    <p>Select case studies of our contribution to the startup ecosystem.</p>
                </div>
                <div className="case-study">
                    <div className="card col-lg-4 col-md-6 col-sm-12 col-12">
                        <ImgLoader src={CasestudyImg1} width={384} height={240} alt="Case study" />
                        <span>Olivia Rhye • 20 Jan 2022</span>
                        <div className="heading">
                            <h3>UX review presentations</h3>
                            <ImgLoader src={Casestudyarw} width={24} height={24} alt="link" />
                        </div>
                        <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                        <div className="tags">

                            <span className='tagsbg'>Design</span>
                            <span className='tagsbg'>Research</span>
                            <span className='tagsbg2'>Presentation</span></div>
                    </div>
                    <div className="card col-lg-4 col-md-6 col-sm-12 col-12">
                        <ImgLoader src={CasestudyImg2} width={384} height={240} alt="Case study" />
                        <span>Olivia Rhye • 20 Jan 2022</span>
                        <div className="heading">
                            <h3>UX review presentations</h3>
                            <ImgLoader src={Casestudyarw} width={24} height={24} alt="link" />
                        </div>
                        <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                        <div className="tags">

                            <span className='tagsbg'>Design</span>
                            <span className='tagsbg'>Research</span>
                            <span className='tagsbg2'>Presentation</span></div>
                    </div>
                    <div className="card col-lg-4 col-md-6 col-sm-12 col-12">
                        <ImgLoader src={CasestudyImg3} width={384} height={240} alt="Case study" />
                        <span>Olivia Rhye • 20 Jan 2022</span>
                        <div className="heading">
                            <h3>UX review presentations</h3>
                            <ImgLoader src={Casestudyarw} width={24} height={24} alt="link" />
                        </div>
                        <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                        <div className="tags">

                            <span className='tagsbg'>Design</span>
                            <span className='tagsbg'>Research</span>
                            <span className='tagsbg2'>Presentation</span></div>
                    </div>



                
                </div>
            </div>
        </div>


    )
}
