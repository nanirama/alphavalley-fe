import Layout from "../../components/layout"
import Seo from '../../components/seo'


import { fetchAPI } from "../../lib/api";
import CaseStudyIndex from "../../components/Casestudies"

export default function BlogSingle({article}) {
    const { Meta } = article.attributes
    return (
        <Layout>
            {/* {Meta && Meta[0] && <Seo seo={Meta[0]}/>} */}
            <CaseStudyIndex data={article}/>
        </Layout>
    )
}

export async function getStaticPaths() {
    const articles = await fetchAPI("/api/case-studies/");
    return {
      paths: articles?.data?.map((article) => ({
        params: {
          slug: article?.attributes?.slug,
        },
      })),
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    const { slug } = params;
    const [articleRes] = await Promise.all([
      fetchAPI(`/api/case-studies?filters[slug][$eq]=${slug}&populate=*`)    
    ]);
  
    return {
      props: {
        article: articleRes.data[0]
      },
      revalidate: 1,
    };
  }