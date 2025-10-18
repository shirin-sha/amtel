
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { getAllServices } from "@/data/serviceData"
import { blogPosts } from "@/data/blogData"

export default function Page() {
    const services = getAllServices()
    const recentBlogs = blogPosts.slice(0, 4)

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
                                            {services.map((service) => (
                                                <div key={service.id} className="col-md-6">
                                                    <div className="single-inner-service trans-1">
                                                        <div className="service-img">
                                                            <Link href={`/service/${service.slug}`}>
                                                                <img src={service.image} alt="" style={{borderRadius: '8px'}} />
                                                            </Link>
                                                        </div>
                                                        <div className="service-content">
                                                            <h3 className="font-f-3">
                                                                <Link href={`/service/${service.slug}`}>{service.title}</Link>
                                                            </h3>
                                                            <p className="font-f-3">{service.excerpt}</p>
                                                            <Link className="theme-btn-11 full-btn" href={`/service/${service.slug}`}>Read More</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
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
                                                        <img src={blog.image} alt="" style={{borderRadius: '8px'}} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="single-widget categories">
                                            <h3>Amtel Services</h3>
                                            <ul className="category-list">
                                                {services.map((service) => (
                                                    <li key={service.id}>
                                                        <Link href={`/service/${service.slug}`}>
                                                            {service.title} <span><i className="fa-solid fa-angle-right" /></span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====Service end=======*/}
                </div>

            </Layout>
        </>
    )
}