import Link from 'next/link'
export default function CTABtn({label}) {

    return (
        <Link href="/contact"><a className="btn">{label ? label : 'CONTACT NOW'}</a></Link>    
    )

}