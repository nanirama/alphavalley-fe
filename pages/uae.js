import Seo from '../components/seo'
import Layout from "../components/layout"
import Herosection from '../components/USA/Herosection'
//import Imagesection from '../components/USA/Imagesection'
import GallerySection from '../components/USA/GallerySection'
import Alumnussection from '../components/USA/alumnussection'
import PitchDeckSection from '../components/USA/PitchDeckSection'
import Statsection from '../components/Elements/StatSection'
import Testimonialsection from '../components/Elements/Testimonialsection'
import CaseStudiessection from '../components/Elements/CaseStudies'
import Pricingsection from '../components/USA/PricingSection'
import Worksection from '../components/USA/WorkSection'
import FAQsection from '../components/Elements/FaqSection'
import { fetchAPI } from "../lib/api";


import Image1 from "../assets/images/uae/uae-slide1.jpg"
import Image2 from "../assets/images/uae/uae-slide2.jpg"
import Image3 from "../assets/images/uae/uae-slide3.jpg"
import Image4 from "../assets/images/uae/uae-slide4.jpg"
import Image5 from "../assets/images/uae/uae-slide5.jpg"
import Image6 from "../assets/images/uae/uae-slide6.jpg"
import Image7 from "../assets/images/uae/uae-slide7.jpg"
import Image8 from "../assets/images/uae/uae-slide8.png"

const ImgArray = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8
]
export default function UAE({data}) {
    const { MetaData, faqs, ClientName, case_studies } = data.attributes
    return (
        <Layout>
            <Seo seo={MetaData[0]}/>
            <div className='home-usa'>
                <Herosection />
                <GallerySection ImgArray={ImgArray} />
                <Alumnussection />
                <PitchDeckSection />
                <Statsection />
                <Testimonialsection data={ClientName.data} />
                <CaseStudiessection data={case_studies.data} />
                <Pricingsection />
                <Worksection />
                <FAQsection data={faqs.data} />
            </div>
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
