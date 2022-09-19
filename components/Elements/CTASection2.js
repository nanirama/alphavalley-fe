import Link from 'next/link'
import ImgLoader from '../Image'




export default function CTAsection2() {

    return (
        <div className='faq'>
             <div className="container">
            <div className="faq-bottom">
                <h4>Want to learn more?</h4>
                <p>Can’t find the answer you’re looking for? Please get in touch</p>
                <Link href="/contact"><a className="btn">CONTACT NOW</a></Link>
            </div>
            </div>
        </div>

    )

}