import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Page() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Gaming & Accessories">
                <div>
                    <div className="about-inner inner-1 bg-13 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Gaming & Accessories</small>
                                            <h2>
                                                From console drops to accessory waves,<br />we keep the calendar under control
                                            </h2>
                                            <p>
                                                Seasonal peaks planned, launches delivered, continuity protected.
                                            </p>
                                            <p>
                                                We supply PlayStation, Nintendo, and Xbox with controllers, headsets, storage, and charging—planned by season, verified for region, and handed over calmly. Promotions, bundles, and launch days stay on schedule with clean paperwork and clear ETAs. Want dependable continuity?
                                            </p>
                                            <div className="space30" />
                                            <Link className="theme-btn-11" href="/contact">Request Launch Calendar
                                                <img src="/assets/img/icons/arrow-up-right.svg" alt="" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mobile-hidden">
                                    <div className="about-bg-main-img position-relative ml50">
                                        <img className="border-radius" src="/assets/img/service/Services-Gaming-Accessories.jpg" alt="" />
                                        <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====About end=======*/}
                    {/*=====Single blog start=======*/}
                    <div className="single-service-area padding-top inner-font-1 inner-blog-1" id="home">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="single-service-contents">
                                        <h3>Category Procurement & Launch Support</h3>
                                        <p>
                                            We build forecasts and allocations around publisher calendars and platform windows—so consoles, controllers, and peripherals arrive when campaigns go live. Packaging specs, region codes, and accessory pairings are aligned up front to keep merchandising simple.
                                        </p>
                                        <p>
                                            Documents are precise—PI, invoices, manifests, serial/part exports where applicable, warranty notes, and destination letters delivered on time. From warehouse release to store delivery, handovers remain predictable—even at peak.
                                        </p>
                                        <div className="space30" />
                                        <div className="single-blog-img">
                                            <img src="/assets/img/service/Services-Gaming-Accessories.jpg" alt="" />
                                        </div>
                                        <div className="space40" />
                                        <h4>What You Can Expect from Our Gaming Supply</h4>
                                        <div className="service-list">
                                            <ul>
                                                <li><img src="/assets/img/icons/circle-check.svg" alt="" /> Region-correct models: Platform and accessory SKUs validated for warranty and content region rules.</li>
                                                <li><img src="/assets/img/icons/circle-check.svg" alt="" /> Calendar-based allocations: Firm ETAs for launches, promos, and seasonal peaks to protect sell-through.</li>
                                                <li><img src="/assets/img/icons/circle-check.svg" alt="" /> Accessory pairing: Controllers, headsets, storage, and power matched to each console and bundle.</li>
                                                <li><img src="/assets/img/icons/circle-check.svg" alt="" /> Channel-compliant paperwork: Invoices, packing lists, and destination docs aligned with retailer/operator rules.</li>
                                                <li><img src="/assets/img/icons/circle-check.svg" alt="" /> Secure handling & labeling: Tamper-evident packs, lithium-battery compliance, and traceable shipments end-to-end.</li>
                                                <li><img src="/assets/img/icons/circle-check.svg" alt="" /> Clear returns/DOA paths: RMA windows and advance-replacement options where partner policies allow.</li>
                                            </ul>
                                        </div>

                                        <div className="space30" />
                                        <h4>Built for launches, bundles, and promos.</h4>
                                        <p>
                                            We coordinate stock, accessories, paperwork, and timing—so your teams don’t chase updates on release week. Each order moves with region-correct SKUs, predictable ETAs, and clean documents to keep displays and online drops on track.
                                        </p>
                                        <h4>Continuity you can plan around.</h4>
                                        <p>
                                            From evergreen controllers to premium headsets, we schedule replenishment in advance. That stabilizes weekly sales, supports bundles, and reduces scramble during publisher events or end-of-year peaks.
                                        </p>

                                        <div className="space30" />
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="single-service-advise">
                                                    <h4>Why do I need it?</h4>
                                                    <p>
                                                        Gaming demand spikes hard—mis-timed deliveries and wrong SKUs cost share and margin. A disciplined supply partner protects launch days, prevents display gaps, and reduces operational noise across stores and e-commerce.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="single-service-advise">
                                                    <h4>Why Amtel?</h4>
                                                    <p>
                                                        Since 1999, we’ve run multi-brand distribution across the GCC with calendar discipline—region validation, planned allocations, and single-window coordination. Expect measurable reliability and responsive support throughout each launch cycle.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space30" />
                                        <h4>Operational Standards & Compliance</h4>
                                        <p>
                                            We move platform hardware and accessories with verified region codes, correct HS classifications, and channel-approved paperwork—so warranty and ratings policies are respected end-to-end.
                                        </p>
                                        <p>
                                            One operational playbook governs booking, packing, and handover, keeping timelines predictable and communication calm—even when volumes surge.
                                        </p>

                                        <div className="inner-quote">
                                            <p>
                                                “Great launch days aren’t lucky—they’re engineered with the right stock, the right region, at the right time.”
                                            </p>
                                            <Link href="#">Amtel Gaming Operations Playbook</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="widgets">
                                        <div className="single-widget categories">
                                            <h3>Amtel Services</h3>
                                            <ul className="category-list">
                                                <li>
                                                    <Link href="/single-service-1">Mobile Distribution
                                                        <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/single-service-2">Apple Products (Kuwait Authorized)
                                                        <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/single-service-3">Tablets, Wearables & Other Electronics
                                                        <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                </li>
                                                <li>
                                                    <Link className="active" href="/single-service-4">Gaming & Accessories
                                                        <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/single-service-5">Worldwide Exporting
                                                        <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="single-widget recent-posts">
                                            <h3>Recent Articles</h3>
                                            <div className="recent-post">
                                                <div className="recent-post-content">
                                                    <Link href="/blog/gaming-accessories-trends-2024">Gaming Accessories Trends: What's New in 2024</Link>
                                                    <div className="blog-date-time">
                                                        <ul className="blog-date">
                                                            <li><Link href="/blog/gaming-accessories-trends-2024">12/01/24</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="recent-img">
                                                    <img src="/assets/img/service/service-6.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-download-card single-widget bg-24">
                                            <h4>Click here to Download our Company Profile</h4>
                                            <Link className="theme-btn-11 full-btn" href="#"><img className="mr-2" src="/assets/img/icons/download.svg" alt="" />
                                                Download PDF</Link>
                                            <div className="download-card-img text-center">
                                                <img src="/assets/img/service/service-6.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*=====Single blog end=======*/}
                    {/*=====Service Start=======*/}
                    <div className="section-padding2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto text-center">
                                    <div className="heading2">
                                        <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Explore More</small>
                                        <h2>Check out more services</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-inner-service trans-1">
                                        <div className="service-img">
                                            <img src="/assets/img/service/Services-Mobile-Distribution.jpg" alt="" />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="font-f-3">Mobile Distribution</h3>
                                            <p className="font-f-3">
                                                Samsung, Honor, Redmi, Tecno, Sony—verified models, clear specs, serial validation, planned availability and predictable assortments.
                                            </p>
                                            <Link className="theme-btn-11 full-btn" href="/contact">Request Quote</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-inner-service trans-1">
                                        <div className="service-img">
                                            <img src="/assets/img/service/Services-Apple-Products.jpg" alt="" />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="font-f-3">Apple Products (Kuwait Authorized)</h3>
                                            <p className="font-f-3">
                                                Apple Authorized in Kuwait for iPhone, iPad, Mac, Watch—compliant messaging, genuine devices, coordinated retail and operator execution.
                                            </p>
                                            <Link className="theme-btn-11 full-btn" href="/contact">Request Quote</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-inner-service trans-1">
                                        <div className="service-img">
                                            <img src="/assets/img/service/Services-Worldwide-Exporting.jpg" alt="" />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="font-f-3">Worldwide Exporting</h3>
                                            <p className="font-f-3">
                                                Global wholesale exporting of mobiles, tablets, wearables—allocated orders, compliant paperwork, reliable logistics, responsive support.
                                            </p>
                                            <Link className="theme-btn-11 full-btn" href="/contact">Request Quote</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====Service end=======*/}
                    {/*=====Subscribe start=======*/}
                    <div className="subscribe-4 bg12 padding-90 inner-font-1 inner-subscribe">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="heading4 white-heading inner-heading no-margin-heading">
                                        <h2>Want updates from Amtel?</h2>
                                        <p>
                                            Subscribe for concise partner notes—launches, availability, and documentation updates.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 offset-lg-1">
                                    <div className="sunscribe-form">
                                        <div className="subscribe-from-wrap">
                                            <form action="#">
                                                <input type="email" placeholder="Email Address" />
                                                <button type="submit" name="button">
                                                    Subscribe Now
                                                    <img src="/assets/img/icons/arrow-up-right.svg" alt="" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}