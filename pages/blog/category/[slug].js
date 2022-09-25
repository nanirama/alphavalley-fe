import Layout from "../../../components/layout"
import CategoryIndex from '../../../components/Blog/CategoryIndex';
import LookingSection from '../../../components/Blog/LookingSection'

import { fetchAPI } from "../../../lib/api";

export default function BlogPage({ category, categories }) {
    return (
        <Layout>
            <div className="blogs">
                <CategoryIndex category={category} categories={categories}/>
                <LookingSection />
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
  const categories = await fetchAPI("/api/categories/");
  return {
    paths: categories?.data?.map((category) => ({
      params: {
        slug: category?.attributes?.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const [categoryRes, categoriesRes] = await Promise.all([
    fetchAPI(`/api/categories?filters[slug][$eq]=${slug}&populate=*`, { populate: "*" }),
    fetchAPI("/api/categories?populate=*", { populate: "*" })      
  ]);

  return {
    props: {
      category: categoryRes.data[0],
      categories: categoriesRes.data,
    },
    revalidate: 1,
  };
}
