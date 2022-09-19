import Link from 'next/link'
export default function CTAsection1() {

    return (
        <div className='contact-section'>
            <div className="container">
                <div className="contact-box">
                    <h4>Want to learn more?</h4>
                    <p>Can’t find the answer you’re looking for? Please get in touch</p>
                    <Link href="/contact"><a className="btn">CONTACT NOW</a></Link>
                </div>
            </div>

        </div>

    )

}