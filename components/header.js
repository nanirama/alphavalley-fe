import Link from 'next/link'
import ImgLoader from './Image'

import Logo from "../assets/images/logo.png"
import Icon1 from "../assets/images/menuicon1.png"
import Icon2 from "../assets/images/menuicon2.png"
import Icon3 from "../assets/images/menuicon3.png"
import Arrow from "../assets/images/arrow.png"



export default function Header() {
   return (
      <div className="header">
         <div className="container">
            <div className="navigation">
               <div className="logo">
                  <Link href="/"><a><ImgLoader src={Logo} width={146} height={38} alt="Logo" /></a></Link>
               </div>
               <div className="nav-menu ">
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
                  <div className="header-button"><Link href="/contact"><a><button>Contact us</button></a></Link></div>
               </div>


               {/* <div className="menu-toggle " id="mobile-menu">
                  <span className="bar"></span><span className="bar"></span>
                  <span className="bar"></span>
               </div> */}

               {/* <div className="navbar navbar-default navbar-static-top" role="navigation">
                  <div className="container">
                     <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar collapse">
                           <span className="sr-only">Toggle navigation</span>
                           <span className="icon-bar"></span>
                           <span className="icon-bar"></span>
                        </button>
                     </div>
                     <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                           <button id="loginbutton" type="button" className="btn btn-primary narbar-btn"><i className="glyphicon glyphicon-log-in"></i>Login</button>
                           <button type="button" className="btn btn-success navbar-btn"><i className="glyphicon glyphicon-link"></i><a href="./register.jsp">Create account</a></button>
                        </ul>
                     </div>
                  </div>
               </div> */}


            </div>
         </div>
      </div>

   )
}

