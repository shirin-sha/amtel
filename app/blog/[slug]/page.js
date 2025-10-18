import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { getBlogBySlug, blogPosts, getRecentBlogs } from "@/data/blogData"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default function BlogDetail({ params }) {
    const blog = getBlogBySlug(params.slug)
    
    if (!blog) {
        notFound()
    }

    const recentBlogs = getRecentBlogs(blog.slug, 3)

    return (
        <Layout headerStyle={1} footerStyle={1}>
            <div>
                <div className="single-blog-area padding-top inner-font-1 inner-blog-1" id="home">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="single-blog-contents lg-mr-15">
                                    <div className="single-blog-img">
                                        <img src={blog.image} alt="" />
                                    </div>
                                    <ul className="blog-tags">
                                        <li><Link href="#">{blog.tag}</Link></li>
                                    </ul>
                                    <h2>{blog.title}</h2>
                                    <div className="blog-date-time">
                                        <ul className="blog-date">
                                            <li><Link href="#">{blog.date}</Link></li>
                                        </ul>
                                        <ul className="blog-time">
                                            <li><Link href="#">{blog.readTime}</Link></li>
                                        </ul>
                                    </div>
                                    
                                    {blog.content.paragraphs.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                    
                                    {blog.content.sections.map((section, index) => (
                                        <div key={index}>
                                            <h3>{section.title}</h3>
                                            <p>{section.content}</p>
                                        </div>
                                    ))}
                                    
                                    {blog.content.quote && (
                                        <div className="single-blog-quote">
                                            <h4>"{blog.content.quote}"</h4>
                                        </div>
                                    )}
                                    
                                    <div className="theme-border" />
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="tags">
                                                <ul>
                                                    <li>TAGS:</li>
                                                    {blog.tags.map((tag, index) => (
                                                        <li key={index}><Link href="#">{tag}</Link></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="social social3 text-right social-share">
                                                <ul>
                                                    <li>Share:</li>
                                                    <li><Link data-bs-toggle="tooltip" title="Linked in" href="#"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                                    <li><Link data-bs-toggle="tooltip" title="Facebook" href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                    <li><Link data-bs-toggle="tooltip" title="Instagram" href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                                    <li><Link data-bs-toggle="tooltip" title="TikTok" href="#"><i className="fa-brands fa-tiktok" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="widgets lg-ml-15">
                                    <div className="single-widget padding-less-widget">
                                        <h3>Search by keyword</h3>
                                        <div className="search-form-widget">
                                            <form action="#">
                                                <input type="search" placeholder="Type keyword here" />
                                                <button type="submit" className="search-icon">
                                                    <i className="fa-solid fa-magnifying-glass" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="single-widget about-widget">
                                        <img src="/assets/img/logo/amtellogo.png" alt="" style={{width: '40px', height: '40px', objectFit: 'contain'}} />
                                        <h4>Amtel Operations Team</h4>
                                        <p>
                                            Our operations team has been managing device deployments across the GCC since 1999. We specialize in brand-safe rollouts, compliant documentation, and predictable handovers that keep launches on schedule and partners calm.
                                        </p>
                                        <div className="social social3 text-center">
                                            <ul>
                                                <li><Link data-bs-toggle="tooltip" title="Linked in" href="#"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                                <li><Link data-bs-toggle="tooltip" title="Facebook" href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                <li><Link data-bs-toggle="tooltip" title="Instagram" href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                                <li><Link data-bs-toggle="tooltip" title="TikTok" href="#"><i className="fa-brands fa-tiktok" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-widget recent-posts">
                                        <h3>Recent Articles</h3>
                                        {recentBlogs.map((recentBlog) => (
                                            <div key={recentBlog.id} className="recent-post">
                                                <div className="recent-post-content">
                                                    <Link href={`/blog/${recentBlog.slug}`}>{recentBlog.title}</Link>
                                                    <div className="blog-date-time">
                                                        <ul className="blog-date">
                                                            <li><Link href="#">{recentBlog.date}</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="recent-img">
                                                    <img src={recentBlog.image} alt="" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="single-widget categories">
                                        <h3>Amtel Services</h3>
                                        <ul className="category-list">
                                            <li><Link href="/single-service-1">Mobile Distribution<span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                            <li><Link href="/single-service-2">Apple Products (Kuwait Authorized)<span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                            <li><Link href="/single-service-3">Tablets, Wearables & Other Electronics<span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                            <li><Link href="/single-service-4">Gaming & Accessories<span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                            <li><Link href="/single-service-5">Worldwide Exporting<span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*=====Single blog end=======*/}
                {/*=====More blog  start=======*/}
                <div className="section-padding2 blog-area inner-blog-1 section-padding inner-font-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-auto">
                                <div className="heading2 text-center">
                                    <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Our More Blogs</small>
                                    <h2>More insights from Amtel operations.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {recentBlogs.map((relatedBlog) => (
                                <div key={relatedBlog.id} className="col-md-6 col-lg-4">
                                    <div className="single-blog blog-md">
                                        <div className="blog-img">
                                            <Link href={`/blog/${relatedBlog.slug}`}><img src={relatedBlog.image} alt="" /></Link>
                                        </div>
                                        <ul className="blog-tags">
                                            <li><Link href="#">{relatedBlog.tag}</Link></li>
                                        </ul>
                                        <h3>
                                            <Link href={`/blog/${relatedBlog.slug}`}>{relatedBlog.title}</Link>
                                        </h3>
                                        <p>{relatedBlog.excerpt}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/*=====More blog end=======*/}
            </div>
        </Layout>
    )
}
