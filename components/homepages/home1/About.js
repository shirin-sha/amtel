
import Link from "next/link"

export default function About() {
    return (
        <>

            <div className="about-area section-padding bg5-left">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-bg-21 mr50" data-aos="zoom-out" data-aos-duration={800}>
                                <div className="about-bg-main-img position-relative top-left-polygon-1">
                                    <img src="/assets/img/about/about21.png" alt="" />
                                    <div className="corner-right-bottom-shape2 position-absolute">
                                        <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                    </div>
                                    <div className="corner-shape2-left position-absolute">
                                        <img src="/assets/img/shapes/tax-shape2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading2 no-margin-heading ml50">
                                <small data-aos="fade-left" data-aos-duration={600} className="heading-top"><img src="/assets/img/icons/hands.svg" alt="" />We Are Here For Coordination</small>
                                <h2 data-aos="fade-left" data-aos-duration={800}>We Handle The Complex<br/> Device Logistics For Your Operations.</h2>
                                <p data-aos="fade-left" data-aos-duration={1000}>Founded in 1999, Amtel supplies multi-brand electronics to channel partners across
                                    the GCC. We handle model confirmations, serial validation, and compliant
                                    documentation—keeping projects calm, timelines clear, and handovers predictable.</p>
                                <p data-aos="fade-left" data-aos-duration={1000}>With entities in the UAE, Kuwait, Bahrain, and Saudi Arabia, we stay close to customers and standards. Apple Authorized in Kuwait; strong lines include Samsung, Honor,
                                    Redmi, Tecno, Sony, plus PlayStation, Nintendo, and Xbox.</p>
                                <div className="space50" />
                                <div className="button-group" data-aos="fade-left" data-aos-duration={1200}>
                                    <Link className="theme-btn-2" href="#">More About Us <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
