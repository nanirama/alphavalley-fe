import Seo from '../components/seo'
import Layout from "../components/layout"
import UsaHerosection from '../components/USA/UsaHerosection'
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


import Image1 from "../assets/images/usa/usa-slide1.jpg"
import Image2 from "../assets/images/usa/usa-slide2.jpg"
import Image3 from "../assets/images/usa/usa-slide3.jpg"
import Image4 from "../assets/images/usa/usa-slide4.jpg"
import Image5 from "../assets/images/usa/usa-slide5.jpg"
import Image6 from "../assets/images/usa/usa-slide6.jpg"
import Image7 from "../assets/images/usa/usa-slide7.png"
import Image8 from "../assets/images/usa/usa-slide8.jpg"

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
import ImageFile from "../assets/images/image-one-usa.jpg"
export default function USA({data}) {

  
    const { MetaData, faqs,ClientName } = data.attributes
    return (
        <Layout>
            <Seo seo={MetaData[0]}/>
            <div className='home-usa'>
                <UsaHerosection />
                <GallerySection ImgArray={ImgArray} />
                <Alumnussection />
                <PitchDeckSection />
                <Statsection />
                <Testimonialsection data={ClientName.data} />
                <CaseStudiessection />
                <Pricingsection />
                <Worksection />
                <FAQsection data={faqs.data} />
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const pageData = await fetchAPI("/api/display-pages?filters[slug][$eq]=usa&populate=*");
  return {
    props: {
      data: pageData.data[0]
    },
    revalidate: 1,
  };
}
