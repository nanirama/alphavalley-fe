import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'

import ImgLoader from '../../components/Image'

import Icon1 from "../../assets/images/svg/clients-01.svg"
import Icon2 from "../../assets/images/svg/clients-02.svg"
import Icon3 from "../../assets/images/svg/clients-03.svg"
import Icon4 from "../../assets/images/svg/clients-04.svg"
import Icon5 from "../../assets/images/svg/clients-05.svg"
import Icon6 from "../../assets/images/svg/clients-06.svg"



export default function Alumnussection() {
    return (
        <div className="alumnus-section">
            <div className="container">
                <p>Join 4,000+ companies already growing</p>
                <div className="image-list pt-4">
                    <ImgLoader src={Icon1} width={120} height={40} alt="brand" />
                    <ImgLoader src={Icon2} width={120} height={40} alt="brand" />
                    <ImgLoader src={Icon5} width={120} height={40} alt="brand" />
                    <ImgLoader src={Icon3} width={120} height={40} alt="brand" />
                    <ImgLoader src={Icon4} width={120} height={40} alt="brand" />
                    <ImgLoader src={Icon6} width={120} height={40} alt="brand" />
                </div>
            </div>
        </div>
    )
}