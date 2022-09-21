import ImgLoader from '../Image'

import Img1 from "../../assets/images/service-img1.jpg"
import Img2 from "../../assets/images/service-img2.jpg"
import Img3 from "../../assets/images/service-img3.jpg"


import Icon1 from "../../assets/images/serviceicon1.png"
import Icon2 from "../../assets/images/serviceicon2.png"
import Icon3 from "../../assets/images/serviceicon3.png"

import Dots from "../../assets/images/lineimg.png"




export default function Servicesection() {
   return (
      <div className='service-section'>
         <div className="container">
            <div className="heading">
               <span>Services</span>
               <h1>Startup Fundraising Advisory Services</h1>
               <p>Our services are carefully aligned to the dynamic needs of PE/VC funds, investment managers, and startups looking for fundraising.</p>
            </div>
            <div className="contents">
               <div className="box right">
                  <div className="row">
                     <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="content">
                           <div className='content-icons'>
                              <div className="inner-box">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width={24} height={24} fill="#444ce7"><path d="M60 4H31V1a1 1 0 1 0-2 0v3H0v42h27.586L15.293 58.293a.999.999 0 1 0 1.414 1.414L29 47.414V57a1 1 0 1 0 2 0v-9.586l12.293 12.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L32.414 46H60V4zm-2 40H2V6h56v38z" /><path d="M36 42a1 1 0 0 0 1-1v-3a1 1 0 1 0-2 0v3a1 1 0 0 0 1 1zM40 33a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1zM44 35a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1zM48 28a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V29a1 1 0 0 0-1-1zM52 32a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0v-8a1 1 0 0 0-1-1zM8 38h10a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2zM8 42h15a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2zM39 15h8a1 1 0 1 0 0-2h-8a1 1 0 1 0 0 2zM51.3 13.29a.977.977 0 0 0-.3.71c0 .27.109.53.29.7.189.19.439.3.71.3.26 0 .52-.11.71-.29.18-.19.29-.45.29-.71s-.11-.521-.29-.71c-.38-.37-1.061-.36-1.41 0zM49 10h3a1 1 0 1 0 0-2h-3a1 1 0 1 0 0 2zM39 10h2a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2zM45 10c.27 0 .52-.11.71-.29.18-.19.29-.44.29-.71 0-.271-.11-.521-.29-.71-.37-.37-1.061-.37-1.42 0-.181.189-.29.439-.29.71 0 .27.109.52.29.71.189.18.439.29.71.29zM26.85 27.385a11.454 11.454 0 0 0 3.066-6.41l-9.47.006 6.404 6.404z" /><path d="M18.525 30.975a11.42 11.42 0 0 0 6.822-2.264l-7.637-7.733-.685-.003v-.919a51 51 0 0 0 .001-1.046l-.001-10.926c-5.633.739-10 5.559-10 11.391 0 6.34 5.16 11.5 11.5 11.5z" /><path d="M19.025 8v10.975H30C29.743 13.034 24.966 8.257 19.025 8z" /></svg>
                                 {/* <ImgLoader src={Icon1} width={56} height={56} alt="icon" /> */}
                              </div>
                           </div>
                           <h5>Investor Pitch Deck</h5>
                           <p>End-to-end investor pitch deck creation service for seed to series-A stage. We also craft stunning investor decks for demo day, accelerators, and startup competitions.</p>
                           <button className="btn">Learn more</button>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-12 col-sm-12 col-12 image">
                        <div className="outer-box">
                           <div className="inner-box">
                              <ImgLoader src={Img1}  alt="" /></div>
                           <div className='bottom-right'>
                              <ImgLoader src={Dots} width={298} height={408} alt="icon" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="box left">
                  <div className="row">
                     <div className="col-lg-6 col-md-12 col-sm-12 col-12 image">
                        <div className="outer-box">
                           <div className="inner-box">
                              <ImgLoader src={Img2}  alt="" /></div>
                           <div className='bottom-left'>
                              <ImgLoader src={Dots} width={298} height={408} alt="icon" />

                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="content">
                           <div className='content-icons'>
                              <div className="inner-box">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.5 295.5" width={24} height={24} fill="#444ce7"><path d="M113.164 127.086c-23.142 0-41.969 18.854-41.969 42.027 0 15.452 12.179 27.999 13.566 29.378 2.285 2.271 5.297 7.3 6.274 10.456l3.352 13.743a7.5 7.5 0 0 0 7.286 5.724h22.979a7.5 7.5 0 0 0 7.286-5.722l3.355-13.748c.973-3.147 3.984-8.178 6.272-10.453 1.388-1.379 13.564-13.927 13.564-29.378.002-23.174-18.824-42.027-41.965-42.027zm17.826 60.769c-4.134 4.111-8.489 11.422-10.131 17.004a8.028 8.028 0 0 0-.091.338l-2.006 8.218h-11.197l-2.004-8.216a6.097 6.097 0 0 0-.093-.346c-1.649-5.588-6.004-12.896-10.116-16.983-2.547-2.565-9.157-10.934-9.157-18.756 0-14.903 12.098-27.027 26.969-27.027 14.869 0 26.967 12.124 26.967 27.027 0 7.821-6.61 16.191-9.141 18.741z" /><path d="M212.163 0h-198a7.499 7.499 0 0 0-7.5 7.5V288c0 4.143 3.357 7.5 7.5 7.5h198c4.143 0 7.5-3.357 7.5-7.5V7.5c0-4.143-3.357-7.5-7.5-7.5zm-7.5 280.5h-183V15h183v265.5z" /><path d="M47.163 87.75h132c4.143 0 7.5-3.357 7.5-7.5V40.5c0-4.143-3.357-7.5-7.5-7.5h-132a7.499 7.499 0 0 0-7.5 7.5v39.75a7.5 7.5 0 0 0 7.5 7.5zm7.5-39.75h117v24.75h-117V48zM121.413 235.25h-16.5c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h16.5c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5zM113.427 254.75h-.527c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h.527c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM113.427 118.25c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-.527c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h.527zM75.927 123.75c0-4.143-3.357-7.5-7.5-7.5H67.9c-4.143 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h.527a7.5 7.5 0 0 0 7.5-7.5zM158.427 116.25h-.527c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h.527c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM175.427 152.75h-.527c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h.527c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM54.427 152.75H53.9c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h.527c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM237.664 225.442c0 1.164.271 2.313.792 3.355l18.086 36.173a7.502 7.502 0 0 0 13.416 0l18.087-36.173a7.503 7.503 0 0 0 .792-3.355V47.75c0-4.143-3.357-7.5-7.5-7.5h-36.173a7.499 7.499 0 0 0-7.5 7.5v177.692zm15-7.5V79.365h21.173v138.577h-21.173zM273.837 55.25v9.115h-21.173V55.25h21.173zM263.25 244.845l-5.951-11.902h11.902l-5.951 11.902z" /></svg>
                              </div>
                           </div>
                           {/* <ImgLoader src={Icon2} width={56} height={56} alt="icon" /> */}
                           <h5>Business Plan</h5>
                           <p>Looking to raise capital from banks or private financiers? Contact us. We offer professional business plan writing service for entrepreneurs who require bank loan or grants.</p>
                           <button className="btn">Learn more</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="box right">
                  <div className="row">
                     <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="content">
                           <div className='content-icons'>
                              <div className="inner-box">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511 511" width={24} height={24} fill="#444ce7"><path d="M39.5 103c1.97 0 3.91-.8 5.3-2.2 1.4-1.39 2.2-3.33 2.2-5.3s-.8-3.91-2.2-5.3c-1.39-1.4-3.32-2.2-5.3-2.2a7.51 7.51 0 0 0-7.5 7.5c0 1.97.8 3.91 2.2 5.3 1.39 1.4 3.33 2.2 5.3 2.2zM63.5 103a7.51 7.51 0 0 0 7.5-7.5c0-1.97-.8-3.91-2.2-5.3a7.528 7.528 0 0 0-5.3-2.2c-1.97 0-3.91.8-5.3 2.2-1.4 1.39-2.2 3.33-2.2 5.3s.8 3.91 2.2 5.3c1.39 1.4 3.33 2.2 5.3 2.2zM87.5 103c1.97 0 3.91-.8 5.3-2.2 1.4-1.39 2.2-3.33 2.2-5.3s-.8-3.91-2.2-5.3a7.528 7.528 0 0 0-5.3-2.2c-1.97 0-3.91.8-5.3 2.2-1.4 1.39-2.2 3.33-2.2 5.3s.8 3.91 2.2 5.3c1.39 1.4 3.33 2.2 5.3 2.2zM119.5 103h304a7.5 7.5 0 0 0 0-15h-304a7.5 7.5 0 0 0 0 15zM455.5 103h16a7.5 7.5 0 0 0 0-15h-16a7.5 7.5 0 0 0 0 15zM439.5 168h-144c-12.958 0-23.5 10.542-23.5 23.5v.5h-8.5c-12.958 0-23.5 10.542-23.5 23.5V280h-17v-24.5c0-12.958-10.542-23.5-23.5-23.5h-128C58.542 232 48 242.542 48 255.5v64c0 12.958 10.542 23.5 23.5 23.5h128c12.958 0 23.5-10.542 23.5-23.5V295h17v64.5c0 12.958 10.542 23.5 23.5 23.5h8.5v.5c0 12.958 10.542 23.5 23.5 23.5h144c12.958 0 23.5-10.542 23.5-23.5v-16c0-12.958-10.542-23.5-23.5-23.5h-144c-12.958 0-23.5 10.542-23.5 23.5v.5h-8.5c-4.687 0-8.5-3.813-8.5-8.5V295h17v.5c0 12.958 10.542 23.5 23.5 23.5h144c12.958 0 23.5-10.542 23.5-23.5v-16c0-12.958-10.542-23.5-23.5-23.5h-144c-12.958 0-23.5 10.542-23.5 23.5v.5h-17v-64.5c0-4.687 3.813-8.5 8.5-8.5h8.5v.5c0 12.958 10.542 23.5 23.5 23.5h144c12.958 0 23.5-10.542 23.5-23.5v-16c0-12.958-10.542-23.5-23.5-23.5zM208 319.5c0 4.687-3.813 8.5-8.5 8.5h-128c-4.687 0-8.5-3.813-8.5-8.5v-64c0-4.687 3.813-8.5 8.5-8.5h128c4.687 0 8.5 3.813 8.5 8.5v64zm79 48c0-4.687 3.813-8.5 8.5-8.5h144c4.687 0 8.5 3.813 8.5 8.5v16c0 4.687-3.813 8.5-8.5 8.5h-144c-4.687 0-8.5-3.813-8.5-8.5v-16zm0-88c0-4.687 3.813-8.5 8.5-8.5h144c4.687 0 8.5 3.813 8.5 8.5v16c0 4.687-3.813 8.5-8.5 8.5h-144c-4.687 0-8.5-3.813-8.5-8.5v-16zm161-72c0 4.687-3.813 8.5-8.5 8.5h-144c-4.687 0-8.5-3.813-8.5-8.5v-16c0-4.687 3.813-8.5 8.5-8.5h144c4.687 0 8.5 3.813 8.5 8.5v16z" /><path d="M471.5 56h-432C17.72 56 0 73.72 0 95.5v320C0 437.28 17.72 455 39.5 455h432c21.78 0 39.5-17.72 39.5-39.5v-320c0-21.78-17.72-39.5-39.5-39.5zm-432 15h432c13.509 0 24.5 10.991 24.5 24.5V120H15V95.5C15 81.991 25.991 71 39.5 71zm432 369h-432C25.991 440 15 429.009 15 415.5V135h481v280.5c0 13.509-10.991 24.5-24.5 24.5z" /></svg>
                              </div>
                           </div>
                           {/* <ImgLoader src={Icon3} width={56} height={56} alt="icon" /> */}
                           <h5>Pitch Deck Design</h5>
                           <p>Looking to raise capital from banks or private financiers? Contact us. We offer professional business plan writing service for entrepreneurs who require bank loan or grants.</p>
                           <button className="btn">Learn more</button>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-12 col-sm-12 col-12 image">
                        <div className="outer-box">
                           <div className="inner-box">
                              <ImgLoader src={Img3}  alt="" /></div>
                           <div className='top-right'>
                              <ImgLoader src={Dots} width={298} height={408} alt="icon" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>


      </div>
   )
}