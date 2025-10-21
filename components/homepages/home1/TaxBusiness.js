
import Link from "next/link"

export default function TaxBusiness() {
    return (
        <>
            <div className="tax-business section-padding2 bg6" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <div className="heading2 white-heading text-center">
                                <small data-aos="fade-up" data-aos-duration={600} className="heading-top">B2B Mobility & Electronics, Delivered</small>
                                <h2 data-aos="fade-up" data-aos-duration={800}>Verified stock. Predictable handovers.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={600}>
                            <div className="single-business trans-1">
                                <div className="business-icon" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <i className="fa-solid fa-mobile-screen" style={{color: '#ff6b35', fontSize: '48px'}}></i>
                                </div>
                                <h3>Enterprise B2B Mobile Distribution</h3>
                                <p>High-volume sourcing and allocation for Samsung, Honor, Redmi, Tecno, and Sony. Verified provenance, competitive terms, and dependable continuity across regional
                                    channel partners.</p>
                                <Link href="/service/mobile-distribution" className="theme-btn-7">Learn more →</Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={800}>
                            <div className="single-business trans-1">
                                <div className="business-icon" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <i className="fa-brands fa-apple" style={{color: '#ff6b35', fontSize: '48px'}}></i>
                                </div>
                                <h3>Authorized Apple Product Supply</h3>
                                <p>Channel-compliant procurement and distribution of iPhone, iPad, Mac, Apple Watch,
                                    and accessories. Apple Exclusive & Authorized Reseller (Kuwait) for retailers,
                                    operators, and enterprise programs.</p>
                                <Link href="/service/apple-products-kuwait-authorized-reseller" className="theme-btn-7">Learn more →</Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="single-business trans-1">
                                <div className="business-icon" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <i className="fa-solid fa-globe" style={{color: '#ff6b35', fontSize: '48px'}}></i>
                                </div>
                                <h3>Global Export & Cross-Border Fulfillment</h3>
                                <p>End-to-end export operations—allocation, documentation, customs, and multimodal
                                    shipping—delivered swiftly and compliantly via Aramex | FedEx with confirmed
                                    handoffs and tracking.</p>
                                <Link href="/service/worldwide-exporting" className="theme-btn-7">Learn more →</Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="single-business trans-1">
                                <div className="business-icon" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <i className="fa-solid fa-gamepad" style={{color: '#ff6b35', fontSize: '48px'}}></i>
                                </div>
                                <h3>Wholesale Gaming Consoles & Accessories</h3>
                                <p>Bulk supply of PlayStation, Nintendo, and Xbox consoles, controllers, and peripherals
                                    with reliable stock continuity and clear regional warranty guidance.</p>
                                <Link href="/service/gaming-accessories" className="theme-btn-7">Learn more →</Link>
                            </div>
                        </div>
                        <div className="space20" />
                        <div className="col-12 text-center" data-aos="fade-up" data-aos-duration={1400}>
							<Link className="theme-explore" href="/service">Explore Services →</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
