import ImgLoader from '../Image'

import Emailimg from "../../assets/images/email.png"

import Locationimg from "../../assets/images/location.png"

import Phoneimg from "../../assets/images/phone.png"

export default function Contactinfo() {
    return (
        <>
            <div className="heading">
                <span>Contact us</span>
                <h1>We&apos;d love to hear from you</h1>
                <p>Our friendly team is always here to chat.</p>
            </div>
            <div className="info-section row">
                <div className="content-box col-lg-4 col-md-6 col-sm-12 col-12">
                    <ImgLoader src={Emailimg} alt="Cards" />
                    <h5 className="title">Email</h5>
                    <p className="description">Our friendly team is here to help.</p>
                    <p className="content">hello@alphavalley.co</p>
                </div>
                <div className="content-box col-lg-4 col-md-6 col-sm-12 col-12">
                    <ImgLoader src={Locationimg} alt="Cards" />
                    <h5 className="title">Office</h5>
                    <p className="description">Come say hello at our office HQ.</p>
                    <p className="content">101, Fortune House, Baner Pashan Link Road, Pune, India</p>
                </div>
                <div className="content-box col-lg-4 col-md-12 col-sm-12 col-12">
                    <ImgLoader src={Phoneimg} alt="Cards" />
                    <h5 className="title">Phone</h5>
                    <p className="description">Mon-Fri from 8am to 5pm.</p>
                    <p className="content">+1 (555) 000-0000</p>
                </div>
            </div>
        </>
    )
}