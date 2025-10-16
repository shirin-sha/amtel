
import CounterUp from "@/components/elements/CounterUp"
import Faq1 from "@/components/elements/Faq1"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Page() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ABOUT AMTEL">
                <div>
                    <div className="about-inner bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Our promise to partners</small>
                                            <h2>
                                                We handle the hard parts, so your channels stay calm.
                                            </h2>
                                            <p>
                                                Since 1999, Amtel has focused on the basics that matter: authentic supply, clear documentation, and steady communication. We serve carriers, retailers, and enterprise programs across the GCC with measured, repeatable execution.
                                            </p>
                                            <p>
                                                We are Apple Authorized in Kuwait and operate multi-brand lines including Samsung, Honor, Redmi, Tecno, and Sony. Our entities in the UAE (HQ), Kuwait, Bahrain, and Saudi Arabia keep us close to markets and local compliance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-bg-main-img position-relative ml50">
                                        <img src="/assets/img/about/about23.png" alt="" />
                                        <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====About end=======*/}
                    {/*=====About start=======*/}
                    <div className="about-inner padding-bottom bg-29">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about-bg-main-img position-relative mr50">
                                        <img src="/assets/img/about/about24.png" alt="" />
                                        <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ml50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />What we do—without noise</small>
                                            <h2>
                                                Allocation, documentation, and delivery—done right.
                                            </h2>
                                            <p>
                                                From allocation and serial validation to invoices, COO, packing lists, and last-mile handover, we run a standards-led process that keeps launches on time and brand-safe. Freight partners include Aramex and FedEx, with export coverage to Asia, Europe, and the USA.
                                            </p>
                                            <p>
                                                Our teams work as one: Purchase, Sales, and Finance, aligned to the same playbook so every order follows the same path and stakeholders know "what's next" at each step.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====About end=======*/}
                    {/*=====Counter start=======*/}
                    <div className="counter-4 inner-counter-4 inner-font-1 section-padding" style={{ background: 'url(assets/img/bg/bg-12.png) no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 white-heading text-center">
                                        <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Why partners choose Amtel</small>
                                        <h2>Our Impact in Numbers</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row counters-3">
                                <div className="col-lg-3 col-6">
                                    <div className="single-couter-3">
                                        <h3>$<CounterUp count={262} />M+</h3>
                                        <p>Sales turnover (2024)</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="single-couter-3">
                                        <h3>$<CounterUp count={10} />M+</h3>
                                        <p>Average monthly volume</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="single-couter-3">
                                        <h3><CounterUp count={25} />+</h3>
                                        <p>Key operators & retailers</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="single-couter-3">
                                        <h3><CounterUp count={40} />+</h3>
                                        <p>Employees across the GCC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====Counter end=======*/}
                    {/*=====Service start=======*/}
                    <div className="service-inner-1 section-padding2 inner-font-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center">
                                        <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Our way of working</small>
                                        <h2>Our Values in Action</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="single-service text-center">
                                        <div className="service-icon bg-24">
                                            <img src="/assets/img/icons/service-11.png" alt="" />
                                        </div>
                                        <h3>We seek clarity</h3>
                                        <p>
                                            Simple scopes, confirmed requirements, and visible timelines—before we move.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="single-service text-center">
                                        <div className="service-icon bg-24">
                                            <img src="/assets/img/icons/service-12.png" alt="" />
                                        </div>
                                        <h3>We move on data</h3>
                                        <p>
                                            Serial checks, compliant docs, and tracked handovers reduce surprises.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="single-service text-center">
                                        <div className="service-icon bg-24">
                                            <img src="/assets/img/icons/service-13.png" alt="" />
                                        </div>
                                        <h3>We improve</h3>
                                        <p>
                                            Small, continuous upgrades build stronger quality with less friction.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="single-service text-center">
                                        <div className="service-icon bg-24">
                                            <img src="/assets/img/icons/service-14.png" alt="" />
                                        </div>
                                        <h3>We act with empathy</h3>
                                        <p>
                                            We plan for stores, finance, logistics—and keep messages clear for all.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="single-service text-center">
                                        <div className="service-icon bg-24">
                                            <img src="/assets/img/icons/service-15.png" alt="" />
                                        </div>
                                        <h3>We stay consistent</h3>
                                        <p>
                                            One process across markets, so executions feel the same everywhere.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="single-service text-center">
                                        <div className="service-icon bg-24">
                                            <img src="/assets/img/icons/service-16.png" alt="" />
                                        </div>
                                        <h3>We work together</h3>
                                        <p>
                                            Purchase, Sales, and Finance share status early—no last-minute drama.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====Service end=======*/}
                    {/*=====Team start=======*/}
                    <div className="team-2 section-padding2 bg-13 inner-font-1 _relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center">
                                        <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Our operations in practice</small>
                                        <h2>What We Do</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-service text-center">
                                        <div className="service-icon bg-24">
                                            <img src="/assets/img/icons/service-11.png" alt="" />
                                        </div>
                                        <h3>Channel Programs</h3>
                                        <p>Carrier, retailer, and enterprise allocations with brand-safe execution.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-service text-center">
                                        <div className="service-icon bg-24">
                                            <img src="/assets/img/icons/service-12.png" alt="" />
                                        </div>
                                        <h3>Apple in Kuwait</h3>
                                        <p>Authorized reseller operations for iPhone, iPad, Mac, and Apple Watch.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-service text-center">
                                        <div className="service-icon bg-24">
                                            <img src="/assets/img/icons/service-13.png" alt="" />
                                        </div>
                                        <h3>Multi-Brand Lines</h3>
                                        <p>Samsung, Honor, Redmi, Tecno, Sony—coordinated by one standards playbook.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-service text-center">
                                        <div className="service-icon bg-24">
                                            <img src="/assets/img/icons/service-14.png" alt="" />
                                        </div>
                                        <h3>Global Export Desk</h3>
                                        <p>GCC origin, compliant paperwork, and shipping to Asia, Europe, and the USA.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shape-007">
                            <img src="/assets/img/shapes/shape007.svg" alt="" />
                        </div>
                    </div>
                    {/*=====Team end=======*/}
                    {/*=====Faqs start=======*/}
                    <div className="faqs-area section-padding inner-font-1 inner-faq-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center mb-5">
                                        <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />FAQ</small>
                                        <h2>Frequently Asked Questions</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <Faq1 />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====Faqs end=======*/}
                </div>

            </Layout>
        </>
    )
}