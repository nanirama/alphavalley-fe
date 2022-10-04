import Link from "next/link";


export default function LookingSection() {
    return (

        <div className="connect-box">
            <div className="container">
                <div className="connect">
                    <h2>Looking for a VC-Grade Pitch Deck?</h2>
                    <p>Join over 200+ startups already growing with our Pitch Deck Services</p>
                    <div className="button-group">
                        <button className="btn blue"><Link href="/contact"><a>Get started</a></Link></button>
                        </div>
                </div>
            </div>
        </div>

    )

}