import React, { useEffect, useState } from "react";
import Link from 'next/link'

import ImgLoader from './Image'
import CTABtn from './Elements/CTABtn'

import LogoSVG from "../assets/images/svg/site-logo.svg"
import Arrow from "../assets/images/svg/svg_arrow.svg"

import MenuIcon1 from "../assets/images/svg/investorpitchdeck.svg"
import MenuIcon2 from "../assets/images/svg/financialmodelling.svg"
import MenuIcon3 from "../assets/images/svg/pitchdeckdesign.svg"
import MenuIcon4 from "../assets/images/svg/businessplan.svg"
import MenuIcon5 from "../assets/images/svg/businessvaluation.svg"
import MenuIcon6 from "../assets/images/svg/investorconnect.svg"
import MenuIcon7 from "../assets/images/svg/aboutus.svg"
import MenuIcon8 from "../assets/images/svg/blog.svg"
import MenuIcon9 from "../assets/images/svg/guides.svg"
import MenuIcon10 from "../assets/images/svg/casestudies.svg"
import MenuIcon11 from "../assets/images/svg/termsofengagement.svg"
import MenuIcon12 from "../assets/images/svg/faq.svg"

export default function Header() {
   const [toggle, setToggle] = useState(false);
   const [activeSubMenu, setSubMenu] = useState("");

   useEffect(() => {
      window.addEventListener("resize", (event) => {
         if (window.innerWidth >= 991) {
            setToggle(false);
            setSubMenu("");
         }
      });
   }, []);

   return (
      <>
         <div className="header">
            <div className="container">
               <div className="navigation position-relative">
                  <div className="logo">
                     <Link href="/"><a><ImgLoader src={LogoSVG} width={200} height={68} alt="Logo" /></a></Link>
                  </div>

                  <div className={`nav-menu ${toggle ? "open" : ""}`}>
                     <div className="header-link">
                        <div className={`menu ${activeSubMenu === "service" && "open"}`}>
                           <div
                              className="main-menu"
                              onClick={() => {
                                 if (activeSubMenu === "service") {
                                    setSubMenu("");
                                 } else {
                                    setSubMenu("service");
                                 }
                              }}>
                              <a>Service</a>
                              <ImgLoader src={Arrow} width={40} height={40} alt="arrow" />
                           </div>
                           <div className="sub-menu">
                              <div className="container">
                                 <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <div className="sections">
                                          <ImgLoader src={MenuIcon1} width={22} height={22} alt="icon" />
                                          <div className="section-content">
                                             <Link href="/pitch-deck"><a><h6>Investor Pitch Deck</h6>
                                                <p>Analyze conversion rates and improve your sales.</p></a></Link>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <div className="sections">
                                          <ImgLoader src={MenuIcon2} width={30} height={22} alt="icon" />
                                          <div className="section-content">
                                             <Link href="/financial-modelling"><a><h6>Financial Modelling</h6>
                                                <p>Measure active usage and target areas of improvement.</p>
                                             </a>
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <div className="sections">
                                          <ImgLoader src={MenuIcon3} width={22} height={22} alt="icon" />
                                          <div className="section-content">
                                             <Link href="/pitch-deck-design"><a><h6>Pitch Deck Design</h6>
                                                <p>Find retention drivers and make your customers smile.</p></a></Link>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <div className="sections">
                                          <ImgLoader src={MenuIcon4} width={22} height={22} alt="icon" />
                                          <div className="section-content">
                                             <h6>Business Plan <span>Coming soon!</span></h6>
                                             <p>Find retention drivers and make your customers smile.</p>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <div className="sections">
                                          <ImgLoader src={MenuIcon5} width={22} height={22} alt="icon" />
                                          <div className="section-content">
                                             <h6>Business Valuation <span>Coming soon!</span></h6>
                                             <p>Find retention drivers and make your customers smile.</p>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <div className="sections">
                                          <ImgLoader src={MenuIcon6} width={22} height={22} alt="icon" />
                                          <div className="section-content">
                                             <h6>Investor Connect <span>Coming soon!</span></h6>
                                             <p>Find retention drivers and make your customers smile.</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className={`menu ${activeSubMenu === "about" && "open"}`}>
                           <div
                              className="main-menu"
                              onClick={() => {
                                 if (activeSubMenu === "about") {
                                    setSubMenu("");
                                 } else {
                                    setSubMenu("about");
                                 }
                              }}>
                              <a>Resources</a>
                              <ImgLoader src={Arrow} width={40} height={40} alt="arrow" />
                           </div>
                           <div className="sub-menu">
                              <div className="container">
                                 <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <div className="sections">
                                          <ImgLoader src={MenuIcon7} width={22} height={22} alt="icon" />
                                          <div className="section-content">
                                             <Link href="/"><a><h6>About Us</h6>
                                                <p>Find retention drivers and make your customers smile.</p></a></Link>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <div className="sections">
                                          <ImgLoader src={MenuIcon8} width={22} height={22} alt="icon" />
                                          <div className="section-content">
                                             <Link href="/blog"><a><h6>Blog</h6>
                                                <p>Find retention drivers and make your customers smile.</p></a></Link>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <Link href="/"><a>
                                          <div className="sections">
                                             <ImgLoader src={MenuIcon9} width={22} height={22} alt="icon" />
                                             <div className="section-content">
                                                <h6>Guides <span>Coming soon!</span></h6>
                                                <p>Find retention drivers and make your customers smile.</p>
                                             </div>
                                          </div>
                                       </a></Link>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <Link href="/casestudy/"><a>
                                          <div className="sections">
                                             <ImgLoader src={MenuIcon10} width={22} height={22} alt="icon" />
                                             <div className="section-content">
                                                <h6>Case Studies</h6>
                                                <p>Find retention drivers and make your customers smile.</p>
                                             </div>
                                          </div>
                                       </a></Link>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <Link href="/term-condition"><a>
                                          <div className="sections">
                                             <ImgLoader src={MenuIcon11} width={22} height={22} alt="icon" />
                                             <div className="section-content">
                                                <h6>Terms of Engagement</h6>
                                                <p>Find retention drivers and make your customers smile.</p>
                                             </div>
                                          </div>
                                       </a>
                                       </Link>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <Link href="/faq"><a>
                                          <div className="sections">
                                             <ImgLoader src={MenuIcon12} width={22} height={22} alt="icon" />
                                             <div className="section-content">
                                                <h6>FAQs</h6>
                                                <p>Find retention drivers and make your customers smile.</p>
                                             </div>
                                          </div>
                                       </a>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div
                           className={`menu ${activeSubMenu === "verticals" && "open"}`}>
                           <div
                              className="main-menu"
                              onClick={() => {
                                 if (activeSubMenu === "verticals") {
                                    setSubMenu("");
                                 } else {
                                    setSubMenu("verticals");
                                 }
                              }}>
                              <a>Verticals</a>
                              <ImgLoader src={Arrow} width={40} height={40} alt="arrow" />
                           </div>
                           <div className="sub-menu">
                              <div className="container">
                                 <span className="tags">Coming soon!</span>
                              </div>
                           </div>
                        </div>
                        <div
                           className={`menu ${activeSubMenu === "portfolio" && "open"}`}>
                           <div
                              className="main-menu"
                              onClick={() => {
                                 if (activeSubMenu === "portfolio") {
                                    setSubMenu("");
                                 } else {
                                    setSubMenu("portfolio");
                                 }
                              }}>
                              <a>Portfolio</a>
                              <ImgLoader src={Arrow} width={40} height={40} alt="arrow" />
                           </div>
                           <div className="sub-menu">
                              <div className="container">
                                 <span className="tags">Coming soon!</span>
                              </div>
                           </div>
                        </div>
                        <div className="menu">
                           <div className="main-menu"><Link href="/pricing"><a>Pricing</a></Link></div>
                        </div>
                     </div>
                     <div className="header-button">
                        <CTABtn label="Contact us" />
                     </div>
                  </div>
                  <div
                     onClick={() => setToggle(!toggle)}
                     className={`menu-toggle ${toggle ? "open" : ""}`}
                     id="mobile-menu">
                     <span className="bar"></span>
                     <span className="bar"></span>
                     <span className="bar"></span>
                  </div>

               </div>

            </div>




         </div>
         {/* </div> */}


      </>
   )
}

