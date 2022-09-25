import Layout from "../components/layout"
import Seo from '../components/seo'
import Herosection from '../components/Pitchdeck/Herosection'
import Pitchdeckservicesection from "../components/Pitchdeck/Intelligentpitchdeck"
import Investerdeck from "../components/Pitchdeck/investerdeck"
import OurProcess from "../components/financial-modeling/Ourprocess"
import WhyAlphavalley from "../components/Pitchdeck/WhyAlphavalley"
import CaseStudiessection from "../components/Elements/CaseStudies"
import Alumnussection from "../components/Elements/alumnussection"
import TestimonialsectionPitch from "../components/Pitchdeck/Testimonial"
import Worksection from "../components/Pitchdeck/WorkSection"
import FAQsection from '../components/Elements/FaqSection'
import { fetchAPI } from "../lib/api";
export default function Pitchdeck({data}) {
    const { MetaData, ClientName, faqs, case_studies } = data.attributes
    return (
        <Layout>
            <Seo seo={MetaData[0]}/>
            <div className='pitch-deck'>
                <Herosection />
                <Pitchdeckservicesection />
                <Investerdeck />
                <OurProcess/>
                <WhyAlphavalley />
                <div className='home-usa'>
                <CaseStudiessection data={case_studies.data} />
                </div>
                <Alumnussection />
                <TestimonialsectionPitch data={ClientName.data} />
                <Worksection />
                <FAQsection data={faqs.data} />
                </div>
        </Layout>
    )

}
export async function getStaticProps() {
    const pageData = await fetchAPI("/api/display-pages?filters[slug][$eq]=pitch-deck&populate=*");
    return {
        props: {
        data: pageData.data[0]
        },
        revalidate: 1,
    };
}