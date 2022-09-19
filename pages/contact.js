import Layout from "../components/layout"
import Seo from '../components/seo'

import Contactform from "../components/contact/contactform"
import Contactinfo from "../components/contact/contactinfo"

export default function Contact({ }) {
    return (
        <Layout>
            <div className="contact-us">
                <div className="container">
                    <Contactform />
                    <Contactinfo />
                </div>
            </div>

        </Layout>
    )
}