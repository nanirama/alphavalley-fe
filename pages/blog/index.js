import Layout from "../../components/layout"
import BlogIndex from "../../components/Blog/BlogIndex"
import LookingSection from '../../components/Blog/LookingSection'

import { fetchAPI } from "../../lib/api";

export default function BlogPage({ articles, categories}) {
    return (
        <Layout>
            <div className="blogs">
                <BlogIndex articles={articles} categories={categories}/>
                <LookingSection />
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const [articlesRes, categoriesRes] = await Promise.all([
      fetchAPI("/api/blogs?populate=*", { populate: "*" }),
      fetchAPI("/api/categories?populate=*", { populate: "*" })      
    ]);
  
    return {
      props: {
        articles: articlesRes.data,
        categories: categoriesRes.data,
      },
      revalidate: 1,
    };
  }