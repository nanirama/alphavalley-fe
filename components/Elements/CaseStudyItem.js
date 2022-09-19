import useSWR from "swr";
import Link from 'next/link'
import moment from 'moment';
import { fetcher } from '../../lib/api'


import ImgLoader from '../Image'
import CasestudyImg1 from "../../assets/images/case-study1.png"
import Casestudyarw from "../../assets/images/casestudy-arw.png"
export default function CaseStudyItem({ id }) {
    const CS_ENDPOINT = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/case-studies?filters[id][$eq]=${id}&populate=*`
    const { data: csData, error } = useSWR(CS_ENDPOINT, fetcher);

    if (csData && csData.data) {
        const { Clientname, slug, title, tags, excrept, publishedAt, banner } = csData.data[0].attributes
        const bannerImage = banner && banner.data && banner.data[0] && banner.data[0].attributes && banner.data[0].attributes.url ? banner.data[0].attributes.url : CasestudyImg1
        return (
            <div className="casestudyitem card">
                <Link href={`/casestudy/${slug}`}>
                    <a>
                        {bannerImage && <ImgLoader src={bannerImage} alt={title && title} width={400} height={240} />}
                        <span>{Clientname && Clientname} • <time dateTime={moment(publishedAt).format('DD MMM YYYY')}> {moment(publishedAt).format('DD MMM YYYY')} </time></span>
                        <div className="heading">
                            {title && <h3>{title}</h3>}
                            <ImgLoader src={Casestudyarw} width={24} height={24} alt="link" />
                        </div>
                        {excrept && <p dangerouslySetInnerHTML={{ __html: excrept }} className='min-height' ></p>}
                        {tags && tags.data && tags.data.length > 0 && (
                            <div className="tags d-flex flex-row justify-content-start align-items-center flex-wrap">
                                {tags.data.slice(0,2).map((item, index) => (
                                    <span className={index % 2 == 0 ? 'tagsbg' : 'tagsbg2'} key={index}>{item.attributes.name}</span>
                                ))}
                            </div>
                        )}
                    </a>
                </Link>
            </div>
        )
    }
    else {
        return null
    }

}