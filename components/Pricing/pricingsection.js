import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'

import ImgLoader from '../../components/Image'
import CTABtn from '../Elements/CTABtn'

import PricingQtn from "../../assets/images/pricing-qtn.png"
import PricingCheck from "../../assets/images/pricing-check.png"


export default function Pricingsection() {
    const [priceSec, setPriceSec] = useState('US');
    return (
        <>
            <div className="pricing">
                <div className="heading">
                    <div className="container">
                        <span>Pricing</span>
                        <h1>Compare our plans and find yours</h1>
                        <p>Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
                        <div className="button-group">
                            <div className="buttons">
                                <div className="btn-box">
                                    <button className={priceSec === 'US' ? 'active' : 'inactive'} onClick={() => setPriceSec('US')}>Monthly billing</button>
                                    <button className={priceSec === 'IND' ? 'active' : 'inactive'} onClick={() => setPriceSec('IND')}>Annual billing</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="price-table">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12 col-12 dummy">
                                <div className="top">
                                    <div className="price-box">
                                        <div className="title">
                                            <h6>Basic</h6>
                                        </div>
                                        <hr />
                                        <div className="content-box">
                                            <h1>$10 <span>per month</span></h1>
                                            <p>Basic features for up to 10 employees with everything you need.</p>
                                        </div>
                                        <div className="buy-button">
                                            <CTABtn label="Get Started" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="p-box">
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Pricing
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Content and Story</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Existing deck required?
                                                    &nbsp;&nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                            </div>
                                            <div>
                                                <p className="table-title">Ideation / Brainstorming
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                            </div>
                                            <div>
                                                <p className="table-title">Story boarding
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                            </div>
                                            <div>
                                                <p className="table-title">Content cleanup
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                            </div>
                                            <div>
                                                <p className="table-title">Conciseness
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                            </div>
                                            <div className="offering">
                                                <p className="table-title">Advanced content development (pyramid principle etc.)
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                            </div>
                                            <div>
                                                <p className="table-title">VC-questionnaire pack
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                            </div>
                                            <div>
                                                <p className="table-title">Teaser Deck
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                            </div>
                                            <div>
                                                <p className="table-title">Content Iteration
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Pitch Deck Design</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Design Package
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                            </div>
                                            <div>
                                                <p className="table-title">Design iterations
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Market Insights</span>
                                        <div className="boxes">
                                            <div className="offering">
                                                <p className="table-title">Market overview - size and growth [secondary sources]
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                            </div>
                                            <div>
                                                <p className="table-title">Competition overview
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                            </div>
                                            <div>
                                                <p className="table-title">Market analysis [5 page insights]
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                            </div>
                                            <div>
                                                <p className="table-title">&nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Financial Model</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Standard template
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                            </div>
                                            <div>
                                                <p className="table-title">Customized vertical-specific template
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                            </div>
                                            <div className="offering">
                                                <p className="table-title">Monthly cash flow forecast (24 months)
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                            </div>
                                            <div>
                                                <p className="table-title">Pro-forma statements &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                            </div>
                                            <div>
                                                <p className="table-title">Relevant Valuation Method &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Timeline</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Business days &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                            </div>
                                            <div>
                                                <p className="table-title">Milestone payment &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                            </div>
                                            <div>
                                                <p className="table-title">Call with Senior consultant [hours] &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Add on / rush</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Create a deck from scratch &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                            </div>
                                            <div>
                                                <p className="table-title">Delivery within 1 week &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                            </div>
                                            <div>
                                                <p className="table-title">Delivery within 2 weeks &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="buy-button">
                                    <CTABtn label="Get Started" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 col-12 valid">
                                <div className="top">
                                    <div className="price-box">
                                        <div className="title">
                                            <h6>Seed</h6>
                                            <span>Popular</span>
                                        </div>
                                        <hr />
                                        <div className="content-box">
                                            <h1>$1,290 <span>per month</span></h1>
                                            <p>Revamp your current deck.</p>
                                        </div>
                                        <div className="buy-button">
                                            <CTABtn label="Get Started" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="p-box">
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Pricing
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">$1,290</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Content and Story</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Existing deck required?
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Ideation / Brainstorming
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Story boarding
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Content cleanup
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Conciseness
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div className="offering">
                                                <p className="table-title">Advanced content development (pyramid principle etc.)
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">VC-questionnaire pack
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Teaser Deck
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Content Iteration
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">1</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Pitch Deck Design</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Design Package
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">Silver</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Design iterations
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">1</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Market Insights</span>
                                        <div className="boxes">
                                            <div className="offering">
                                                <p className="table-title">Market overview - size and growth [secondary sources]
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Competition overview
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Market analysis [5 page insights]
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Fundraising outlook
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">-</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Financial Model</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Standard template
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Customized vertical-specific template
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div className="offering">
                                                <p className="table-title">Monthly cash flow forecast (24 months)
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Pro-forma statements
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Relevant Valuation Method
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">-</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Timeline</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Business days
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">10</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Milestone payment
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">100% Upfront</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Call with Senior consultant [hours]
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">0.5</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Add on / rush</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Create a deck from scratch
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">$300</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Delivery within 1 week
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">$300</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Delivery within 2 weeks
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">NA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="buy-button">
                                    <CTABtn label="Get Started" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 col-12 valid">
                                <div className="top">
                                    <div className="price-box">
                                        <div className="title">
                                            <h6>Sprout</h6>
                                        </div>
                                        <hr />
                                        <div className="content-box">
                                            <h1>$2,490 <span>per month</span></h1>
                                            <p>Build investor-ready deck from scratch.</p>
                                        </div>
                                        <div className="buy-button">
                                            <CTABtn label="Get Started" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="p-box">
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Pricing &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">$2,490</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Content and Story</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Existing deck required?
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Ideation / Brainstorming &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Story boarding &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Content cleanup &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Conciseness &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div className="offering">
                                                <p className="table-title">Advanced content development (pyramid principle etc.)
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">VC-questionnaire pack &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Teaser Deck &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Content Iteration &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">1</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Pitch Deck Design</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Design Package &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">Gold</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Design iterations &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">1</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Market Insights</span>
                                        <div className="boxes">
                                            <div className="offering">
                                                <p className="table-title">Market overview - size and growth [secondary sources]
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Competition overview &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Market analysis [5 page insights] &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Fundraising outlook &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">-</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Financial Model</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Standard template &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Customized vertical-specific template &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div className="offering">
                                                <p className="table-title">Monthly cash flow forecast (24 months)
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Pro-forma statements &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Relevant Valuation Method &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">-</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Timeline</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Business days &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">15</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Milestone payment &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">40% - 40% - 30%</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Call with Senior consultant [hours]
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Add on / rush</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Create a deck from scratch &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">NA</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Delivery within 1 week &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">$500</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Delivery within 2 weeks &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">$300</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="buy-button">
                                    <CTABtn label="Get Started" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 col-12 valid">
                                <div className="top">
                                    <div className="price-box">
                                        <div className="title">
                                            <h6>Sapling</h6>
                                        </div>
                                        <hr />
                                        <div className="content-box">
                                            <h1>$3,990 <span>per month</span></h1>
                                            <p>Build vc-grade deck for a startup with traction.</p>
                                        </div>
                                        <div className="buy-button">
                                            <CTABtn label="Get Started" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="p-box">
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Pricing
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">$3,990</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Content and Story</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Existing deck required?
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Ideation / Brainstorming
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Story boarding
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Content cleanup
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Conciseness
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div className="offering">
                                                <p className="table-title">Advanced content development (pyramid principle etc.)
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" />
                                                </p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">VC-questionnaire pack &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Teaser Deck &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Content Iteration &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Pitch Deck Design</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Design Package &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">Platinum</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Design iterations &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Market Insights</span>
                                        <div className="boxes">
                                            <div className="offering">
                                                <p className="table-title">Market overview - size and growth [secondary sources]
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Competition overview
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Market analysis [5 page insights]
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Fundraising outlook &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Financial Model</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Standard template &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">-</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Customized vertical-specific template
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div className="offering">
                                                <p className="table-title">Monthly cash flow forecast (24 months)
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Pro-forma statements &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                            <div>
                                                <p className="table-title">Relevant Valuation Method &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <ImgLoader src={PricingCheck} width={24} height={24} alt="Check" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Timeline</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Business days &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">20</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Milestone payment &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">40% - 40% - 30%</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Call with Senior consultant [hours]
                                                    &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">4</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-box">
                                        <span>Add on / rush</span>
                                        <div className="boxes">
                                            <div>
                                                <p className="table-title">Create a deck from scratch &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">NA</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Delivery within 1 week &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">NA</p>
                                            </div>
                                            <div>
                                                <p className="table-title">Delivery within 2 weeks &nbsp; <ImgLoader src={PricingQtn} width={16} height={16} alt="Help" /></p>
                                                <p className="table-value">$1000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="buy-button">
                                    <CTABtn label="Get Started" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}