import Layout from "../components/layout"
import Seo from '../components/seo'

import Herosection from "../components/pitch-deck-review/Herosection"
import Introduction from "../components/pitch-deck-review/Introduction"
import Statsection from "../components/Elements/StatSection"
import Pricingsection from '../components/USA/PricingSection'
import FAQsection from '../components/Elements/FaqSection'
import CaseStudiessection from "../components/Elements/CaseStudies"
import { fetchAPI } from "../lib/api";
export default function PitchdeckReview({ data }) {
    const { MetaData, faqs } = data.attributes
    return (
        <Layout>
            <>
                <div className="pitch-deck-review">
                    <div className="home-in">
                        <Herosection />
                        <Introduction />
                        <div className='home-usa'>
                            <Statsection />
                            <Pricingsection />
                            <FAQsection data={faqs.data} />
                            <CaseStudiessection />
                        </div>
                       
                    </div>
                </div>
            </>
        </Layout>
    )
}
export async function getStaticProps() {
    const pageData = await fetchAPI("/api/display-pages?filters[slug][$eq]=uae&populate=*");
    return {
        props: {
            data: pageData.data[0]
        },
        revalidate: 1,
    };
}
