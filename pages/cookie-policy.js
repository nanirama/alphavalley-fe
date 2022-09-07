import Layout from "../components/layout"
import Seo from '../components/seo'
import { fetchAPI } from "../lib/api";
export default function CookiePolicy({data}) {
   const { MetaData } = data.attributes
   return (
      <Layout>
         <Seo seo={MetaData[0]}/>
         <div className='legal'>
            <div className="container">
               <div className="heading">
                  <span>Current as of 20 Jan 2022</span>
                  <h1>Cookie Policy</h1>
               </div>
               <div className="content-box">
                  <div className="row content">
                     <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
                        <p>AlphaValley Advisors LLP (“we” or “us” or “our”) may use cookies, web beacons, tracking pixels, and other tracking technologies when you visit our website www.alphavalley.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”) to help customize the Site and improve your experience.</p>
                        <p>We reserve the right to make changes to this Cookie Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Cookie Policy. Any changes or modifications will be effective immediately upon posting the updated Cookie Policy on the Site, and you waive the right to receive specific notice of each such change or modification.</p>
                        <p>You are encouraged to periodically review this Cookie Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Cookie Policy by your continued use of the Site after the date such revised Cookie Policy is posted.</p>
                        <p>This Cookie Policy was created using Termly’s Cookie Consent Manager.</p>
                        <hr />
                        <div className="box">
                           <b>Use of Cookies</b>
                           <p>A “cookie” is a string of information which assigns you a unique identifier that we store on your computer. Your browser then provides that unique identifier to use each time you submit a query to the Site. We use cookies on the Site to, among other things, keep track of services you have used, record registration information, record your user preferences, keep you logged into the Site, facilitate purchase procedures, and track the pages you visit. Cookies help us understand how the Site is being used and improve your user experience.</p>
                           <b>Types of Cookies</b>
                           <p>The following types of cookies may be used when you visit the Site:</p>
                           <b>Advertising Cookies</b>
                           <p>Advertising cookies are placed on your computer by advertisers and ad servers in order to display advertisements that are most likely to be of interest to you. These cookies allow advertisers and ad servers to gather information about your visits to the Site and other websites, alternate the ads sent to a specific computer, and track how often an ad has been viewed and by whom. These cookies are linked to a computer and do not gather any personal information about you.</p>
                           <b>Analytics Cookies</b>
                           <p>Analytics cookies monitor how users reached the Site, and how they interact with and move around once on the Site. These cookies let us know what features on the Site are working the best and what features on the Site can be improved.</p>
                           <b>Our Cookies</b>
                           <p>Our cookies are “first-party cookies”, and can be either permanent or temporary. These are necessary cookies, without which the Site won’t work properly or be able to provide certain features and functionalities. Some of these may be manually disabled in your browser, but may affect the functionality of the Site.</p>
                           <b>Personalization Cookies</b>
                           <p>Personalization cookies are used to recognize repeat visitors to the Site. We use these cookies to record your browsing history, the pages you have visited, and your settings and preferences each time you visit the Site.</p>
                           <b>Security Cookies</b>
                           <p>Security cookies help identify and prevent security risks. We use these cookies to authenticate users and protect user data from unauthorized parties.</p>
                           <b>Site Management Cookies</b>
                           <p>Site management cookies are used to maintain your identity or session on the Site so that you are not logged off unexpectedly, and any information you enter is retained from page to page. These cookies cannot be turned off individually, but you can disable all cookies in your browser.</p>
                           <b>Third-Party Cookies</b>
                           <p>Third-party cookies may be place on your computer when you visit the Site by companies that run certain services we offer. These cookies allow the third parties to gather and track certain information about you. These cookies can be manually disabled in your browser.</p>
                           <b>Control of Cookies</b>
                           <p>Most browsers are set to accept cookies by default. However, you can remove or reject cookies in your browser’s settings. Please be aware that such action could affect the availability and functionality of the Site.</p>
                           <p>For more information on how to control cookies, check your browser or device’s settings for how you can control or reject cookies, or visit the following links:</p>
                           <ul>
                              <li>Apple Safari</li>
                              <li>Google Chrome</li>
                              <li>Microsoft Edge</li>
                              <li>Microsoft Internet Explorer</li>
                              <li>Mozilla Firefox</li>
                              <li>Opera</li>
                              <li>Android (Chrome)</li>
                              <li>Blackberry</li>
                              <li>Iphone or Ipad (Chrome)</li>
                              <li>Iphone or Ipad (Safari)</li>
                           </ul>
                           <p>In addition, you may opt-out of some third-party cookies through the Network Advertising Initiative’s Opt-Out Tool.</p>
                           <b>Other Tracking Technologies</b>
                           <p>In addition to cookies, we may use web beacons, pixel tags, and other tracking technologies on the Site to help customize the Site and improve your experience. A “web beacon” or “pixel tag” is tiny object or image embedded in a web page or email. They are used to track the number of users who have visited particular pages and viewed emails, and acquire other statistical data. They collect only a limited set of data, such as a cookie number, time and date of page or email view, and a description of the page or email on which they reside. Web beacons and pixel tags cannot be declined. However, you can limit their use by controlling the cookies that interact with them.</p>
                           <b>Privacy Policy</b>
                           <p>For more information about how we use information collected by cookies and other tracking technologies, please refer to our Privacy Policy [Link] posted on the Site. This Cookie Policy is part of and is incorporated into our Privacy Policy. By using the Site, you agree to be bound by this Cookie Policy and our Privacy Policy.</p>
                           <b>Contact Us</b>
                           <p>If you have questions or comments about this Cookie Policy, please contact us through email with subject line as: “Regarding Your Cookie Policy”</p>
                           <p>ALPHAVALLEY ADVISORS LLP  B-1003 REELICON FELICIA  BANER PASHAN LINK ROAD  PUNE – 411021, INDIA</p>
                           <p>Email: hello [at] alphavalley [dot] co</p>
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
   const pageData = await fetchAPI("/api/display-pages?filters[slug][$eq]=cookie-policy&populate=*");
   return {
       props: {
       data: pageData.data[0]
       },
       revalidate: 1,
   };
}