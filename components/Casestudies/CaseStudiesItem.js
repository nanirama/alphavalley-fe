import Link from 'next/link'
import useSWR from "swr";
import moment from 'moment';
import ImgLoader from '../Image'
// import Author from './Author'
import { fetcher } from '../../lib/api'

// import Author from "../../assets/images/test-avatar.png"

import DefaultImg from '../../assets/images/default-img.png'
import CasestudyImg1 from "../../assets/images/case-study1.png"
export default function CaseStudiesItem({ data }) {
    console.log('casestudy Single id', data)
    const { title, slug, excrept, publishedAt, Clientname, tags, banner } = data.attributes

    const POST_ENDPOINT = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/case-studies/${data.id}?populate=*`
    const { data: postData, error } = useSWR(POST_ENDPOINT, fetcher);
    const bannerImage = banner && banner.data && banner.data[0] && banner.data[0].attributes && banner.data[0].attributes.url ? banner.data[0].attributes.url : CasestudyImg1
    return (
        <div className="col-lg-6 col-md-12 col-sm-12 col-12 my-3">
            <Link href={`/casestudy/${slug}`}>
                <a>
                    <div className="casestudyitem row my-3">
                        <div className="blog-img col-sm-6">
                            <ImgLoader src={bannerImage} width={320} height={200} alt="blog" className="w-100" />
                        </div>

                        <div className="content col-sm-6">
                            <span>{Clientname && Clientname} • <time dateTime={moment(publishedAt).format('DD MMM YYYY')}> {moment(publishedAt).format('DD MMM YYYY')} </time></span>
                            <h4>{title && title}</h4>
                            {excrept && <p dangerouslySetInnerHTML={{ __html: excrept }} ></p>}    
                            {tags && tags.data && tags.data.length > 0 && (
                                <div className="tags d-flex flex-row justify-content-start align-items-center flex-wrap mt-4">
                                    {tags.data.map((item, index) => (
                                        <span className={index % 2 == 0 ? 'tagsbg' : 'tagsbg2'} key={index}>{item.attributes.name}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )

}