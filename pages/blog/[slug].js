import Head from 'next/head'
import ImgLoader from '../../components/Image'

import CaseStudiessection from '../../components/Elements/CaseStudies'

import Layout from "../../components/layout"
import Seo from '../../components/seo'
import BlogIndex from '../../components/Blog'

import { fetchAPI } from "../../lib/api";
import CasestudyImg1 from "../../assets/images/case-study1.png"
export default function BlogSingle({article}) {
    const { Metadata } = article.attributes
    return (
        <Layout>
            <Seo seo={Metadata[0]}/>
            <BlogIndex data={article}/>
            <div className='home-usa blogsingle'>
                <CaseStudiessection />
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
    const [articleRes] = await Promise.all([
      fetchAPI(`/api/blogs?filters[slug][$eq]=${slug}&sort[0]=createdAt:DESC&populate=*`)    
    ]);
  
    return {
      props: {
        article: articleRes.data[0]
      },
      revalidate: 1,
    };
  }