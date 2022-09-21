import Link from 'next/link'
import ImgLoader from '../Image'


import Accordion from 'react-bootstrap/Accordion';

export default function FAQsection({ data }) {

    return (
        <div className="faq">
            <div className="container">
                <div className="faq-top">
                    <div className="faq-header">
                        <h1>Frequently asked questions</h1>
                        <p>Commonly asked questions about our pitch deck and other services</p>
                    </div>

                    <div className='faqsection'>
                        <Accordion defaultActiveKey="0">
                            {data && data.map((item, index) => {
                                const { title, description } = item.attributes
                                return (
                                    <Accordion.Item eventKey={index} key={index}>
                                        <Accordion.Header>{title && title}</Accordion.Header>
                                        <Accordion.Body>
                                            <p>{description && description}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })}
                        </Accordion>
                    </div>

                </div>
                <div className="faq-bottom">
                    <h2>Still have questions?</h2>
                    <p>Can’t find the answer you’re looking for? Please get in touch </p>
                    <Link href="/contact"><a className="btn">Contact us</a></Link>
                </div>
            </div>
        </div>

    )

}

