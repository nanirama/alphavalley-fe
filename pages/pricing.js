import Layout from "../components/layout"
import Seo from '../components/seo'
import Pricingsection from '../components/Pricing/pricingsection'
import FAQsection from '../components/Elements/FaqSection'
import Alumnussection from '../components/Pricing/alumnussection'
import { fetchAPI } from "../lib/api";


export default function Pricing({data}) {
    const { MetaData, faqs } = data.attributes
    return (
        <Layout>
            <Seo seo={MetaData[0]}/>
            <Pricingsection />
            <div className='pitch-deck'>
            <FAQsection data={faqs.data} />
            </div>
            <Alumnussection />
        </Layout>
    )
}

export async function getStaticProps() {
    const pageData = await fetchAPI("/api/display-pages?filters[slug][$eq]=pricing&populate=*");
    return {
        props: {
        data: pageData.data[0]
        },
        revalidate: 1,
    };
}
