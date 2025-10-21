
import Link from "next/link"
import { blogPosts } from "@/data/blogData"

export default function Blog() {
    // Get the latest 3 blog posts
    const latestBlogs = blogPosts.slice(0, 3)
    return (
        <>
            <div className="blog-area blog2 section-padding2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 m-auto">
                            <div className="heading2 text-center">
                                <small data-aos="fade-up" data-aos-duration={600} className="heading-top">Latest from Amtel</small>
                                <h2 data-aos="fade-up" data-aos-duration={800}><span className="heilight-left">Take</span> a look at the latest<br />articles from Amtel.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {latestBlogs.map((blog, index) => (
                            <div key={blog.id} className="col-lg-4" data-aos="fade-up" data-aos-duration={600 + (index * 200)}>
                                <div className="single-blog blog-md">
                                    <div className="blog-img">
                                        <img src={blog.image} alt="" />
                                    </div>
                                    <div className="blog-contents">
                                        <ul className="blog-tags">
                                            <li><Link href="#">{blog.tag}</Link></li>
                                        </ul>
                                        <h3><Link href={`/blog/${blog.slug}`}>{blog.title}</Link></h3>
                                        <Link href={`/blog/${blog.slug}`} className="theme-btn-4">Read More →</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}
