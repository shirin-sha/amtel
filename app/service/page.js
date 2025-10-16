
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Page() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="OUR SERVICES">
                <div>
                    <div className="section-padding bg-28">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-8">
                                    <div className="lg-mr-15">
                                        <div className="row">
                                        
                                            <div className="col-md-6">
                                                <div className="single-inner-service trans-1">
                                                    <div className="service-img">
                                                        <Link href="/single-service-2"><img src="/assets/img/service/Services-Apple-Products.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="service-content">
                                                        <h3 className="font-f-3"><Link href="/single-service-2">Apple Products (Kuwait Authorized Reseller)</Link></h3>
                                                        <p className="font-f-3">Apple Authorized in Kuwait for iPhone, iPad, Mac, Watch—compliant messaging, genuine devices, coordinated retail and operator execution.</p>
                                                        <Link className="theme-btn-11 full-btn" href="/contact">Request Quote</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-inner-service trans-1">
                                                    <div className="service-img">
                                                        <Link href="/single-service-3"><img src="/assets/img/service/Services-Tablets-Wearables.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="service-content">
                                                        <h3 className="font-f-3"><Link href="/single-service-3">Tablets, Wearables & Other Electronics</Link></h3>
                                                        <p className="font-f-3">iPad, MacBook, tablet lines, and Apple Watch with essentials—education, enterprise, retail programs kept replenishment-simple.</p>
                                                        <Link className="theme-btn-11 full-btn" href="/contact">Request Quote</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" col-md-6">
                                                <div className="single-inner-service trans-1">
                                                    <div className="service-img">
                                                        <Link href="/single-service-4"><img src="/assets/img/service/Services-Gaming-Accessories.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="service-content">
                                                        <h3 className="font-f-3"><Link href="/single-service-4">Gaming & Accessories</Link></h3>
                                                        <p className="font-f-3">PlayStation, Nintendo, Xbox consoles, controllers, and peripherals—category planning, steady continuity, smooth peaks, on-time downstream launches.</p>
                                                        <Link className="theme-btn-11 full-btn" href="/contact">Request Quote</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-inner-service trans-1">
                                                    <div className="service-img">
                                                        <Link href="/single-service-5"><img src="/assets/img/service/Services-Worldwide-Exporting.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="service-content">
                                                        <h3 className="font-f-3"><Link href="/single-service-5">Worldwide Exporting</Link></h3>
                                                        <p className="font-f-3">Global wholesale exporting of mobiles, tablets, wearables—allocated orders, compliant paperwork, reliable logistics, responsive support for partners.</p>
                                                        <Link className="theme-btn-11 full-btn" href="/contact">Request Quote</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-inner-service trans-1">
                                                    <div className="service-img">
                                                        <Link href="/single-service-1"><img src="/assets/img/service/Services-Mobile-Distribution.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="service-content">
                                                        <h3 className="font-f-3"><Link href="/single-service-1">Mobile Distribution</Link></h3>
                                                        <p className="font-f-3">Samsung, Honor, Redmi, Tecno, Sony—verified models, clear specs, serial validation, planned availability and predictable assortments.</p>
                                                        <Link className="theme-btn-11 full-btn" href="/contact">Request Quote</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="widgets lg-ml-15">
                                        <div className="single-widget padding-less-widget">
                                            <h3>Search by keyword</h3>
                                            <div className="search-form-widget">
                                                <form action="#">
                                                    <input type="search" placeholder="Type keyword here" />
                                                    <button type="submit" className="search-icon"><i className="fa-solid fa-magnifying-glass" /></button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="single-widget recent-posts">
                                            <h3>Recent Articles</h3>
                                            <div className="recent-post">
                                                <div className="recent-post-content">
                                                    <Link href="/blog/apple-products-kuwait-market">Apple Products in Kuwait: Authorized Reseller Benefits</Link>
                                                    <div className="blog-date-time">
                                                        <ul className="blog-date">
                                                            <li><Link href="/blog/apple-products-kuwait-market">15/01/24</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="recent-img">
                                                    <img src="/assets/img/service/service-9.svg" alt="" />
                                                </div>
                                            </div>
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
                                                    <img src="/assets/img/service/service-8.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="recent-post">
                                                <div className="recent-post-content">
                                                    <Link href="/blog/worldwide-exporting-guide">Complete Guide to Worldwide Electronics Exporting</Link>
                                                    <div className="blog-date-time">
                                                        <ul className="blog-date">
                                                            <li><Link href="/blog/worldwide-exporting-guide">10/01/24</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="recent-img">
                                                    <img src="/assets/img/service/service-7.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="recent-post">
                                                <div className="recent-post-content">
                                                    <Link href="/blog/mobile-distribution-best-practices">Mobile Distribution Best Practices for Retailers</Link>
                                                    <div className="blog-date-time">
                                                        <ul className="blog-date">
                                                            <li><Link href="/blog/mobile-distribution-best-practices">08/01/24</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="recent-img">
                                                    <img src="/assets/img/service/service-6.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-widget categories">
                                            <h3>Amtel Services</h3>
                                            <ul className="category-list">
                                                <li><Link href="/single-service-2">Apple Products (Kuwait Authorized Reseller) <span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                                <li><Link href="/single-service-3">Tablets, Wearables & Other Electronics <span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                                <li><Link href="/single-service-4">Gaming & Accessories <span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                                <li><Link href="/single-service-5">Worldwide Exporting <span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                                <li><Link href="/single-service-1">Mobile Distribution <span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                            </ul>
                                        </div>
                                        {/* <div className="single-widget tags-widget">
                                            <h3>Tags</h3>
                                            <ul className="tags-list">
                                                <li><Link href="#">Healthcare</Link></li>
                                                <li><Link href="#">Consult</Link></li>
                                                <li><Link href="#">Cahless</Link></li>
                                                <li><Link href="#">Cyberattacks</Link></li>
                                                <li><Link href="#">Meeting</Link></li>
                                                <li><Link href="#">Leadership</Link></li>
                                                <li><Link href="#">Health Insurace</Link></li>
                                            </ul>
                                        </div> */}
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
                                        <h2>Want to join our team?</h2>
                                        <p>We are always looking for talented people, We here to help you to open your bright future.</p>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 offset-lg-1">
                                    <div className="sunscribe-form">
                                        <div className="subscribe-from-wrap">
                                            <form action="#">
                                                <input type="email" placeholder="Email Address" />
                                                <button type="submit" name="button">Subscribe Now <img src="/assets/img/icons/arrow-up-right.svg" alt="" /></button>
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