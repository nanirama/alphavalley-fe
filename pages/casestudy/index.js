import Layout from "../../components/layout"

import CaseStudiesIndex from "../../components/Casestudies/CaseStudiesIndex";

import { fetchAPI } from "../../lib/api";

export default function index({ articles }) {
    console.log('carticles', articles)
    return (
        <Layout>
             <div className='home-usa blogsingle'>
                    <CaseStudiesIndex  articles={articles} />
                </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const [articlesRes] = await Promise.all([
      fetchAPI("/api/case-studies?populate=*", { populate: "*" }), 
    ]);
  
    return {
      props: {
        articles: articlesRes.data,
      },
      revalidate: 1,
    };
  }