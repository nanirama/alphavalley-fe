import { useState } from "react"

import Link from 'next/link'
import ImgLoader from './Image'
import CTABtn from './Elements/CTABtn'

import Logo from "../assets/images/logo.png"
import Icon1 from "../assets/images/menuicon1.png"
import Icon2 from "../assets/images/menuicon2.png"
import Icon3 from "../assets/images/menuicon3.png"
import Arrow from "../assets/images/arrow.png"


export default function Header() {
   const [isNavExpanded, setIsNavExpanded] = useState(false)

   return (
      <>
      <div className="header">
         <div className="container">
            <div className="navigation position-relative">
               <div className="logo">
                  <Link href="/"><a><ImgLoader src={Logo} width={146} height={38} alt="Logo" /></a></Link>
               </div>
               <button
                     className="hamburger"
                     onClick={() => {
                        setIsNavExpanded(!isNavExpanded)
                     }}
                  >
                     {isNavExpanded ? (
                        <svg width="24" height="24" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" /></svg>

                     ) : (
                        <svg width="24" height="24" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fillRule="nonzero" /></svg>

                     )}
                  </button>
                  <div
                     className={
                        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                     }
                  >
               <div className="nav-menu">
                  <div className="header-link">
                     <div className="menu false">
                        <div className="main-menu gap-2"><a >Service</a><ImgLoader src={Arrow} width={20} height={20} alt="arrow" />
                        </div>
                        <div className="sub-menu">
                           <div className="container">
                              <div className="row">
                                 <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <div className="sections">
                                          <ImgLoader src={Icon1} width={22} height={22} alt="icon" />
                                          <div className="section-content">
                                             <Link href="/pitch-deck"><a><h6>Investor Pitch Deck</h6>
                                             <p>Analyze conversion rates and improve your sales.</p></a></Link>
                                          </div>
                                       </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <div className="sections">
                                          <ImgLoader src={Icon2} width={22} height={22} alt="icon" />
                                          <div className="section-content">
                                          <Link href="/financial-modelling"><a><h6>Financial Modelling</h6>
                                             <p>Measure active usage and target areas of improvement.</p>
                                             </a></Link>
                                          </div>
                                       </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <div className="sections">
                                          <ImgLoader src={Icon3} width={22} height={22} alt="icon" />
                                          <div className="section-content">
                                          <Link href="/pitch-deck-design"><a><h6>Pitch Deck Design</h6>
                                             <p>Find retention drivers and make your customers smile.</p></a></Link>
                                          </div>
                                       </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <div className="sections">
                                          <ImgLoader src={Icon3} width={22} height={22} alt="icon" />
                                          <div className="section-content">
                                             <h6>Business Plan <span>Coming soon!</span></h6>
                                             <p>Find retention drivers and make your customers smile.</p>
                                          </div>
                                       </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <div className="sections">
                                          <ImgLoader src={Icon3} width={22} height={22} alt="icon" />
                                          <div className="section-content">
                                             <h6>Business Valuation <span>Coming soon!</span></h6>
                                             <p>Find retention drivers and make your customers smile.</p>
                                          </div>
                                       </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <div className="sections">
                                          <ImgLoader src={Icon3} width={22} height={22} alt="icon" />
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
                     <div className="menu false">
                        <div className="main-menu gap-2"><a>Resources</a><ImgLoader src={Arrow} width={20} height={20} alt="arrow" /></div>
                        <div className="sub-menu">
                           <div className="container">
                              <div className="row">
                                 <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <div className="sections">
                                          <ImgLoader src={Icon3} width={22} height={22} alt="icon" />
                                          <div className="section-content">
                                          <Link href="/"><a><h6>About Us</h6>
                                             <p>Find retention drivers and make your customers smile.</p></a></Link>
                                          </div>
                                       </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                       <div className="sections">
                                          <ImgLoader src={Icon3} width={22} height={22} alt="icon" />
                                          <div className="section-content">
                                          <Link href="/blog"><a><h6>Blog</h6>
                                             <p>Find retention drivers and make your customers smile.</p></a></Link>
                                          </div>
                                       </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                 <Link href="/"><a>
                                       <div className="sections">
                                          <ImgLoader src={Icon3} width={22} height={22} alt="icon" />
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
                                          <ImgLoader src={Icon3} width={22} height={22} alt="icon" />
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
                                          <ImgLoader src={Icon3} width={22} height={22} alt="icon" />
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
                                          <ImgLoader src={Icon3} width={22} height={22} alt="icon" />
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
                     <div className="menu false">
                        <div className="main-menu gap-2"><Link href="/"><a>Verticals</a></Link><ImgLoader src={Arrow} width={20} height={20} alt="arrow" /></div>
                        <div className="sub-menu">
                           <div className="container"><span className="tags">Coming soon!</span></div>
                        </div>
                     </div>
                     <div className="menu false">
                        <div className="main-menu gap-2"><Link href="/"><a>Portfolio</a></Link><ImgLoader src={Arrow} width={20} height={20} alt="arrow" /></div>
                        <div className="sub-menu">
                           <div className="container"><span className="tags">Coming soon!</span></div>
                        </div>
                     </div>
                     <div className="menu">
                        <div className="main-menu"><Link href="/pricing"><a>Pricing</a></Link></div>
                     </div>
                  </div>
                  <div className="header-button">
                     <CTABtn label="Contact us"/>
                  </div>
               </div>

               </div>
               {/* <div className="menu-toggle " id="mobile-menu">
                  <span className="bar"></span><span className="bar"></span>
                  <span className="bar"></span>
               </div>  */}

             



            </div>
         </div>
      </div>
</>
   )
}

