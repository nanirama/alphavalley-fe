import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Layout from "../components/layout"
import Seo from '../components/seo'

import Contactform from "../components/contact/contactform"
import Contactinfo from "../components/contact/contactinfo"

export default function Contact({ }) {
    return (
        <Layout>
            <GoogleReCaptchaProvider
                reCaptchaKey="6LfLFw4iAAAAAKj0H7iflRMk8ymVcKUwWYor-Eia"
                scriptProps={{
                    async: false,
                    defer: false,
                    appendTo: "head",
                    nonce: undefined,
                }}
            >
                <div className="contact-us">
                    <div className="container">
                        <Contactform />
                        <Contactinfo />
                    </div>
                </div>
            </GoogleReCaptchaProvider>
        </Layout>
    )
}