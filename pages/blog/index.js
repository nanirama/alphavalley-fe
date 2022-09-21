import Layout from "../../components/layout"
import Seo from '../../components/seo'
import BlogIndex from "../../components/Blog/BlogIndex"
import LookingSection from '../../components/Blog/LookingSection'

import { fetchAPI } from "../../lib/api";

export default function BlogPage({ articles, categories, data}) {
  const { MetaData } = data.attributes
    return (
        <Layout>
            <Seo seo={MetaData[0]}/>
            <div className="blogs">
                <BlogIndex articles={articles} categories={categories}/>
                <LookingSection />
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const [articlesRes, categoriesRes, pageData] = await Promise.all([
      fetchAPI("/api/blogs?sort[0]=createdAt:DESC&populate=*", { populate: "*" }),
      fetchAPI("/api/categories?populate=*", { populate: "*" }),
      fetchAPI("/api/display-pages?filters[slug][$eq]=blog-category&populate=*")   
    ]);
  
    return {
      props: {
        articles: articlesRes.data,
        categories: categoriesRes.data,
        data: pageData.data[0]
      },
      revalidate: 1,
    };
  }