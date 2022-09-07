import Layout from "../components/layout"
import Seo from '../components/seo'
import FAQsection from '../components/Elements/FaqSection'
import Accordion from 'react-bootstrap/Accordion';

import { fetchAPI } from "../lib/api";

export default function FAQPage({data}) {
    const { MetaData, faqs } = data.attributes
    return (
        <Layout>
            <Seo seo={MetaData[0]}/>
            <FAQsection data={faqs.data} />
        </Layout>
    )
}

export async function getStaticProps() {
    const pageData = await fetchAPI("/api/display-pages?filters[slug][$eq]=faq&populate=*");
    return {
        props: {
        data: pageData.data[0]
        },
        revalidate: 1,
    };
}