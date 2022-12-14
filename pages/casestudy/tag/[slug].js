import Layout from "../../../components/layout"
import Seo from '../../../components/seo'
import CaseStudiesIndex from "../../../components/Casestudies/CaseStudiesIndex";

import { fetchAPI } from "../../../lib/api";

export default function TagSingle({ data }) {
  const { Metadata } = data.attributes
  return (
    <Layout>
      {Metadata && Metadata[0] && <Seo seo={Metadata[0]} />}
      <div className='home-usa blogsingle'>
        <CaseStudiesIndex articles={data.attributes.case_studies.data} />
      </div>
    </Layout>
  )
}


export async function getStaticPaths() {
  const tags = await fetchAPI("/api/tags");
  return {
    paths: tags?.data?.map((tag) => ({
      params: {
        slug: tag?.attributes?.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const [articleRes] = await Promise.all([
    fetchAPI(`/api/tags?filters[slug][$eq]=${slug}&populate=*`)
  ]);

  return {
    props: {
      data: articleRes.data[0]
    },
    revalidate: 1,
  };
}

