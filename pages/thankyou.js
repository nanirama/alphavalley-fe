import Layout from "../components/layout"
import Seo from '../components/seo'
import Link from 'next/link'
import { fetchAPI } from "../lib/api";
export default function Thankyou({ data }) {
    const { MetaData } = data.attributes
    return (
        <Layout>
            <Seo seo={MetaData[0]} />
            <div className='pitch-deck my-5 py-5'>
                <div className="form-box row d-flex flex-row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-9 col-sm-12 col-12">
                        <div className="alert alert-success text-center" role="alert">Thank you for contacting us. Go to <Link href="/"><a>Home</a></Link></div>
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export async function getStaticProps() {
    const homeData = await fetchAPI("/api/display-pages?filters[slug][$eq]=home&populate=*");
    return {
        props: {
            data: homeData.data[0]
        },
        revalidate: 1,
    };
}
