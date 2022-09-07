import Link from 'next/link'
import { useRouter } from 'next/router';

export default function CategoryList({ categories, slug }) {
    const router = useRouter();
    return (
        <div className="filter">
            <div className="web">
                <Link href={`/blog/`}><a className={slug ? 'btn' : 'btn active'}>View All</a></Link>
                {categories && categories.map((item, index) => (
                    <Link href={`/blog/category/${item.attributes.slug}`} key={index}>
                        <a  className={slug && slug=== item.attributes.slug ? 'btn active' : 'btn'}>{item.attributes.name}</a>
                    </Link>
                ))}
            </div>
            <div className="mobile">
                <select className="form-select" onChange={(e)=>router.push(e.target.value)}>
                    <option value="/blog">View All</option>
                    {categories && categories.map((item, index) => (
                        <option key={index} value={`/blog/category/${item.attributes.slug}`}>{item.attributes.name}</option>
                    ))}
                </select>
            </div>
        </div>
    )

}