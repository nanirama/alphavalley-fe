import ReactMarkdown from "react-markdown"
import ImgLoader from '../Image'
import Share from "./Share";
import Blog1bg from "../../assets/images/blog1-bg.png"
const Index = ({ data }) => {
    const {
        title,
        slug,
        excrept,
        casestudy,
        publishedAt,
        banner,
        tags } = data.attributes
    const bannerImage = banner && banner.data && banner.data[0] && banner.data[0].attributes && banner.data[0].attributes.url ? banner.data[0].attributes.url : CasestudyImg1
    const stwitterHandle = "_MsLinda";
    const stitle = `Read ${title} `;
    const surl = "/";

    const MarkdownComponents = {
        h2: heading => {
            const { node } = heading
            if (node.children[0].type === "text") {
                return (
                    <h2 id={`${node.children[0].value
                        .replace("#", "")
                        .replace(" ", "_")
                        .replace(":", "")
                        .toLowerCase()}`}>
                        {node.children[0].value}
                    </h2>
                )
            }
        },
        p: paragraph => {
            const { node } = paragraph
            if (node.children[0].type === "raw" && node.children[0].value === '<u>') {
                return (
                    <div className="w-full py-3">
                        <span className="underlinetext">{paragraph.children[1]}</span>{paragraph.children[3]}
                    </div>
                )
            }
            if (node.children[0].tagName === "img") {
                const image = node.children[0]
                const metastring = image.properties.alt
                const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
                const metaWidth = metastring.match(/{([^}]+)x/)
                const metaHeight = metastring.match(/x([^}]+)}/)
                const width = metaWidth ? metaWidth[1] : "468"
                const height = metaHeight ? metaHeight[1] : "232"
                return (
                    <div className="postImgWrapper my-3 py-2 d-flex flex-row justify-content-center align-items-center">
                        <ImgLoader
                            src={image.properties.src}
                            alt={alt}
                            width={width}
                            height={height}
                        />

                    </div>
                )
            }
            return <p>{paragraph.children}</p>
        },
    }
    return (
        <div className="blog-post">
            <div className="container">
                <div className="heading">
                    <div className="row">
                        <div className="col-xl-7 col-lg-12 col-md-12">
                            <div className="content m-0">
                                <div className="tags">
                                </div>
                                <h1>{title && title}</h1>
                                {excrept && excrept}
                            </div>
                        </div>
                    </div>
                    <div className="image d-flex justify-content-center align-items-center bottom-0 top-0">
                        <div className='blog-image position-relative'>
                            <ImgLoader src={bannerImage} width={banner.data[0].attributes.width} height={banner.data[0].attributes.height} />
                            <div className='arrow'>
                                <ImgLoader src={Blog1bg} width={299} height={148} alt="blog" className="arrow" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="contents">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="left-box">
                                <Share
                                    socialConfig={{
                                        twitter: stwitterHandle,
                                        config: {
                                            url: surl,
                                            title: stitle,
                                        },
                                    }}
                                />
                            </div>
                        </div>

                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                            <div className="right-box content-box blog-content">

                                <ReactMarkdown components={MarkdownComponents}>{casestudy}</ReactMarkdown>
                                <br />
                                <div className="tag-box">
                                    {tags && tags.data && tags.data.length > 0 && (
                                        <div className="tags d-flex flex-row justify-content-start align-items-center flex-wrap mt-4">
                                            {tags.data.map((item, index) => (
                                                <span className={index % 2 == 0 ? 'tagsbg' : 'tagsbg2'} key={index}>{item.attributes.name}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Index