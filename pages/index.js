import dynamic from 'next/dynamic'

const Seo = dynamic(() => import('../components/seo'))
const Layout = dynamic(() => import('../components/layout'))
const HeroSection = dynamic(() => import('../components/Home/HeroSection'))
const Servicesection = dynamic(() => import('../components/Home/Servicesection'))
const StatSection = dynamic(() => import('../components/Elements/StatSection'))
const Testimonialsection = dynamic(() => import('../components/Elements/Testimonialsection'))
const OtherSevicesection = dynamic(() => import('../components/Home/OtherSevicesection'))
const CTAsection1 = dynamic(() => import('../components/Elements/CTASection1'))
const CaseStudiessection = dynamic(() => import('../components/Elements/CaseStudies'))



// import Layout from "../components/layout"
// import HeroSection from "../components/Home/HeroSection"
// import Servicesection from "../components/Home/Servicesection"
// import StatSection from "../components/Elements/StatSection"
// import Testimonialsection from "../components/Elements/Testimonialsection"
// import OtherSevicesection from "../components/Home/OtherSevicesection"
// import CTAsection1 from "../components/Elements/CTASection1"
// import CaseStudiessection from "../components/Elements/CaseStudies"
import { fetchAPI } from "../lib/api";




export default function Home({ data }) {
  const { MetaData, faqs, ClientName, case_studies  } = data.attributes
  return (
    <Layout>
      <Seo seo={MetaData[0]} />
      <div className='home'>
        <HeroSection />
        <StatSection />
        <Servicesection />
        {/* <Testimonialsection data={ClientName.data} />
        <div className='home-usa'>
        <CaseStudiessection data={case_studies.data} />
        </div>        
        <OtherSevicesection />
        <CTAsection1 /> */}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const homeData = await fetchAPI("/api/display-pages?filters[slug][$eq]=home&populate=*");
  return {
    props: {
      data: homeData.data[0]
    },
    revalidate: 1,
  };
}
