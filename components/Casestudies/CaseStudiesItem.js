import Link from 'next/link'
import useSWR from "swr";
import ReactMarkdown from "react-markdown"
import moment from 'moment';
import parse from "html-react-parser";
import ImgLoader from '../Image'
import { fetcher } from '../../lib/api'

import CasestudyImg1 from "../../assets/images/case-study1.png"
export default function CaseStudiesItem({ data }) {
    const POST_ENDPOINT = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/case-studies/${data.id}?populate=*`
    const { data: postData, error } = useSWR(POST_ENDPOINT, fetcher);
    if (postData) {
        const { title, slug, excrept, publishedAt, Clientname, tags, banner } = postData.data.attributes
        const bannerImage = banner && banner.data && banner.data[0] && banner.data[0].attributes && banner.data[0].attributes.url ? banner.data[0].attributes.url : CasestudyImg1
        return (
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 my-3">
                <div className="casestudyitem row my-3">
                    <div className="blog-img col-sm-6">
                        <Link href={`/casestudy/${slug}`}>
                            <a><ImgLoader src={bannerImage} width={320} height={200} alt="blog" className="w-100" /></a></Link>
                    </div>
                    <div className="content col-sm-6">
                        <span>{Clientname && Clientname} • <time dateTime={moment(publishedAt).format('DD MMM YYYY')}> {moment(publishedAt).format('DD MMM YYYY')} </time></span>
                        <h4 className='ttl-minhght'><Link href={`/casestudy/${slug}`}>
                            <a>{title && title}</a></Link></h4>
                        {/* {excrept && <p className="min-height" ><ReactMarkdown>{excrept}</ReactMarkdown></p>}     */}
                        <div className="min-height">{excrept && parse(`<p> ${excrept} </p>`)}</div>
                        {tags && tags.data && tags.data.length > 0 && (
                            <div className="tags d-flex flex-row justify-content-start align-items-center flex-wrap mt-4">
                                {tags.data.slice(0, 2).map((item, index) => (
                                    <Link href={`/casestudy/tag/${item.attributes.slug}`} key={index}><a className={index % 2 == 0 ? 'tagsbg' : 'tagsbg2'}>{item.attributes.name}</a></Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
    else {
        return null;
    }
}