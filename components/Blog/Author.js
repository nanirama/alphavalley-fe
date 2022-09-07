import useSWR from "swr";
import moment from 'moment';
import ImgLoader from '../Image'
import { fetcher } from '../../lib/api'


import DefaultImg from '../../assets/images/author-default.png'

const Author = ({ author, publishedAt }) => {
    const USER_ENDPOINT = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/authors/${author.data.id}?populate=*`
    const { data: userData, error } = useSWR(USER_ENDPOINT, fetcher);
    console.log('userData',userData)
    const avatarImage = userData && userData.data && userData.data.attributes.avatar && userData.data.attributes.avatar.data && userData.data.attributes.avatar.data.attributes && userData.data.attributes.avatar.data.attributes.url ? userData.data.attributes.avatar.data.attributes.url : DefaultImg
    return (
        <div className="user my-4 d-flex flex-row justify-content-start align-items-center">
            <ImgLoader src={avatarImage} width={56} height={56} alt={author.data.attributes.firstName} />
            <div className="content">
                <p className="name">{author.data.attributes.firstName} {author.data.attributes.lastName}</p>
                <p className="date"><time dateTime={moment(publishedAt).format('DD MMM YYYY')}> {moment(publishedAt).format('DD MMM YYYY')} </time></p>
            </div>
        </div>
    )

}

export default Author