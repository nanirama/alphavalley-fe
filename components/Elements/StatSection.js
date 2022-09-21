import ImgLoader from '../Image'

export default function Statsection() {

    return (
        <div className="stat-section">
            <div className="container">
                <div className="stat-box">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="box">
                                <h1>$100M+</h1>
                                <p>Funds raised by clients</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="box">
                                <h1>150</h1>
                                <p>Happy founders</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="box">
                                <h1>92%</h1>
                                <p>Customer satisfaction score</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}