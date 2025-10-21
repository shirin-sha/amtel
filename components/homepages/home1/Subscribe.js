

export default function Subscribe() {
    return (
        <>
            <div className="subscribe2 bg7 section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading2 white-heading no-margin-heading">
                                <small className="heading-top">Updates for partners</small>
                                <h2>Join us today and stay <span className="heilight-right">informed</span> <br />on launches and availability.</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 offset-lg-1">
                            <div className="sunscribe-form">
                                <div className="subscribe-from-wrap">
                                    <form action="#">
                                        <input type="email" placeholder="Email Address" />
                                        <button type="submit" name="button">Subscribe Now →</button>
                                    </form>
                                    {/* <small className="d-block mt-2">No spam—only schedule notices and important updates.</small> */}
                                   
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-2" role="note" aria-live="polite">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="me-2 text-white-50" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM11 11h2v7h-2v-7z"/></svg>
                                        <small className="text-white-50">No spam—only schedule notices and important updates.</small>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
