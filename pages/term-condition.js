import Layout from "../components/layout"
import Seo from '../components/seo'
import ImgLoader from '../components/Image'

import Termcondition from "../assets/images/term-condition.png"
import { fetchAPI } from "../lib/api";
export default function termsofcondition({data}) {
   const { MetaData } = data.attributes
   return (
      <Layout>
         <Seo seo={MetaData[0]}/>
         <div className='legal'>
            <div className="container">
               <div className="heading">
                  <span>Current as of 20 Jan 2022</span>
                  <h1>Terms of Condition</h1>
                  <p>By acces sing our website, you are agreeing to be bound by these terms of service, and agree that you are responsible for compliance with any applicable local laws.</p>
               </div>
               <div className="content-box">
                  <div className="row content">
                     <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
                        <div className="box">
                           <h3>Indicative deck contents</h3>
                           <ol>
                              <li>Cover</li>
                              <li>Elevator pitch – startup overview</li>
                              <li>Problem and existing alternatives</li>
                              <li>Proposed solution</li>
                              <li>Product/platform features </li>
                              <li>Market opportunity</li>
                              <li>Traction</li>
                              <li>Revenue and expense model</li>
                              <li>Why now [optional]</li>
                              <li>Market fit / Competition overview</li>
                              <li>Team</li>
                              <li>Financial projections [optional]</li>
                              <li>Ask and use of proceeds</li>
                              <li>Closing slide</li>
                           </ol>
                        </div>
                        <hr />
                        <div className="box">
                           <h3>Standard financial model template</h3>
                           <ol>
                              <li>Instructions</li>
                              <li>Assumptions / model drivers</li>
                              <li>Revenue model – Monthly [36 months]</li>
                              <li>Expenses – Monthly [36 months]</li>
                              <li>Cash flow – Monthly [36 months]</li>
                              <li>Standard charts</li>
                           </ol>
                        </div>
                        <div className="box">
                           <h3>Expectations from the deliverable</h3>
                           <p>Developing a persuasive investor presentation requires active collaboration from the client (startup’s founding team). To ensure complete transparency, we have laid down some expectations</p>
                           <b>What we do</b>
                           <ul>
                              <li>Enhance the narrative</li>
                              <li>Write and design the presentation</li>
                              <li>Ensure logical structure and flow of the presentation</li>
                              <li>Dig the vital market overview information through secondary research </li>
                              <li>Calibrate the value proposition </li>
                           </ul>
                           <b>What we don’t do</b>
                           <ul>
                              <li>Imagine product features / value proposition</li>
                              <li>Engage in customer/problem discovery process [we offer this service at an additional fee]</li>
                              <li>Conduct a detailed market research (neither primary nor secondary) unless promised in the scope document</li>
                              <li>Glamorous, pixel-perfect graphic design is not included in this package. We shall deliver a professional deliverable with minimalistic design as represented in some samples shared on the website (or shared by our sales representative). For specific design requirement, kindly get in touch with our sales team.</li>
                           </ul>
                        </div>
                        <hr />
                        <div className="box">
                           <h3>Terms of engagement: Engagement process</h3>
                           <table className="table table-striped">
                              <tbody>
                                 <tr>
                                    <th>Step</th>
                                    <th>Details</th>
                                 </tr>
                                 <tr>
                                    <th>1</th>
                                    <td>Client makes the advance deposit [40%], shares basic information about the startup and business model</td>
                                 </tr>
                                 <tr>
                                    <th>2</th>
                                    <td>Project kickoff: Questionnaire discussion, expectation setting, key requirements</td>
                                 </tr>
                                 <tr>
                                    <th>3</th>
                                    <td>AlphaValley submits the Interim deliverable (watermarked, non-editable files)</td>
                                 </tr>
                                 <tr>
                                    <th>4</th>
                                    <td>Major revision – Feedback discussion with the team</td>
                                 </tr>
                                 <tr>
                                    <th>5</th>
                                    <td> Client makes the second milestone payment [30%]</td>
                                 </tr>
                                 <tr>
                                    <th>6</th>
                                    <td>AlphaValley submits the draft deliverable (watermarked, non-editable files)</td>
                                 </tr>
                                 <tr>
                                    <th>7</th>
                                    <td>Minor revision(s) – Feedback discussion with the team</td>
                                 </tr>
                                 <tr>
                                    <th>8</th>
                                    <td>AlphaValley submits the final deliverable (watermarked, non-editable files)</td>
                                 </tr>
                                 <tr>
                                    <th>9</th>
                                    <td> Client makes the third milestone payment [30%]</td>
                                 </tr>
                                 <tr>
                                    <th>10</th>
                                    <td>AlphaValley submits the final deliverable files (editable)</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        <hr />
                        <div className="box">
                           <h3>Terms of engagement: Indicative timeline</h3>

                           <ImgLoader src={Termcondition} width={768} height={410} alt="author" />
                        </div>
                        <hr />
                        <div className="box">
                           <h3>What do you mean by major revision?</h3>
                           <p>Major revision means full revamp of the content of the deliverable(s). Major revision, if applicable, must be requested by the client within seven business days of receiving the interim deliverable. The client may request a major revision if they</p>
                           <ul>
                              <li>Are unsatisfied with the flow and language</li>
                              <li>Believe that some key highlights of the business/proposition are excluded or misrepresented</li>
                              <li>Believe that the team needs to conduct more in-depth research</li>
                           </ul>
                           <p><i>Important:</i> If the client has approved the interim deliverable once, any request for major iteration will attract an additional fee.</p>
                        </div>
                        <hr />
                        <div className="box">
                           <h3>What do you mean by minor revision?</h3>
                           <p>Minor revision means amendments, rephrasing, minor additions to content or design of the deliverable(s). Minor revisions, if applicable, must be requested by the client within seven business days of receiving the draft deliverable. The client may request a major revision if they</p>
                           <ul>
                              <li>Finds errors/omissions in the document</li>
                              <li>Believe that data/information presented in the deliverable is incorrect</li>
                           </ul>
                           <p><i>If the client has exhausted the requests for proposed number of minor revisions, any further request will attract an additional fee.</i></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </Layout>
   )
}

export async function getStaticProps() {
   const pageData = await fetchAPI("/api/display-pages?filters[slug][$eq]=terms-condtions&populate=*");
   return {
       props: {
       data: pageData.data[0]
       },
       revalidate: 1,
   };
}