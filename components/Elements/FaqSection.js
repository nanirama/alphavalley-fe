import Link from 'next/link'
import ImgLoader from '../Image'
import CTABtn from './CTABtn';


import Accordion from 'react-bootstrap/Accordion';

export default function FAQsection({ data, title="Commonly asked questions about our pitch deck and other services" }) {

    return (
        <div className="faq">
            <div className="container">
                <div className="faq-top">
                    <div className="faq-header">
                        <h1>Frequently asked questions</h1>
                        <p>{title}</p>
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
                    <CTABtn/>
                </div>
            </div>
        </div>

    )

}

