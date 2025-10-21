
import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link"

export default function About2() {
    return (
        <>
            <div className="about-area section-padding bg5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="mr50">
                                <div className="heading2 no-margin-heading">
                                    <small data-aos="fade-right" data-aos-duration={600} className="heading-top">Quick company overview</small>
                                    <h2 data-aos="fade-right" data-aos-duration={800}>Our Operational Highlights<br />At A Glance.</h2>
                                    <p data-aos="fade-right" data-aos-duration={1000}>Across four GCC entities, Amtel delivers disciplined device logistics with a single
operating standard, verified sourcing, serial/IMEI control, channel-compliant
documentation, and measured handovers. Our governance, tooling, and
vendor network enable predictable allocations, fast export clearance, and zerotolerance quality control, supporting partners from first PO to final store
delivery.</p>
                                    <div className="space50" />
                                    <div className="button-group" data-aos="fade-right" data-aos-duration={1200}>
                                        <Link className="theme-btn-2" href="#">Our Key Partners →</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="counter2 ml50 position-relative">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-counter" data-aos="zoom-out" data-aos-duration={600}>
                                            <div className="conter-icon">
                                                <img src="/assets/img/icons/counter21.png" alt="" />
                                            </div>
                                            <h2><CounterUp count={26}/>+</h2>
                                            <p>Years Operating</p>
                                        </div>
                                        <div className="single-counter" data-aos="zoom-out" data-aos-duration={800}>
                                            <div className="conter-icon">
                                                <img src="/assets/img/icons/counter22.png" alt="" />
                                            </div>
                                            <h2><CounterUp count={4}/></h2>
                                            <p>GCC Entities</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-counter mt-5" data-aos="zoom-out" data-aos-duration={1000}>
                                            <div className="conter-icon">
                                                <img src="/assets/img/icons/counter23.png" alt="" />
                                            </div>
                                            <h2><CounterUp count={40}/>+</h2>
                                            <p>Employees</p>
                                        </div>
                                        <div className="single-counter" data-aos="zoom-out" data-aos-duration={1200}>
                                            <div className="conter-icon">
                                                <img src="/assets/img/icons/counter24.png" alt="" />
                                            </div>
                                            <h2><CounterUp count={0}/>%</h2>
                                            <p>Counterfeit Tolerance</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="corner-right-bottom-shape2 position-absolute">
                                    <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                </div>
                                <div className="corner-shape2-left position-absolute">
                                    <img src="/assets/img/shapes/tax-shape2.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-lg-none">
                            <div className="mr50">
                                <div className="heading2 no-margin-heading">
                                    <small className="heading-top">Quick company overview</small>
                                    <h2>Our Operational Highlights<br />At A Glance.</h2>
                                    <p>Distributor of mobiles, tablets, wearables, and gaming since 1999. Regional entities in
                                        the UAE, Kuwait, Bahrain, and Saudi Arabia, with export reach across MEA, Asia,
                                        Europe, and the USA.</p>
                                    <div className="space50" />
                                    <Link className="theme-btn-2" href="#">More About Amtel →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
