import Layout from "../components/layout"
import Seo from '../components/seo'

import { fetchAPI } from "../lib/api";

import Contactform from "../components/contact/contactform"
import Contactinfo from "../components/contact/contactinfo"

export default function Contact({data}) {
    const { MetaData } = data.attributes
    return (
        <Layout>
            <Seo seo={MetaData[0]}/>
            <div className="contact-us">
                <div className="container">
                    <Contactform />
                    <Contactinfo />
                </div>
            </div>

        </Layout>
    )
}

export async function getStaticProps() {
    const pageData = await fetchAPI("/api/display-pages?filters[slug][$eq]=contact&populate=*");
    return {
        props: {
        data: pageData.data[0]
        },
        revalidate: 1,
    };
}