import ImgLoader from '../Image'



export default function Investerdeck() {

    return (
        <>
            <div className="why-section">
                <div className="container">
                    <h1>What does financial modelling entail?</h1>
                    <p>What makes a document worthy of securing a meeting with investors? <br/>Top Venture Capitalists advise that a VC-grade investor pitch deck should be</p>
                    <div className="content-section">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="content">
                                    <div className="content-icons">
                                        <div className="inner-box">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.52 491.52" width="24" height="24" fill="#444ce7"><path d="M491.52 419.84V61.44h-82.513L378.88 24.85l-30.72 37.31v183.6h61.44V81.92h61.44v256H20.48v-256h61.44v184.32H61.44v20.48h368.64v-20.48h-102.4V0H81.92v61.44H0v358.4h153.6v51.2h-40.96v20.48h266.24v-20.48h-40.96v-51.2h153.6zm-102.4-194.56h-20.48V204.8h20.48v20.48zm0-40.96h-20.48V102.4h20.48v81.92zm0-102.4h-20.48V69.5l10.24-12.43 10.24 12.43v12.42zM102.4 20.48h204.8v245.76H102.4V20.48zm215.04 450.56H174.08v-51.2h143.36v51.2zM20.48 399.36V358.4h450.56v40.96H20.48z" /><path d="M122.88 40.96V153.6h163.84V40.96H122.88zm118.737 20.48L204.8 85.109 167.982 61.44h73.635zm-98.257 8.514 42.507 27.326-42.507 27.326V69.954zm24.622 63.166 36.818-23.669 36.818 23.669h-73.636zm98.258-8.514L223.733 97.28l42.507-27.326v54.652zM125.952 184.32h157.696v20.48H125.952zM159.744 225.28h90.122v20.48h-90.122z" /></svg>
                                        </div>
                                    </div>
                                    <h5>Top-down forecasting</h5>
                                    <p>Macro to micro view approach (TAM, SAM, SOM metrics) for forecasting the startup business.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="content">
                                    <div className="content-icons">
                                        <div className="inner-box">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.52 491.52" width="24" height="24" fill="#444ce7"><path d="M491.52 419.84V61.44h-82.513L378.88 24.85l-30.72 37.31v183.6h61.44V81.92h61.44v256H20.48v-256h61.44v184.32H61.44v20.48h368.64v-20.48h-102.4V0H81.92v61.44H0v358.4h153.6v51.2h-40.96v20.48h266.24v-20.48h-40.96v-51.2h153.6zm-102.4-194.56h-20.48V204.8h20.48v20.48zm0-40.96h-20.48V102.4h20.48v81.92zm0-102.4h-20.48V69.5l10.24-12.43 10.24 12.43v12.42zM102.4 20.48h204.8v245.76H102.4V20.48zm215.04 450.56H174.08v-51.2h143.36v51.2zM20.48 399.36V358.4h450.56v40.96H20.48z" /><path d="M122.88 40.96V153.6h163.84V40.96H122.88zm118.737 20.48L204.8 85.109 167.982 61.44h73.635zm-98.257 8.514 42.507 27.326-42.507 27.326V69.954zm24.622 63.166 36.818-23.669 36.818 23.669h-73.636zm98.258-8.514L223.733 97.28l42.507-27.326v54.652zM125.952 184.32h157.696v20.48H125.952zM159.744 225.28h90.122v20.48h-90.122z" /></svg>
                                        </div>
                                    </div>
                                    <h5>Bottom-up forecasting</h5>
                                    <p>An inside-out view that extrapolates internal assumptions to form a macro view.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="content">
                                    <div className="content-icons">
                                        <div className="inner-box">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.52 491.52" width="24" height="24" fill="#444ce7"><path d="M491.52 419.84V61.44h-82.513L378.88 24.85l-30.72 37.31v183.6h61.44V81.92h61.44v256H20.48v-256h61.44v184.32H61.44v20.48h368.64v-20.48h-102.4V0H81.92v61.44H0v358.4h153.6v51.2h-40.96v20.48h266.24v-20.48h-40.96v-51.2h153.6zm-102.4-194.56h-20.48V204.8h20.48v20.48zm0-40.96h-20.48V102.4h20.48v81.92zm0-102.4h-20.48V69.5l10.24-12.43 10.24 12.43v12.42zM102.4 20.48h204.8v245.76H102.4V20.48zm215.04 450.56H174.08v-51.2h143.36v51.2zM20.48 399.36V358.4h450.56v40.96H20.48z" /><path d="M122.88 40.96V153.6h163.84V40.96H122.88zm118.737 20.48L204.8 85.109 167.982 61.44h73.635zm-98.257 8.514 42.507 27.326-42.507 27.326V69.954zm24.622 63.166 36.818-23.669 36.818 23.669h-73.636zm98.258-8.514L223.733 97.28l42.507-27.326v54.652zM125.952 184.32h157.696v20.48H125.952zM159.744 225.28h90.122v20.48h-90.122z" /></svg>
                                        </div>
                                    </div>
                                    <h5>Pro forma statements</h5>
                                    <p>Profit and Loss Statement (P&L), Balance Sheet and Cash Flow Statement for fundraising.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="content">
                                    <div className="content-icons">
                                        <div className="inner-box">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.52 491.52" width="24" height="24" fill="#444ce7"><path d="M491.52 419.84V61.44h-82.513L378.88 24.85l-30.72 37.31v183.6h61.44V81.92h61.44v256H20.48v-256h61.44v184.32H61.44v20.48h368.64v-20.48h-102.4V0H81.92v61.44H0v358.4h153.6v51.2h-40.96v20.48h266.24v-20.48h-40.96v-51.2h153.6zm-102.4-194.56h-20.48V204.8h20.48v20.48zm0-40.96h-20.48V102.4h20.48v81.92zm0-102.4h-20.48V69.5l10.24-12.43 10.24 12.43v12.42zM102.4 20.48h204.8v245.76H102.4V20.48zm215.04 450.56H174.08v-51.2h143.36v51.2zM20.48 399.36V358.4h450.56v40.96H20.48z" /><path d="M122.88 40.96V153.6h163.84V40.96H122.88zm118.737 20.48L204.8 85.109 167.982 61.44h73.635zm-98.257 8.514 42.507 27.326-42.507 27.326V69.954zm24.622 63.166 36.818-23.669 36.818 23.669h-73.636zm98.258-8.514L223.733 97.28l42.507-27.326v54.652zM125.952 184.32h157.696v20.48H125.952zM159.744 225.28h90.122v20.48h-90.122z" /></svg>
                                        </div>
                                    </div>
                                    <h5>Operational cash flow</h5>
                                    <p>A crucial part of the fundraising packet, unearths the monthly cash inflows and outflows.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="content">
                                    <div className="content-icons">
                                        <div className="inner-box">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.52 491.52" width="24" height="24" fill="#444ce7"><path d="M491.52 419.84V61.44h-82.513L378.88 24.85l-30.72 37.31v183.6h61.44V81.92h61.44v256H20.48v-256h61.44v184.32H61.44v20.48h368.64v-20.48h-102.4V0H81.92v61.44H0v358.4h153.6v51.2h-40.96v20.48h266.24v-20.48h-40.96v-51.2h153.6zm-102.4-194.56h-20.48V204.8h20.48v20.48zm0-40.96h-20.48V102.4h20.48v81.92zm0-102.4h-20.48V69.5l10.24-12.43 10.24 12.43v12.42zM102.4 20.48h204.8v245.76H102.4V20.48zm215.04 450.56H174.08v-51.2h143.36v51.2zM20.48 399.36V358.4h450.56v40.96H20.48z" /><path d="M122.88 40.96V153.6h163.84V40.96H122.88zm118.737 20.48L204.8 85.109 167.982 61.44h73.635zm-98.257 8.514 42.507 27.326-42.507 27.326V69.954zm24.622 63.166 36.818-23.669 36.818 23.669h-73.636zm98.258-8.514L223.733 97.28l42.507-27.326v54.652zM125.952 184.32h157.696v20.48H125.952zM159.744 225.28h90.122v20.48h-90.122z" /></svg>
                                        </div>
                                    </div>
                                    <h5>Key metrics / KPIs</h5>
                                    <p>Revenue growth, EBITDA, Burn rate, and LTV/CAC, and several others to boost investor’s confidence.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="content">
                                    <div className="content-icons">
                                        <div className="inner-box">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.52 491.52" width="24" height="24" fill="#444ce7"><path d="M491.52 419.84V61.44h-82.513L378.88 24.85l-30.72 37.31v183.6h61.44V81.92h61.44v256H20.48v-256h61.44v184.32H61.44v20.48h368.64v-20.48h-102.4V0H81.92v61.44H0v358.4h153.6v51.2h-40.96v20.48h266.24v-20.48h-40.96v-51.2h153.6zm-102.4-194.56h-20.48V204.8h20.48v20.48zm0-40.96h-20.48V102.4h20.48v81.92zm0-102.4h-20.48V69.5l10.24-12.43 10.24 12.43v12.42zM102.4 20.48h204.8v245.76H102.4V20.48zm215.04 450.56H174.08v-51.2h143.36v51.2zM20.48 399.36V358.4h450.56v40.96H20.48z" /><path d="M122.88 40.96V153.6h163.84V40.96H122.88zm118.737 20.48L204.8 85.109 167.982 61.44h73.635zm-98.257 8.514 42.507 27.326-42.507 27.326V69.954zm24.622 63.166 36.818-23.669 36.818 23.669h-73.636zm98.258-8.514L223.733 97.28l42.507-27.326v54.652zM125.952 184.32h157.696v20.48H125.952zM159.744 225.28h90.122v20.48h-90.122z" /></svg>
                                        </div>
                                    </div>
                                    <h5>Stress testing</h5>
                                    <p>Scenario-analysis and stress-test methods that enable institutional investors to have a plan that considers adversities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}