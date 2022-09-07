import Link from 'next/link'
import Layout from "../components/layout"
import Seo from '../components/seo'
import { fetchAPI } from "../lib/api";

export default function PrivacyPolicy({ data }) {
   const { MetaData } = data.attributes
   return (
      <Layout>
         <Seo seo={MetaData[0]} />
         <div className='legal' >
            <div className="container">
               <div className="heading">
                  <span>Current as of 20 Jan 2022</span>
                  <h1>Privacy Policy</h1>
                  <p>Your privacy is important to us at Untitled. We respect your privacy regarding any information we may collect from you across our website.</p>
               </div>
               <div className="content-box">
                  <div className="row content">
                     <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
                        <p>Thank you for choosing to be part of our community at AlphaValley Advisors LLP (“company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at hello at alphavalley.co.</p>
                        <p>When you visit our website [<Link href="/"><a>www.alphavalley.co</a></Link>] and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our site and our services.</p>
                        <p>This privacy policy applies to all information collected through our websites (such as [<Link href="/"><a>www.alphavalley.co/about-us</a></Link>]), [our mobile] [or] [our Facebook applications] (“Apps“), and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the “Sites“).</p>
                        <b>Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.</b>
                        <div className="box">
                           <h3>What information do we collect?</h3>
                           <b>Personal information you disclose to us </b>
                           <p>We collect personal information that you voluntarily provide to us when [registering at the Sites or Apps,] expressing an interest in obtaining information about us or our products and services, when participating in activities on the Sites [(such as posting messages in our online forums or entering competitions, contests or giveaways)] or otherwise contacting us.</p>
                           <p>The personal information that we collect depends on the context of your interactions with us and the Sites, the choices you make and the products and features you use. The personal information we collect can include the following:</p>
                           <p><b>Name and Contact Data.</b> We collect your first and last name, email address, postal address, phone number, and other similar contact data.</p>
                           <p><b>Credentials.</b> We collect passwords, password hints, and similar security information used for authentication and account access.</p>
                           <p><b>Payment Data.</b> We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by our payment processor and you should review its privacy policies and contact the payment processor directly to respond to your questions.</p>
                           <p><b>Social Media Login Data.</b> We provide you with the option to register using social media account details, like your Facebook, Twitter or other social media account. If you choose to register in this way, we will collect the Information described in the section called “Social Logins” [<Link href="/"><a>LINK</a></Link>] below.</p>
                           <p>All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.</p>
                           <b>Information automatically collected</b>
                           <p><b>In Short:</b> Some information – such as IP address and/or browser and device characteristics – is collected automatically when you visit our websites. us.</p>
                           <p>We automatically collect certain information when you visit, use or navigate the Sites. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Site and other technical information. This information is primarily needed to maintain the security and operation of our Sites, and for our internal analytics and reporting purposes.</p>
                           <p>Like many businesses, we also collect information through cookies and similar technologies. [You can find out more about this in our Cookies Policy [<Link href="/"><a>Link</a></Link>].</p>
                           <b>Information collected from other Sources</b>
                           <p><b>In Short: </b> We may collect limited data from public databases, marketing partners, social media platforms, and other outside sources.</p>
                           <p>We may obtain information about you from other sources, such as public databases, joint marketing partners, social media platforms (such as Facebook), as well as from other third parties. Examples of the information we receive from other sources include: social media profile information (your name, gender, birthday, email, current city, state and country, user identification numbers for your contacts, profile picture URL and any other information that you choose to make public); marketing leads and search results and links, including paid listings (such as sponsored links).</p>
                        </div>
                        <div className="box">
                           <h3>How do we use your information?</h3>
                           <p><b>In Short: </b> We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</p>
                           <p>We use personal information collected via our Sites for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests (“Business Purposes”), in order to enter into or perform a contract with you (“Contractual”), with your consent (“Consent”), and/or for compliance with our legal obligations (“Legal Reasons”). We indicate the specific processing grounds we rely on next to each purpose listed below.</p>
                           <p>We use the information we collect or receive: </p>
                           <ul>
                              <li><b>To send you marketing and promotional communications</b>[for Business Purposes and/or with your Consent]. We and/or our third party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt-out of our marketing emails at any time (see the “Your Privacy Rights” below).</li>
                              <li><b>To send administrative information to you </b> [for Business Purposes, Legal Reasons and/or possibly Contractual]. We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.</li>
                              <li><b>Fulfill and manage your orders</b>[for Contractual reasons]. We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Sites.</li>
                              <li><b>To post testimonials</b>[with your Consent]. We post testimonials on our Sites that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and testimonial. If you wish to update, or delete your testimonial, please contact us at [hello [at] alphavalley [dot] co] and be sure to include your name, testimonial location, and contact information.</li>
                              <li><b>Deliver targeted advertising to you</b>[for our Business Purposes and/or with your Consent]. We may use your information to develop and display content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness. [For more information, see our Cookie Policy [<Link href="/"><a>HYPERLINK</a></Link>]].</li>
                              <li><b>Administer prize draws and competitions</b> [for our Business Purposes and/or with your Consent]. We may use your information to administer prize draws and competitions when you elect to participate in competitions.</li>
                              <li><b>Request Feedback </b> [for our Business Purposes and/or with your Consent]. We may use your information to request feedback and to contact you about your use of our Sites.</li>
                              <li><b>To protect our Sites </b>[for Business Purposes and/or Legal Reasons]. We may use your information as part of our efforts to keep our Sites safe and secure (for example, for fraud monitoring and prevention).</li>
                              <li><b>To enable user-to-user communications</b>[with your consent]. We may use your information in order to enable user-to-user communications with each user’s consent.</li>
                              <li><b>To enforce our terms, conditions and policies</b>[for Business Purposes, Legal Reasons and/or possibly Contractual].</li>
                              <li><b>To respond to legal requests and prevent harm</b>[for Legal Reasons]. If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.</li>
                              <li><b>For other Business Purposes.</b>We may use your information for other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Sites, products, services, marketing and your experience.</li>
                           </ul>
                        </div>
                        <div className="box">
                           <h3>Will your information be shared with anyone?</h3>
                           <p><b>In Short: </b>We only share information with your consent, to comply with laws, to protect your rights, or to fulfill business obligations.</p>
                           <p>We only share and disclose your information in the following situations:</p>
                           <ul>
                              <li><b>Compliance with Laws. </b>We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
                              <li><b>Vital Interests and Legal Rights. </b>We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
                              <li><b>Vendors, Consultants and Other Third-Party Service Providers.</b>We may share your data with third party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the Sites, which will enable them to collect data about how you interact with the Sites over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content and better understand online activity. Unless described in this Policy, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes.</li>
                              <li><b>Business Transfers. </b>We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                              <li><b>Third-Party Advertisers. </b>We may use third-party advertising companies to serve ads when you visit the Sites. These companies may use information about your visits to our Website(s) and other websites that are contained in web cookies and other tracking technologies in order to provide advertisements about goods and services of interest to you. [See our Cookie Policy [<Link href="/"><a>Hyperlink</a></Link>] for further information]</li>
                              <li><b>Affiliates. </b>We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.</li>
                              <li><b>Business Partners. </b>We may share your information with our business partners to offer you certain products, services or promotions.</li>
                              <li><b>With your Consent. </b>We may disclose your personal information for any other purpose with your consent.</li>
                              <li><b>Other Users. </b>When you share personal information (for example, by posting comments, contributions or other content to the Sites) or otherwise interact with public areas of the Site [or App], such personal information may be viewed by all users and may be publicly distributed outside the Site [and our App] in perpetuity. [If you interact with other users of our Sites and register through a social network (such as Facebook), your contacts on the social network will see your name, profile photo, and descriptions of your activity.] Similarly, other users will be able to view descriptions of your activity, communicate with you within our Sites, and view your profile.</li>
                           </ul>
                        </div>
                        <div className="box">
                           <h3>Do we use cookies and other tracking technologies?</h3>
                           <p><b>In Short: </b>We may use cookies and other tracking technologies to collect and store your information.</p>
                        </div>
                        <div className="box">
                           <h3>Is your information transferred internationally?</h3>
                           <p><b>In Short: </b>We may transfer, store, and process your information in countries other than your own.</p>
                           <p>Our servers are located in [Bangalore, India]. If you are accessing our Sites from outside Bangalore, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see “Disclosure of Your Information” above), in US, UK, Europe, Canada, Singapore, Australia, Hong Kong and other countries .</p>
                           <p>If you are a resident in the European Economic Area, then these countries may not have data protection or other laws as comprehensive as those in your country. We will however take all necessary measures to protect your personal information in accordance with this privacy policy and applicable law.</p>
                           <p>EU-U.S. Privacy Shield Framework (use this if you choose the Privacy shield framework as a ground for international transfers:</p>
                           <p>In particular AlphaValley Advisors complies with the EU-U.S. Privacy Shield Framework as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of personal information transferred from the European Union to the United States and has certified its compliance with it. As such, AlphaValley Advisors is committed to subjecting all personal information received from European Union (EU) member countries, in reliance on the Privacy Shield Framework, to the Framework’s applicable Principles. To learn more about the Privacy Shield Framework, visit the U.S. Department of Commerce’s Privacy Shield List.</p>
                           <p>AlphaValley Advisors is responsible for the processing of personal information it receives, under the Privacy Shield Framework, and subsequently transfers to a third party acting as an agent on its behalf.</p>
                           <p>With respect to personal information received or transferred pursuant to the Privacy Shield Framework, AlphaValley is subject to the regulatory enforcement powers of the U.S. FTC. In certain situations, we may be required to disclose personal information in response to lawful requests by public authorities, including to meet national security or law enforcement requirements.</p>
                        </div>
                        <div className="box">
                           <h3>What is our stance on third-party websites?</h3>
                           <p><b>In Short: </b>We are not responsible for the safety of any information that you share with third-party providers who advertise, but are not affiliated with, our websites.</p>
                           <p>The Sites may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services or mobile applications. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy policy. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services or applications that may be linked to or from the Sites. You should review the policies of such third parties and contact them directly to respond to your questions.</p>
                        </div>
                        <div className="box">
                           <h3>How long do you keep your information?</h3>
                           <p><b>In Short: </b>How long do you keep your information? We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.</p>
                           <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this policy will require us keeping your personal information for longer than [90 days/6 months/1 year/2 years/the period of time in which you have an account with us/90 days past the termination of your account/6 months past the termination of your account/1 year past the termination of your account/2 years past the termination of your account].</p>
                           <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
                        </div>
                        <div className="box">
                           <h3>How do we keep your information safe?</h3>
                           <p><b>In Short: </b>We aim to protect your personal information through a system of organizational and technical security measures.</p>
                           <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Sites is at your own risk. You should only access the services within a secure environment.</p>
                        </div>
                        <div className="box">
                           <h3>Do we collect information from minors?</h3>
                           <p><b>In Short: </b>We do not knowingly collect data from or market to children under 18 years of age.</p>
                           <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Sites, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Site. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at hello @<Link href="/"><a>alphavalley.co</a></Link>.</p>
                        </div>
                        <div className="box">
                           <h3>What are your privacy rights?</h3>
                           <p><b>In Short: </b> [In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal information.] You may review, change, or terminate your account at any time.</p>
                           <p>[In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.</p>
                           <p>If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the processing before its withdrawal.</p>
                           <p>If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: [<a target="_blank" rel="noopener noreferrer" href=" http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>]</p>
                        </div>
                        <div className="box">
                           <h3>Account Information</h3>
                           <p>You may at any time review or change the information in your account or terminate your account by:</p>
                           <ul>
                              <li>Logging into your account settings and updating your account</li>
                              <li>Contacting us using the contact information provided below</li>
                              <li>[Other]</li>
                           </ul>
                           <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.]</p>
                           <p><b>Cookies and similar technologies: </b>Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Sites.</p>
                           <p><b>Opting out of email marketing: </b>You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list – however, we will still need to send you service-related emails that are necessary for the administration and use of your account. You can also opt-out by:</p>
                           <ul>
                              <li>Noting your preferences at the time you register your account with the Sites.</li>
                              <li>Logging into your account settings and updating your preferences.</li>
                              <li>Contacting us using the contact information provided below</li>
                           </ul>
                        </div>
                        <div className="box">
                           <h3>Do California residents have specific rights?</h3>
                           <p><b>In Short: </b>Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
                           <p>California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>
                           <p>If you are under 18 years of age, reside in California, and have a registered account with the [Sites/ Mobile Application/ Facebook Application], you have the right to request removal of unwanted data that you publicly post on the [Sites/ Mobile Application/ Facebook Application]. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the [Sites/ Mobile Application/ Facebook Application], but please be aware that the data may not be completely or comprehensively removed from our systems.</p>
                        </div>
                        <div className="box">
                           <h3>Do we make updates to this policy?</h3>
                           <p><b>In Short: </b>Yes, we will update this policy as necessary to stay compliant with relevant laws.</p>
                           <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>
                        </div>
                        <div className="box">
                           <h3>How can you contact us about this policy?</h3>
                           <p>If you have questions or comments about this policy, email our legal/admin team at hello [at] alphavalley [dot] co or by post to:</p>
                           <p>ALPHAVALLEY ADVISORS LLP B 1003 REELICON FELICIA BANER PASHAN LINK ROAD PUNE, 411021 INDIA</p>
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
   const pageData = await fetchAPI("/api/display-pages?filters[slug][$eq]=privacy-policy&populate=*");
   return {
      props: {
         data: pageData.data[0]
      },
      revalidate: 1,
   };
}