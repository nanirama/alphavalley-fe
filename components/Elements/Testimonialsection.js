import ImgLoader from '../Image'


import TestAvatar from "../../assets/images/test-avatar.png"
import TestImg1 from "../../assets/images/test-img2.png"
import TestImg2 from "../../assets/images/test-img1.png"

import TestImg3 from "../../assets/images/test-img3.png"

import TestImg4 from "../../assets/images/test-img4.png"

import TestImg5 from "../../assets/images/test-img5.png"


export default function Testimonialsection() {

    return (

        <div className="testimonial-section">
            <div className="container">
                <h3>Untitled has saved us thousands of hours of work. We’re able to spin up projects and features faster.</h3>
                <div className="user">
                <ImgLoader src={TestAvatar} width={64} height={64} alt="Avatar" />
                    <h6>Koray Okumus</h6>
                    <p>UX Designer, Circooles</p>
                </div>
                <div id="companies">
                    <div className="testcompanies">
                        <ImgLoader src={TestImg1} width={130} height={40} alt="Logo" />
                        <ImgLoader src={TestImg2} width={130} height={40} alt="Logo" />
                        <ImgLoader src={TestImg3} width={130} height={40} alt="Logo" />
                        <ImgLoader src={TestImg4} width={130} height={40} alt="Logo" />
                        <ImgLoader src={TestImg5} width={130} height={40} alt="Logo" />
                    </div>
                    {/* <div className="tns-outer" id="tns1-ow">
                        <div className="tns-controls" aria-label="Carousel Navigation" tabindex="0" style="display: none;"><button type="button" data-controls="prev" tabindex="-1" aria-controls="tns1">prev</button><button type="button" data-controls="next" tabindex="-1" aria-controls="tns1">next</button></div>
                        <div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">1 to 5</span>  of 5</div>
                        <div id="tns1-mw" className="tns-ovh">
                            <div className="tns-inner" id="tns1-iw">
                                <div className="  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns1" style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);">
                                    <div className="tns-item tns-slide-active" id="tns1-item0">
                                        <img src="" alt="Company" /></div>
                                    <div className="tns-item tns-slide-active" id="tns1-item1">
                                        <img src="" alt="Company" /></div>
                                    <div className="tns-item tns-slide-active" id="tns1-item2">
                                        <img src="" alt="Company" /></div>
                                    <div className="tns-item tns-slide-active" id="tns1-item3">
                                        <img src="" alt="Company" /></div>
                                    <div className="tns-item tns-slide-active" id="tns1-item4">
                                        <img src="" alt="Company" /></div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    )

}