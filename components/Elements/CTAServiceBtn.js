import Link from 'next/link'
export default function CTAServiceBtn({label, link}) {

    return (
        <Link href={link}><a className="btn">{label ? label : 'Learn more'}</a></Link>    
    )

}