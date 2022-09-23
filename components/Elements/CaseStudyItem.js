import useSWR from "swr";
import Link from 'next/link'
import moment from 'moment';
import { fetcher } from '../../lib/api'


import ImgLoader from '../Image'
import CasestudyImg1 from "../../assets/images/case-study1.png"

export default function CaseStudyItem({ id }) {
    const CS_ENDPOINT = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/case-studies?filters[id][$eq]=${id}&populate=*`
    const { data: csData, error } = useSWR(CS_ENDPOINT, fetcher);

    const cutString = (s, n) => {
        var cut = s.indexOf(' ', n);
        if (cut == -1) return s;
        return s.substring(0, cut)
    }

    if (csData && csData.data) {
        const { Clientname, slug, title, tags, excrept, publishedAt, banner } = csData.data[0].attributes
        const bannerImage = banner && banner.data && banner.data[0] && banner.data[0].attributes && banner.data[0].attributes.url ? banner.data[0].attributes.url : CasestudyImg1
        return (
            <div className="casestudyitem card">
                {bannerImage && <Link href={`/casestudy/${slug}`}><a><ImgLoader src={bannerImage} alt={title && title} width={400} height={240} /></a></Link>}
                <span>{Clientname && Clientname} • <time dateTime={moment(publishedAt).format('DD MMM YYYY')}> {moment(publishedAt).format('DD MMM YYYY')} </time></span>
                <div className="heading">
                    {title && <Link href={`/casestudy/${slug}`}><a><h3>{cutString(title, 20)}</h3></a></Link>}
                    <div className="casestdyarw">
                        <Link href={`/casestudy/${slug}`}><a><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></a></Link>
                    </div>
                </div>
                {excrept && <p dangerouslySetInnerHTML={{ __html: excrept }} className='min-height' ></p>}
                {tags && tags.data && tags.data.length > 0 && (
                    <div className="tags d-flex flex-row justify-content-start align-items-center flex-wrap">
                        {tags.data.slice(0, 2).map((item, index) => (
                            <Link href={`/casestudy/tag/${item.attributes.slug}`} key={index}><a className={index % 2 == 0 ? 'tagsbg' : 'tagsbg2'}>{item.attributes.name}</a></Link>
                        ))}
                    </div>
                )}
            </div>
        )
    }
    else {
        return null
    }

}