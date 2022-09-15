import Layout from "../components/layout"
import Seo from '../components/seo'

import Herosection from "../components/financial-modeling/herosection"
import StartupSection from "../components/financial-modeling/Startupsection"
import Investerdeck from "../components/financial-modeling/Investerdeck"
import OurProcess from "../components/financial-modeling/Ourprocess"
import StatSection from "../components/financial-modeling/Statsection"
import CaseStudiessection from "../components/Elements/CaseStudies"
import Alumnussection from "../components/Pricing/alumnussection"
import TestimonialsectionPitch from "../components/Pitchdeck/Testimonial"
import Worksection from "../components/Pitchdeck/WorkSection"
import FAQsection from '../components/Elements/FaqSection'
import { fetchAPI } from "../lib/api";

    export default function FinancialModelling({data}) {
    const { MetaData, ClientName, faqs, case_studies } = data.attributes
    console.log('data.attributes',ClientName.data)
    return (
        <Layout>
              <Seo seo={MetaData[0]}/>
            <div class="pitch-deck">
                <Herosection />
                <StartupSection />
                <Investerdeck />
                <OurProcess />
                <StatSection />
                <div className='home-usa'>
                <CaseStudiessection data={case_studies.data} />
                <Alumnussection />
                <TestimonialsectionPitch data={ClientName.data} />
                <Worksection />
                <FAQsection data={faqs.data} />
                </div>
            </div>
          
        </Layout>

    )

}

export async function getStaticProps() {
    const pageData = await fetchAPI("/api/display-pages?filters[slug][$eq]=financial-modelling&populate=*");
    return {
        props: {
        data: pageData.data[0]
        },
        revalidate: 1,
    };
}