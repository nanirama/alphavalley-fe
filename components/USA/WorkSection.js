import ImgLoader from '../Image'

import WorkImg1 from "../../assets/images/work-img1.png"
import WorkImg2 from "../../assets/images/work-img2.png"
import WorkImg3 from "../../assets/images/work-img3.png"
import WorkImg4 from "../../assets/images/work-img4.png"
import iterations from "../../assets/images/svg/iterations-01.svg"

export default function Worksection() {

    return (
        <div className="home-in">
            <div className="work-section">
                <div className="container">
                    <div className="heading">
                        <h3>How does it work?</h3>
                        <p>Investor pitch deck consulting process at AlphaValley</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="box">
                                <div className="icon d-flex justify-content-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 488" fill="#fff"><path d="M124.919 410.001 63.922 471c-3.9 3.9-3.9 10.2 0 14.1 2 1.9 4.5 2.9 7.1 2.9 2.5 0 5.1-1 7-2.9l60.997-60.999c3.9-3.9 3.9-10.2 0-14.1s-10.201-3.9-14.1 0zM78.021 349.002a9.957 9.957 0 0 0-14.099 0L2.925 410.001c-3.9 3.9-3.9 10.2 0 14.1 2 1.9 4.5 2.9 7.1 2.9s5.1-1 7-2.9l60.997-60.999a9.96 9.96 0 0 0-.001-14.1zM485.1 2.906c-1.9-1.9-4.5-3-7.2-2.9-1.5 0-37.898.5-85.796 12.3-44.498 10.9-107.495 34-155.092 82.099-23.899 23.9-41.598 51.499-54.797 78.599H61.122c-4.3 0-8.1 2.8-9.5 6.8l-30.498 91.499c-1 3-.5 6.4 1.4 9s4.9 4.2 8.1 4.2h117.094c-4.9 29.7-5.2 49.799-5.2 50.899 0 2.7 1 5.3 2.9 7.2s4.4 2.9 7.1 2.9h.1c1.1 0 21.199-.3 50.897-5.2V457.4c0 3.2 1.5 6.2 4.2 8.1 1.7 1.2 3.8 1.9 5.8 1.9 1.1 0 2.1-.2 3.2-.5l91.495-30.5c4.1-1.4 6.8-5.2 6.8-9.5V305.802c27.099-13.1 54.697-30.8 78.596-54.699 48.098-47.699 71.196-110.699 82.096-155.098C487.5 48.106 488 11.706 488 10.206c0-2.8-1-5.4-2.9-7.3zM151.617 264.503H44.523l23.799-71.499h104.995c-8.4 20.4-14.299 39.899-18.399 56.799-1.201 5-2.301 9.9-3.301 14.7zM295.01 419.701l-71.496 23.8V336.502c4.8-1 9.6-2.1 14.699-3.3 16.899-4.1 36.398-10.1 56.797-18.4v104.899zM456.202 91.705c-10.299 41.799-31.998 100.899-76.696 145.198-44.698 44.699-103.795 66.399-145.493 76.699-30.798 7.6-56.997 10.3-70.796 11.3 2.4-34.3 15.799-144.198 87.996-216.397 44.298-44.699 103.395-66.399 145.193-76.699 30.898-7.6 57.197-10.4 71.096-11.3-1.001 13.9-3.701 40.199-11.3 71.199z" /><path d="M315.609 122.005c0 27.8 22.599 50.399 50.397 50.399 27.699 0 50.397-22.6 50.397-50.399s-22.599-50.399-50.397-50.399-50.397 22.599-50.397 50.399zm80.796 0c0 16.5-13.899 30.4-30.398 30.4s-30.398-13.9-30.398-30.4 13.899-30.4 30.398-30.4c16.398 0 30.398 14 30.398 30.4z" /></svg>
                                </div>
                                <div className="content">
                                    <h6>Project kick-off</h6>
                                    <p>Agreement on terms of engagement.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="box">
                                <div className="icon d-flex justify-content-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.286 430.286" fill="#fff"><path d="M354.058 327.794V48a8 8 0 0 0-8-8h-59.5V8a8 8 0 0 0-8-8h-135a8 8 0 0 0-8 8v32h-59.5a8 8 0 0 0-8 8v374.286a8 8 0 0 0 8 8h270a8 8 0 0 0 8-8v-46.46c5.118-6.661 8.17-14.987 8.17-24.016s-3.052-17.355-8.17-24.016zM151.558 16h119v24h-119V16zm186.5 398.286h-254V56h254v259.407a39.271 39.271 0 0 0-15.33-3.097h-1V80a8 8 0 0 0-8-8h-205.7a8 8 0 0 0-8 8v271.81c0 21.78 17.72 39.5 39.5 39.5h183.2a39.29 39.29 0 0 0 15.33-3.097v26.073zm-198.53-85.976c12.958 0 23.5 10.542 23.5 23.5s-10.542 23.5-23.5 23.5-23.5-10.542-23.5-23.5V88h189.7v224.31h-166.2a8 8 0 0 0 0 16zm183.2 47H171.254a39.287 39.287 0 0 0 7.773-23.5 39.283 39.283 0 0 0-7.769-23.5h151.47c12.958 0 23.5 10.542 23.5 23.5s-10.542 23.5-23.5 23.5z" /><path d="M148.058 186.918H197a8 8 0 0 0 8-8v-48.941a8 8 0 0 0-8-8h-48.941a8 8 0 0 0-8 8v48.941a7.999 7.999 0 0 0 7.999 8zM189 137.977v32.941h-32.941l-.001-32.941H189zM228.308 148.393h51a8 8 0 0 0 0-16h-51a8 8 0 0 0 0 16zM228.308 177.143h51a8 8 0 0 0 0-16h-51a8 8 0 0 0 0 16zM148.058 276.585H197a8 8 0 0 0 8-8v-48.942a8 8 0 0 0-8-8h-48.941a8 8 0 0 0-8 8v48.942a7.999 7.999 0 0 0 7.999 8zM189 227.643v32.942h-32.941l-.001-32.942H189zM228.308 238.06h51a8 8 0 0 0 0-16h-51a8 8 0 0 0 0 16zM228.308 266.81h51a8 8 0 0 0 0-16h-51a8 8 0 0 0 0 16z" /></svg>
                                </div>
                                <div className="content">
                                    <h6>Immersion</h6>
                                    <p>Expectation setting and questionnaire discussion with the founder(s).</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="box">
                                <div className="icon d-flex justify-content-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="#fff"><path d="M60 4H31V1a1 1 0 1 0-2 0v3H0v42h27.586L15.293 58.293a.999.999 0 1 0 1.414 1.414L29 47.414V57a1 1 0 1 0 2 0v-9.586l12.293 12.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L32.414 46H60V4zm-2 40H2V6h56v38z" /><path d="M36 42a1 1 0 0 0 1-1v-3a1 1 0 1 0-2 0v3a1 1 0 0 0 1 1zM40 33a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1zM44 35a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1zM48 28a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V29a1 1 0 0 0-1-1zM52 32a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0v-8a1 1 0 0 0-1-1zM8 38h10a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2zM8 42h15a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2zM39 15h8a1 1 0 1 0 0-2h-8a1 1 0 1 0 0 2zM51.3 13.29a.977.977 0 0 0-.3.71c0 .27.109.53.29.7.189.19.439.3.71.3.26 0 .52-.11.71-.29.18-.19.29-.45.29-.71s-.11-.521-.29-.71c-.38-.37-1.061-.36-1.41 0zM49 10h3a1 1 0 1 0 0-2h-3a1 1 0 1 0 0 2zM39 10h2a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2zM45 10c.27 0 .52-.11.71-.29.18-.19.29-.44.29-.71 0-.271-.11-.521-.29-.71-.37-.37-1.061-.37-1.42 0-.181.189-.29.439-.29.71 0 .27.109.52.29.71.189.18.439.29.71.29zM26.85 27.385a11.454 11.454 0 0 0 3.066-6.41l-9.47.006 6.404 6.404z" /><path d="M18.525 30.975a11.42 11.42 0 0 0 6.822-2.264l-7.637-7.733-.685-.003v-.919a51 51 0 0 0 .001-1.046l-.001-10.926c-5.633.739-10 5.559-10 11.391 0 6.34 5.16 11.5 11.5 11.5z" /><path d="M19.025 8v10.975H30C29.743 13.034 24.966 8.257 19.025 8z" /></svg>
                                </div>
                                <div className="content">
                                    <h6>Pitch deck creation</h6>
                                    <p>AlphaValley team crafts the deck, shares the interim deliverable with you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="box">
                                <div className="icon d-flex justify-content-center items-center">
                                    <ImgLoader src={iterations} width="32" height="32" />
                                </div>
                                <div className="content">
                                    <h6>Iterations</h6>
                                    <p>We collaborate closely with the founders to fine tune the final deliverable.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}