import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { notFound } from 'next/navigation'
import { getServiceBySlug, getAllServices } from "@/data/serviceData"
import { blogPosts } from "@/data/blogData"

// Generate static params for all services
export async function generateStaticParams() {
    const services = getAllServices()
    return services.map((service) => ({
        slug: service.slug,
    }))
}

export default function ServiceDetail({ params }) {
    const service = getServiceBySlug(params.slug)
    
    if (!service) {
        notFound()
    }

    // Get recent blogs for sidebar
    const recentBlogs = blogPosts.slice(0, 4)

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={service.breadcrumbTitle}>
                <div>
                    <div className="about-inner inner-1 bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src={service.icon} alt="" />
                                                {service.title}
                                            </small>
                                            <h2>
                                                {service.heroTitle}
                                            </h2>
                                            <p>
                                                {service.heroDescription}
                                            </p>
                                            <div className="space30" />
                                            <Link className="theme-btn-11" href="/contact">Request Allocation
                                                <img src="/assets/img/icons/arrow-up-right.svg" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mobile-hidden">
                                    <div className="about-bg-main-img position-relative ml50">
                                        <img className="border-radius" src="/assets/img/service/service-inner.jpg" alt="" />
                                        <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====About end=======*/}
                    {/*=====Single service start=======*/}
                    <div className="single-service-area padding-top inner-font-1 inner-blog-1" id="home">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="single-service-contents">
                                        {service.content.sections.map((section, index) => (
                                            <div key={index}>
                                                <h3>{section.title}</h3>
                                                {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
                                                    <p key={pIndex}>
                                                        {paragraph}
                                                    </p>
                                                ))}
                                                {section.image && (
                                                    <>
                                                        <div className="space30" />
                                                        <div className="single-blog-img">
                                                            <img src={section.image} alt="" />
                                                        </div>
                                                        <div className="space40" />
                                                    </>
                                                )}
                                                {section.list && (
                                                    <>
                                                        <div className="space30" />
                                                        <div className="service-list">
                                                            <ul>
                                                                {section.list.map((item, lIndex) => (
                                                                    <li key={lIndex}>
                                                                        <img src="/assets/img/icons/circle-check.svg" alt="" /> {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="space30" />
                                                    </>
                                                )}
                                                {section.quote && (
                                                    <div className="inner-quote">
                                                        <p>
                                                            "{section.quote}"
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                        
                                        {/* FAQ Section */}
                                        {service.content.faq && service.content.faq.length > 0 && (
                                            <>
                                                <div className="space30" />
                                                <div className="row">
                                                    {service.content.faq.map((faq, index) => (
                                                        <div key={index} className="col-lg-6">
                                                            <div className="single-service-advise">
                                                                <h4>{faq.question}</h4>
                                                                <p>
                                                                    {faq.answer}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="space30" />
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="widgets">
                                        <div className="single-widget categories">
                                            <h3>Amtel Services</h3>
                                            <ul className="category-list">
                                                {getAllServices().map((serviceItem) => (
                                                    <li key={serviceItem.id}>
                                                        <Link href={`/service/${serviceItem.slug}`}>
                                                            {serviceItem.title}
                                                            <span><i className="fa-solid fa-angle-right" /></span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="single-widget recent-posts">
                                            <h3>Recent Articles</h3>
                                            {recentBlogs.map((blog) => (
                                                <div key={blog.id} className="recent-post">
                                                    <div className="recent-post-content">
                                                        <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                                        <div className="blog-date-time">
                                                            <ul className="blog-date">
                                                                <li><Link href={`/blog/${blog.slug}`}>{blog.date}</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="recent-img">
                                                        <img src={blog.image} alt="" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="widget-download-card single-widget bg-24">
                                            <h4>Cick here to Download our Company Profile</h4>
                                            <Link className="theme-btn-11 full-btn" href="#">
                                                <img className="mr-2" src="/assets/img/icons/download.svg" alt="" />
                                                Download PDF
                                            </Link>
                                            <div className="download-card-img text-center">
                                                <img src="/assets/img/service/service-6.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====Single service end=======*/}
                    {/*=====Service Start=======*/}
                    <div className="section-padding2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto text-center">
                                    <div className="heading2">
                                        <small className="heading-top inner-heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />Explore More
                                        </small>
                                        <h2>Check out more services</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {getAllServices().filter(s => s.id !== service.id).slice(0, 3).map((serviceItem) => (
                                    <div key={serviceItem.id} className="col-lg-4 col-md-6">
                                        <div className="single-inner-service trans-1">
                                            <div className="service-img">
                                                <img src={serviceItem.image} alt="" />
                                            </div>
                                            <div className="service-content">
                                                <h3 className="font-f-3">{serviceItem.title}</h3>
                                                <p className="font-f-3">
                                                    {serviceItem.excerpt}
                                                </p>
                                                <Link className="theme-btn-11 full-btn" href="/contact">Request Quote</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/*=====Service end=======*/}
                </div>
            </Layout>
        </>
    )
}
