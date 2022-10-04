import ReactMarkdown from "react-markdown"
import ImgLoader from '../Image'
import Share from "./Share";
import Blog1bg from "../../assets/images/blog1-bg.png"
import parse from "html-react-parser";

import CasestudyImg1 from  "../../assets/images/case-study1.png"
const Index = ({ data }) => {
    const {
        title,
        slug,
        excrept,
        casestudy,
        publishedAt,
        banner,
        tags } = data.attributes
	console.log('banner',banner)
    const bannerImage = banner && banner.data && banner.data[0] && banner.data[0].attributes && banner.data[0].attributes.url ? banner.data[0].attributes.url : CasestudyImg1
    const stwitterHandle = "_MsLinda";
    const stitle = `Read ${title} `;
    const surl = "/";
   
    return (
			<div className="blog-post">
				<div className="container">
					<div className="heading">
						<div className="row">
							<div className="col-xl-7 col-lg-12 col-md-12">
								<div className="content m-0">
									<div className="tags"></div>
									<h1>{title && title}</h1>
									{parse(` ${excrept}`)}
									{/* {excrept && excrept} */}
								</div>
							</div>
						</div>
						<div className="image d-flex justify-content-center align-items-center bottom-0 top-0">
							<div className="blog-image position-relative">
								{banner && bannerImage && (
									<ImgLoader
										src={bannerImage}
										width={banner && banner.data && banner.data[0] && banner.data[0].attributes && banner.data[0].attributes.width ? banner.data[0].attributes.width : '540'}
										height={banner && banner.data && banner.data[0] && banner.data[0].attributes && banner.data[0].attributes.height ? banner.data[0].attributes.height : '380'}
									/>
								)}
								
								<div className="arrow">
									<ImgLoader
										src={Blog1bg}
										width={299}
										height={148}
										alt="blog"
										className="arrow"
									/>
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
									{casestudy && parse(`<p> ${casestudy} </p>`)}
									<br />
									<hr/>
									<div className="tag-box">
										{tags && tags.data && tags.data.length > 0 && (
											<div className="tags d-flex flex-row justify-content-start align-items-center flex-wrap mt-4">
												{tags.data.map((item, index) => (
													<span
														className={index % 2 == 0 ? "tagsbg" : "tagsbg2"}
														key={index}
													>
														{item.attributes.name}
													</span>
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
		);
}

export default Index