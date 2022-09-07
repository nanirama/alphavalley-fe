import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'

import ImgLoader from '../../components/Image'

import Brandimg1 from "../../assets/images/brand1.jpg"
import Brandimg2 from "../../assets/images/brand2.png"
import Brandimg3 from "../../assets/images/brand3.png"

import Brandimg4 from "../../assets/images/brand4.png"

import Brandimg5 from "../../assets/images/brand6.png"

import Brandimg6 from "../../assets/images/brand5.png"



export default function Alumnussection() {
    return (
        <div className="alumnus-section">
            <div className="container">
                <p>Join 4,000+ companies already growing</p>
                <div className="image-list">
                    <ImgLoader src={Brandimg5} width={120} height={50} alt="brand" />
                    <ImgLoader src={Brandimg1} width={150} height={70} alt="brand" />
                    <ImgLoader src={Brandimg2} width={120} height={50} alt="brand" />
                    <ImgLoader src={Brandimg4} width={120} height={50} alt="brand" />
                    <ImgLoader src={Brandimg6} width={120} height={50} alt="brand" />
                    <ImgLoader src={Brandimg5} width={120} height={80} alt="brand" />
                </div>
            </div>
        </div>
    )
}