import Link from 'next/link'
import useSWR from "swr";
import ImgLoader from '../Image'
import Author from './Author'
import { fetcher } from '../../lib/api'

// import Author from "../../assets/images/test-avatar.png"

import DefaultImg from '../../assets/images/default-img.png'

export default function BlogItem({ data, categoryName='' }) {
    const { title, slug, excerpt, publishedAt, reading_time } = data.attributes

    const POST_ENDPOINT = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs/${data.id}?populate=*`
    const { data: postData, error } = useSWR(POST_ENDPOINT, fetcher);
    
    const covers = postData?.data?.attributes?.covers && postData.data.attributes.covers    
    const author = postData?.data?.attributes?.author && postData.data.attributes.author  
    const categories =   postData?.data?.attributes?.categories && postData.data.attributes.categories  
    const coverImage = covers && covers.data && covers.data.attributes ? covers.data.attributes.url : DefaultImg
    const catName = categoryName ? categoryName : categories?.data[0]?.attributes?.name

    const cutString = (s, n) => {
        var cut = s.indexOf(' ', n);
        if (cut == -1) return s;
        return s.substring(0, cut)
    }
    return (
        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <Link href={`/blog/${slug}`}>
                <a>
                    <div className="blog">
                        <div className="blog-img w-100">
                            <ImgLoader src={coverImage} width={320} height={200} alt="blog" className="w-100" />
                        </div>
                        <div className="content w-100">
                            <span>{catName && catName}</span>
                            <h4>{title && cutString(title, 25)}</h4>
                            <p>{excerpt && cutString(excerpt, 100)}....</p>
                            {author && author.data && author.data.id && <Author author={author} publishedAt={publishedAt} />}
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )

}