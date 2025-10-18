
'use client'
import Link from 'next/link'
import { useState } from "react"
import { blogPosts, getBlogsByCategory } from "@/data/blogData"

export default function BlogFilter1({ twocol, blogSm }) {
    const [filterKey, setFilterKey] = useState("*")
    const [filteredBlogs, setFilteredBlogs] = useState(blogPosts)
    
    const handleFilterKeyChange = (key) => {
        setFilterKey(key)
        const filtered = getBlogsByCategory(key)
        setFilteredBlogs(filtered)
    }

    const activeBtn = (value) => (value === filterKey ? "active" : "")
    return (
        <>
            <div className="blog-area inner-blog-1 section-padding inner-font-1" style={{minHeight: '800px', position: 'relative', zIndex: 1}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mesonry-menu">
                                <ul id="grid-filter">
                                    <li className={activeBtn("*")} onClick={() => handleFilterKeyChange("*")}>All</li>
                                    <li className={activeBtn("apple")} onClick={() => handleFilterKeyChange("apple")}>Apple</li>
                                    <li className={activeBtn("operations")} onClick={() => handleFilterKeyChange("operations")}>Operations</li>
                                    <li className={activeBtn("devices")} onClick={() => handleFilterKeyChange("devices")}>Devices</li>
                                    <li className={activeBtn("export")} onClick={() => handleFilterKeyChange("export")}>Export</li>
                                    <li className={activeBtn("insights")} onClick={() => handleFilterKeyChange("insights")}>Insights</li>
                                    <li className={activeBtn("guides")} onClick={() => handleFilterKeyChange("guides")}>Guides</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{minHeight: '600px'}}>
                        {filteredBlogs.map((blog) => (
                            <div key={blog.id} className={`${twocol ? "col-md-6" : "col-md-6 col-lg-4"}`}>
                                <div className={`single-blog ${blogSm ? "blog-sm" : "blog-md"}`}>
                                    <div className="blog-img">
                                        <Link href={`/blog/${blog.slug}`}>
                                            <img src={blog.image} alt="" />
                                        </Link>
                                    </div>
                                    <ul className="blog-tags">
                                        <li><Link href="#">{blog.tag}</Link></li>
                                    </ul>
                                    <h3>
                                        <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                    </h3>
                                    <p>{blog.excerpt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
