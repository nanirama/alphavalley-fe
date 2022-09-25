import Link from 'next/link'
import ImgLoader from './Image'
import Logo from "../assets/images/logoicon.png"


import Icon4 from "../assets/images/svg/twitter-svg.svg"
import Icon5 from "../assets/images/svg/linkedin-svg.svg"
import Icon6 from "../assets/images/svg/facebook-svg.svg"



export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="description">
                                <div className="logo">
                                    <Link href="/"><a><ImgLoader src={Logo} width={32} height={32} alt="Logo" /></a></Link>

                                    <Link href="/"><a><h5 className='mb-0'>AlphaValley</h5></a></Link>
                                </div>
                                <p>AlphaValley Advisors is a leading pitch deck consultant. We make early-stage startups ready for VC funding. We also offer investment research, equity research, and financial modelling services to boutique and institutional investment managers and PE/VC firms.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="footer-box">
                                <p className="title">Services</p>
                                <div className="links">
                                    <Link href="/pitch-deck"><a>Investor Pitch Deck</a></Link>
                                    <Link href="/"><a>Financial Modelling</a></Link>
                                    <Link href="/"><a>Pitch Deck Design</a></Link>
                                    <Link href="/"><a>Business Plan <span>Coming soon!</span></a></Link>
                                    <Link href="/"><a>Business Valuation <span>Coming soon!</span></a></Link>
                                    <Link href="/"><a>Investor Connect <span>Coming soon!</span></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="footer-box">
                                <p className="title">Resources</p>
                                <div className="links">
                                    <Link href="/about-us"><a>About us</a></Link>
                                    <Link href="/blog"><a>Blog</a></Link>
                                    <Link href="/"><a>Guides <span>Coming soon!</span></a></Link>
                                    <Link href="/case-studies"><a>Case Studies</a></Link>
                                    <Link href="/term-condition"><a>Terms of Engagement</a></Link>
                                    <Link href="/faq"><a>FAQs</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="footer-box">
                                <Link href="/usa"><a><button>Pitch Deck USA</button></a></Link>
                                <Link href="/uae"><a><button>Pitch Deck UAE</button></a></Link>
                                <Link href="/"><a><button>Pitch Deck India</button></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-box">
                        <div className="text-box">
                            <p>© 2022 AlphaValley Advisors LLP. All rights reserved.</p>
                            <div className="policy-link">
                                <Link href="/cookie-policy"><a>Cookie Policy</a></Link>
                                <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
                            </div>
                        </div>
                        <div className="icons ">
                            <a className='mx-2' href="/" target="_blank" rel="noopener noreferrer">
                                <ImgLoader src={Icon4} width={20} height={20} alt="twitter-icon" />
                            </a>
                            <a className='mx-2' href="https://www.linkedin.com/company/alphavalleyco/" target="_blank" rel="noopener noreferrer">
                                <ImgLoader src={Icon5} width={20} height={20} alt="icon" />
                            </a>
                            <a className='mx-2' href="https://www.facebook.com/alphavalley" target="_blank" rel="noopener noreferrer">
                                <ImgLoader src={Icon6} width={20} height={20} alt="icon" />
                            </a>
                            {/* <a className='mx-2' href="/" target="_blank" rel="noopener noreferrer">
                                <ImgLoader src={Icon7} width={20} height={20} alt="icon" />
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}