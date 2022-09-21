import Layout from "../../components/layout"
import Seo from '../../components/seo'
import CaseStudiesIndex from "../../components/Casestudies/CaseStudiesIndex";

import { fetchAPI } from "../../lib/api";

export default function index({ articles, data }) {
  const { MetaData } = data.attributes
    return (
        <Layout>
          <Seo seo={MetaData[0]}/>
             <div className='home-usa blogsingle'>
                    <CaseStudiesIndex  articles={articles} />
                </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const [articlesRes, pageData] = await Promise.all([
      fetchAPI("/api/case-studies?sort[0]=createdAt:DESC&populate=*", { populate: "*" }), 
      fetchAPI("/api/display-pages?filters[slug][$eq]=casestudies-category&populate=*")   
    ]);
  
    return {
      props: {
        articles: articlesRes.data,
        data: pageData.data[0]
      },
      revalidate: 1,
    };
  }