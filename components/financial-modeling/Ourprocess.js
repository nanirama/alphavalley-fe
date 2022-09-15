import ImgLoader from '../Image'

import StatImag from "../../assets/images/stat-image.png"
import Financialcheck from "../../assets/images/financialcheck.png"


export default function OurProcess() {

    return (
        <>
            <div className="our-section">
                <div className="container">
                    <div className="heading">
                        <span>Our process</span>
                        <h1>We aim to follow the best practices of top funded startups</h1>
                        <p>We create impactful pitch decks by following a robust process.</p>
                    </div>
                    <div className="row process-line">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="content-box">
                                <div className="content-icons d-flex justify-content-center align-items-center rounded-pill">
                                    <div className="inner-box d-flex justify-content-center align-items-center rounded-pill">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 491.52 491.52" fill="#444ce7"><path d="M491.52 419.84V61.44h-82.513L378.88 24.85l-30.72 37.31v183.6h61.44V81.92h61.44v256H20.48v-256h61.44v184.32H61.44v20.48h368.64v-20.48h-102.4V0H81.92v61.44H0v358.4h153.6v51.2h-40.96v20.48h266.24v-20.48h-40.96v-51.2h153.6zm-102.4-194.56h-20.48V204.8h20.48v20.48zm0-40.96h-20.48V102.4h20.48v81.92zm0-102.4h-20.48V69.5l10.24-12.43 10.24 12.43v12.42zM102.4 20.48h204.8v245.76H102.4V20.48zm215.04 450.56H174.08v-51.2h143.36v51.2zM20.48 399.36V358.4h450.56v40.96H20.48z" /><path d="M122.88 40.96V153.6h163.84V40.96H122.88zm118.737 20.48L204.8 85.109 167.982 61.44h73.635zm-98.257 8.514 42.507 27.326-42.507 27.326V69.954zm24.622 63.166 36.818-23.669 36.818 23.669h-73.636zm98.258-8.514L223.733 97.28l42.507-27.326v54.652zM125.952 184.32h157.696v20.48H125.952zM159.744 225.28h90.122v20.48h-90.122z" /></svg>
                                    </div>
                                </div>
                                <h4>Clear, Concise, and Consistent Writing</h4>
                                <p>Pitch decks of top funded startups have exceptional clarity and consistency. We strive to instil the same qualities in our decks.</p>
                                <div className="key-points">
                                    <div className="key-point">
                                        <ImgLoader src={Financialcheck} alt="Cards" />
                                        <span>Follow pyramid principle for effective writing</span></div>
                                    <div className="key-point">
                                        <ImgLoader src={Financialcheck} alt="Cards" />
                                        <span>Maintain brevity - simple writing, avoid jargon</span></div>
                                    <div className="key-point">
                                        <ImgLoader src={Financialcheck} alt="Cards" />
                                        <span>Focus on the big picture, yet cover crucial details</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="image">
                                <ImgLoader src={StatImag} alt="Cards" className="banner-image" />
                            </div>
                        </div>
                    </div>
                    <div className="row process-line reverse">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="image">
                                <ImgLoader src={StatImag} alt="Cards" className="banner-image" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="content-box">
                                <div className="content-icons d-flex justify-content-center align-items-center rounded-pill">
                                    <div className="inner-box d-flex justify-content-center align-items-center rounded-pill">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 491.52 491.52" fill="#444ce7"><path d="M491.52 419.84V61.44h-82.513L378.88 24.85l-30.72 37.31v183.6h61.44V81.92h61.44v256H20.48v-256h61.44v184.32H61.44v20.48h368.64v-20.48h-102.4V0H81.92v61.44H0v358.4h153.6v51.2h-40.96v20.48h266.24v-20.48h-40.96v-51.2h153.6zm-102.4-194.56h-20.48V204.8h20.48v20.48zm0-40.96h-20.48V102.4h20.48v81.92zm0-102.4h-20.48V69.5l10.24-12.43 10.24 12.43v12.42zM102.4 20.48h204.8v245.76H102.4V20.48zm215.04 450.56H174.08v-51.2h143.36v51.2zM20.48 399.36V358.4h450.56v40.96H20.48z" /><path d="M122.88 40.96V153.6h163.84V40.96H122.88zm118.737 20.48L204.8 85.109 167.982 61.44h73.635zm-98.257 8.514 42.507 27.326-42.507 27.326V69.954zm24.622 63.166 36.818-23.669 36.818 23.669h-73.636zm98.258-8.514L223.733 97.28l42.507-27.326v54.652zM125.952 184.32h157.696v20.48H125.952zM159.744 225.28h90.122v20.48h-90.122z" /></svg>
                                    </div>
                                </div>
                                <h4>Meticulous Research </h4>
                                <p>We dig deep to learn important insights about the existing business models and market landscape.</p>
                                <div className="key-points">
                                    <div className="key-point">
                                        <ImgLoader src={Financialcheck} alt="Cards" />
                                        <span>5W and 1H analysis</span></div>
                                    <div className="key-point">
                                        <ImgLoader src={Financialcheck} alt="Cards" />
                                        <span>Focus on signal, remove the noise</span></div>
                                    <div className="key-point">
                                        <ImgLoader src={Financialcheck} alt="Cards" />
                                        <span>Use data from reliable sources</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row process-line">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="content-box">
                                <div className="content-icons d-flex justify-content-center align-items-center rounded-pill">
                                    <div className="inner-box d-flex justify-content-center align-items-center rounded-pill">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 491.52 491.52" fill="#444ce7"><path d="M491.52 419.84V61.44h-82.513L378.88 24.85l-30.72 37.31v183.6h61.44V81.92h61.44v256H20.48v-256h61.44v184.32H61.44v20.48h368.64v-20.48h-102.4V0H81.92v61.44H0v358.4h153.6v51.2h-40.96v20.48h266.24v-20.48h-40.96v-51.2h153.6zm-102.4-194.56h-20.48V204.8h20.48v20.48zm0-40.96h-20.48V102.4h20.48v81.92zm0-102.4h-20.48V69.5l10.24-12.43 10.24 12.43v12.42zM102.4 20.48h204.8v245.76H102.4V20.48zm215.04 450.56H174.08v-51.2h143.36v51.2zM20.48 399.36V358.4h450.56v40.96H20.48z" /><path d="M122.88 40.96V153.6h163.84V40.96H122.88zm118.737 20.48L204.8 85.109 167.982 61.44h73.635zm-98.257 8.514 42.507 27.326-42.507 27.326V69.954zm24.622 63.166 36.818-23.669 36.818 23.669h-73.636zm98.258-8.514L223.733 97.28l42.507-27.326v54.652zM125.952 184.32h157.696v20.48H125.952zM159.744 225.28h90.122v20.48h-90.122z" /></svg>
                                    </div>
                                </div>
                                <h4>Meaningful Design </h4>
                                <p>Designers at our firm are trained rigorously to create minimal yet meaningful designs.</p>
                                <div className="key-points">
                                    <div className="key-point">
                                        <ImgLoader src={Financialcheck} alt="Cards" />
                                        <span>Logical depiction of concepts and processes</span></div>
                                    <div className="key-point">
                                        <ImgLoader src={Financialcheck} alt="Cards" />
                                        <span>Charts and infographs over walls of text</span></div>
                                    <div className="key-point">
                                        <ImgLoader src={Financialcheck} alt="Cards" />
                                        <span>Minimalistic, professional design</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="image">
                                <ImgLoader src={StatImag} alt="Cards" className="banner-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}