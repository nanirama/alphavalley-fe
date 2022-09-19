import Seo from '../components/seo'
import Layout from "../components/layout"
import HeroSection from "../components/Home/HeroSection"
import Servicesection from "../components/Home/Servicesection"
import StatSection from "../components/Elements/StatSection"
import Testimonialsection from "../components/Elements/Testimonialsection"
import OtherSevicesection from "../components/Home/OtherSevicesection"
import CTAsection1 from "../components/Elements/CTASection1"
import { fetchAPI } from "../lib/api";

export default function Home({ data }) {
  const { MetaData, faqs, ClientName } = data.attributes
  return (
    <Layout>
      <Seo seo={MetaData[0]} />
      <div className='home'>
        <HeroSection />
        <StatSection />
        <Servicesection />
        <Testimonialsection data={ClientName.data} />
        <OtherSevicesection />
        <CTAsection1 />
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
