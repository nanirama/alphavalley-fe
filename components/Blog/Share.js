import React from 'react';
import ImgLoader from '../Image'
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    RedditShareButton
} from 'react-share';

import Linkedin from "../../assets/images/linkedin.png"
import Twitter from "../../assets/images/twitter.png"
import Fbicon from "../../assets/images/fb.png"
import Instagram from "../../assets/images/instagram.png"

const Share = ({ socialConfig, tags }) => {
    return (
        <div className="sharing-button">
            {/* <RedditShareButton url={socialConfig.config.url} title={socialConfig.config.title} >
                <ImgLoader src={Linkedin} width={20} height={20} alt="Linkedin" />
            </RedditShareButton> */}
            <TwitterShareButton className="border rounded-lg p-2.5" url={socialConfig.config.url} quote={socialConfig.config.title}>
                {/* <ImgLoader src={Twitter} width={20} height={20} alt="Twitter" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#98a2b3"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </TwitterShareButton>
            <FacebookShareButton className="border rounded-lg p-2.5" url={socialConfig.config.url} quote={socialConfig.config.title} hashtag={""}>
                {/* <ImgLoader src={Fbicon} width={20} height={20} alt="Fbicon" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#98a2b3"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
            </FacebookShareButton>
            <LinkedinShareButton className="border rounded-lg p-2.5" url={socialConfig.config.url} quote={socialConfig.config.title}>
                {/* <ImgLoader src={Linkedin} width={20} height={20} alt="Linkedin" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#98a2b3"><path d="M16.949 7.051c.39.389.391 1.022.001 1.413l-8.485 8.486c-.392.391-1.023.391-1.414 0-.39-.39-.39-1.021.001-1.412l8.485-8.488c.39-.39 1.024-.387 1.412.001zm-5.805 10.043c-.164.754-.541 1.486-1.146 2.088l-1.66 1.66c-1.555 1.559-3.986 1.663-5.413.235-1.429-1.428-1.323-3.857.234-5.413l1.661-1.663c.603-.601 1.334-.98 2.087-1.144l1.934-1.934c-1.817-.306-3.829.295-5.313 1.783l-1.662 1.661c-2.342 2.34-2.5 5.978-.354 8.123 2.145 2.146 5.783 1.985 8.123-.354l1.66-1.66c1.486-1.487 2.089-3.496 1.783-5.314l-1.934 1.932zm3.222-15.231l-1.66 1.66c-1.486 1.488-2.089 3.499-1.783 5.317l1.935-1.935c.162-.753.54-1.485 1.146-2.087l1.66-1.66c1.556-1.559 3.984-1.663 5.413-.234 1.429 1.427 1.324 3.857-.233 5.415l-1.66 1.66c-.602.603-1.334.981-2.089 1.145l-1.934 1.934c1.818.306 3.827-.295 5.317-1.783l1.658-1.662c2.34-2.339 2.498-5.976.354-8.121-2.145-2.146-5.78-1.987-8.124.351z"/></svg>
            </LinkedinShareButton>
        </div>
    )
};

export default Share;