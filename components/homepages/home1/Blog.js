
import Link from "next/link"

export default function Blog() {
    return (
        <>
            <div className="blog-area blog2 section-padding2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 m-auto">
                            <div className="heading2 text-center">
                                <small data-aos="fade-up" data-aos-duration={600} className="heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Latest from Amtel</small>
                                <h2 data-aos="fade-up" data-aos-duration={800}><span className="heilight-left">Take</span> a look at the latest<br />articles from Amtel.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-duration={600}>
                            <div className="single-blog blog-md ">
                                <div className="blog-img">
                                    <img src="/assets/img/blog/blog4.png" alt="" />
                                </div>
                                <div className="blog-contents">
                                    <ul className="blog-tags">
                                        <li><Link href="#"> <img src="/assets/img/icons/hands.svg" alt="" />Insights</Link></li>
                                    </ul>
                                    <h3><Link href="/single">How to Align Model Lists for a Smooth Launch</Link>
                                    </h3>
                                    <Link href="#" className="theme-btn-4">Read More →</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-duration={800}>
                            <div className="single-blog blog-md">
                                <div className="blog-img">
                                    <img src="/assets/img/blog/blog1.png" alt="" />
                                </div>
                                <div className="blog-contents">
                                    <ul className="blog-tags">
                                        <li><Link href="#"> <img src="/assets/img/icons/hands.svg" alt="" />Guides</Link></li>
                                    </ul>
                                    <h3><Link href="/single">What “Authorized” Means for Apple in Kuwait</Link></h3>
                                    <Link href="#" className="theme-btn-4">Read More →</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="single-blog blog-md">
                                <div className="blog-img">
                                    <img src="/assets/img/blog/blog2.png" alt="" />
                                </div>
                                <div className="blog-contents">
                                    <ul className="blog-tags">
                                        <li><Link href="#"> <img src="/assets/img/icons/hands.svg" alt="" />Operations</Link></li>
                                    </ul>
                                    <h3><Link href="/single">Export Documents Checklist for Cross-Border Shipments</Link>
                                    </h3>
                                    <Link href="#" className="theme-btn-4">Read More →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
