import Head from 'next/head'
import ImgLoader from '../../components/Image'

import CaseStudiessection from '../../components/Elements/CaseStudies'

import Layout from "../../components/layout"
import Seo from '../../components/seo'
import BlogIndex from '../../components/Blog'

import { fetchAPI } from "../../lib/api";
import CasestudyImg1 from "../../assets/images/case-study1.png"
export default function BlogSingle({article, casestudies}) {
    const { Metadata } = article.attributes
    return (
        <Layout>
            <Seo seo={Metadata[0]}/>
            <BlogIndex data={article}/>
            <div className='home-usa blogsingle'>
                <CaseStudiessection data={casestudies} />
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const articles = await fetchAPI("/api/blogs/");
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
    const [articleRes, casestudiesRes] = await Promise.all([
      fetchAPI(`/api/blogs?filters[slug][$eq]=${slug}&sort[0]=createdAt:DESC&populate=*`),
      fetchAPI("/api/case-studies?sort[0]=createdAt:DESC&pagination[page]=1&pagination[pageSize]=5&populate=*", { populate: "*" })  
    ]);
  
    return {
      props: {
        article: articleRes.data[0],
        casestudies: casestudiesRes.data
      },
      revalidate: 1,
    };
  }