import Head from 'next/head'
import ImgLoader from '../../components/Image'

import CaseStudiessection from '../../components/Elements/CaseStudies'

import Layout from "../../components/layout"
import Blog1Hero from "../../assets/images/blog1-hero.png"
import Blog1bg from "../../assets/images/blog1-bg.png"
import Avatar from "../../assets/images/test-avatar.png"
import Linkedin from "../../assets/images/linkedin.png"
import Twitter from "../../assets/images/twitter.png"
import Fbicon from "../../assets/images/fb.png"
import Instagram from "../../assets/images/instagram.png"
import Blog2img from "../../assets/images/blog2.png"
import Blog3img from "../../assets/images/blog3.png"

export default function BlogSinglePage() {
    return (
        <Layout>

            <div className="blog-post">
                <div className="container">
                    <div className="heading">
                        <div className="row">
                            <div className="col-xl-7 col-lg-12 col-md-12">
                                <div className="content">
                                    <div className="tags">
                                        <span className="tag">Design</span><span className="tag">Design</span>
                                    </div>
                                    <h1>How collaboration makes us better designers</h1>
                                    <p>Collaboration can make our teams stronger, and our individual designs better.</p>
                                    <div className="user">
                                        <ImgLoader src={Avatar} width={64} height={64} alt="author" />
                                        <img src="" />
                                        <div className="content">
                                            <p className="name">Natali Craig</p>
                                            <p className="date">Published 14 Jan 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image">
                            <div className='blog-image'>
                                <ImgLoader src={Blog1Hero} width={500} height={590} alt="blog" className="blog-image" />
                            </div>
                            <div className='arrow'>
                                <ImgLoader src={Blog1bg} width={299} height={148} alt="blog" className="arrow" />
                            </div>
                        </div>
                    </div>

                    <div className="contents">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                <div className="left-box">
                                    <div className="table-content">
                                        <span>Table of contents</span>
                                        <a href="#">Client Name - Pitch</a>
                                        <a href="#">Segment - Start-up Pitch Deck Design</a>
                                        <a href="#">Geography - USA</a>
                                        <a href="#">Stage - Seed</a>
                                        <a href="#">Industry - Consulting</a>
                                    </div>
                                    <div className="sharing-button">
                                        <button>
                                            <ImgLoader src={Linkedin} width={20} height={20} alt="Linkedin" />

                                        </button>
                                        <button>
                                            <ImgLoader src={Twitter} width={20} height={20} alt="Twitter" />

                                        </button>
                                        <button>
                                            <ImgLoader src={Fbicon} width={20} height={20} alt="Fbicon" />

                                        </button>
                                        <button>
                                            <ImgLoader src={Instagram} width={20} height={20} alt="Instagram" />

                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                <div className="right-box content-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.</p>
                                    <br />
                                    <hr />
                                    <br />
                                    <h3 id="introduction">Introduction</h3>
                                    <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id. </p>
                                    <p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.</p>
                                    <div className='blogimgg'><ImgLoader src={Blog2img} width={850} height={500} alt="blog" /></div>
                                    <div className="quote-box">
                                        <h2>“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”</h2>
                                        <p>— Olivia Rhye, Product Designer</p>
                                    </div>
                                    <p>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
                                    <p>Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.</p>
                                    <p>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p>
                                    <br />
                                    <h5 id="softwaretool">Software and tools</h5>
                                    <p>Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.</p>
                                    <br />
                                    <h5 id="resources">Other resources</h5>
                                    <p>Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.</p>
                                    <ol>
                                        <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                                        <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                                        <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                                    </ol>
                                    <ImgLoader src={Blog3img} width={850} height={480} alt="blog" />
                                    <p>Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.</p>
                                    <p>Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.</p>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First</th>
                                                <th scope="col">Last</th>
                                                <th scope="col">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br />
                                    <h3 id="conclusion">Conclusion</h3>
                                    <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                                    <p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
                                    <p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.</p>
                                    <p>Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>
                                    <br />
                                    <hr />
                                    <br />
                                    <div className="tag-box"><span>Design</span><span>Research</span></div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                
            </div>
            <div className='home-usa blogsingle'>
                    <CaseStudiessection />
                </div>
        </Layout>
    )
}