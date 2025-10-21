'use client'
import Link from "next/link"
import { useState } from "react"

export default function Pricing() {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <div className="pricing-area pricing2 section-padding2 bg5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 m-auto">
                            <div className="heading2 text-center">
                                <small data-aos="fade-up" data-aos-duration={600} className="heading-top">Why Amtel is a safe choice</small>
                                <h2 data-aos="fade-up" data-aos-duration={800}>Credentials & Coverage<br />You Can Trust.</h2>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-12 text-center">
                            <div className="plan-toggle-wrap" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="toggle-inner">
                                    <input id="ce-toggle" onClick={handleToggle} type="checkbox" />
                                    <span className="custom-toggle" />
                                    <div className="t-month">
                                        <h4>Monthly</h4>
                                    </div>
                                    <div className="t-year">
                                        <h4>Yearly <span>(20% Save)</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="space50" />
                    <div className="tab-content">
                        {isToggled ?
                            <>
                                <div id="yearly">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="single-price active">
                                                <div className="price-heading">
                                                    <p>Compliance & Authenticity</p>
                                                    <h5>We protect partner brands and customers.</h5>
                                                </div>
                                                <div className="price-body">
                                                    <Link href="/contact" className="price-btn active">Get a Free Consultation</Link>
                                                    <h4>What you can expect</h4>
                                                    <ul>
                                                        <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Authorized channels only (no grey stock)</li>
                                                        <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>IMEI/serial capture and verification</li>
                                                        <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Destination-compliant invoices & packing lists</li>
                                                        <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Origin papers and HS codes aligned</li>
                                                        <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Ethical sourcing and audit trail</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="single-price">
                                                <div className="price-heading">
                                                    <p>Regional Presence & Export</p>
                                                    <h5>Close to markets, built for scale.</h5>
                                                </div>
                                                <div className="price-body">
                                                    <Link href="/contact" className="price-btn">Speak to Coordination</Link>
                                                    <h4>Coverage and operations</h4>
                                                    <ul>
                                                        <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Entities: UAE, Kuwait, Bahrain, Saudi Arabia</li>
                                                        <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Exports to MEA, Asia, Europe, USA</li>
                                                        <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Central Middle East warehousing</li>
                                                        <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Courier handoff: Aramex | FedEx</li>
                                                        <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Clear ETAs and tracking</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="single-price">
                                                <div className="price-heading">
                                                    <p>Category & Brand Coverage</p>
                                                    <h5>Multi-brand portfolio with disciplined execution.</h5>
                                                </div>
                                                <div className="price-body">
										<a href="/assets/files/company-profile.pdf" className="price-btn" target="_blank" rel="noopener noreferrer">View Company Profile</a>
                                                    <h4>Lines and capabilities</h4>
                                                    <ul>
                                                        <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Apple (Kuwait) — Exclusive & Authorized</li>
                                                        <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Samsung • Honor • Redmi • Tecno • Sony</li>
                                                        <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Mobiles, tablets/computing, wearables, gaming</li>
                                                        <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>PlayStation • Nintendo • Xbox accessories</li>
                                                        <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>40+ team members, multilingual support</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </> :
                            <> <div id="monthly">
                                <div className="row">
                                    <div className="col-lg-4" data-aos="fade-up" data-aos-duration={800}>
                                        <div className="single-price">
                                            <div className="price-heading">
                                                <p>Compliance & Authenticity</p>
                                                <h5>We protect partner brands and customers.</h5>
                                            </div>
                                            <div className="price-body">
                                                <Link href="/contact" className="price-btn">Get a Free Consultation</Link>
                                                <h4>What you can expect</h4>
                                                <ul>
                                                    <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Authorized channels only (no grey stock)</li>
                                                    <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>IMEI/serial capture and verification</li>
                                                    <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Destination-compliant invoices & packing lists</li>
                                                    <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Origin papers and HS codes aligned</li>
                                                    <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Ethical sourcing and audit trail</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4" data-aos="fade-up" data-aos-duration={1000}>
                                        <div className="single-price active">
                                            <div className="price-heading">
                                                <p>Regional Presence & Export</p>
                                                <h5>Close to markets, built for scale.</h5>
                                            </div>
                                            <div className="price-body">
                                                <Link href="/contact" className="price-btn active">Speak to Coordination</Link>
                                                <h4>Coverage and operations</h4>
                                                <ul>
                                                    <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Entities: UAE, Kuwait, Bahrain, Saudi Arabia</li>
                                                    <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Exports to MEA, Asia, Europe, USA</li>
                                                    <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Central Middle East warehousing</li>
                                                    <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Courier handoff: Aramex | FedEx</li>
                                                    <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Clear ETAs and tracking</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4" data-aos="fade-up" data-aos-duration={1200}>
                                        <div className="single-price">
                                            <div className="price-heading">
                                                <p>Category & Brand Coverage</p>
                                                <h5>Multi-brand portfolio with disciplined execution.</h5>
                                            </div>
                                            <div className="price-body">
										<a href="/assets/files/company-profile.pdf" className="price-btn" target="_blank" rel="noopener noreferrer">View Company Profile</a>
                                                <h4>Lines and capabilities</h4>
                                                <ul>
                                                    <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Apple (Kuwait) — Exclusive & Authorized</li>
                                                    <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Samsung • Honor • Redmi • Tecno • Sony</li>
                                                    <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>Mobiles, tablets/computing, wearables, gaming</li>
                                                    <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>PlayStation • Nintendo • Xbox accessories</li>
                                                    <li><span className="pricing-icon"><img src="/assets/img/icons/double-check2.png" alt="" /></span>40+ team members, multilingual support</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </>
                        }

                    </div>
                </div>
            </div>

        </>
    )
}
