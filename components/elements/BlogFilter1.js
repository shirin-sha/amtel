
'use client'
import Isotope from "isotope-layout"
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from "react"

export default function BlogFilter1({ twocol, blogSm }) {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope("#masonry-grid", {
                itemSelector: ".mesonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".mesonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "active" : "")
    return (
        <>
            <div className="blog-area inner-blog-1 section-padding inner-font-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mesonry-menu">
                                <ul id="grid-filter">
                                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All</li>
                                    <li className={activeBtn("apple")} onClick={handleFilterKeyChange("apple")}>Apple</li>
                                    <li className={activeBtn("operations")} onClick={handleFilterKeyChange("operations")}>Operations</li>
                                    <li className={activeBtn("devices")} onClick={handleFilterKeyChange("devices")}>Devices</li>
                                    <li className={activeBtn("export")} onClick={handleFilterKeyChange("export")}>Export</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="masonry-grid">
                        <div className={`${twocol ? "col-md-6" : "col-md-6 col-lg-4"}  mesonry-item apple`}>
                            <div className={`single-blog ${blogSm ? "blog-sm" : "blog-md"} `}>
                                <div className="blog-img">
                                    <Link href="/single-1"><img src="/assets/img/blog/blog3.png" alt="" /></Link>
                                </div>
                                <ul className="blog-tags">
                                    <li><Link href="#">Apple</Link></li>
                                </ul>
                                <h3>
                                    <Link href="/single-1">Apple Deployments Done Right: The Non-Negotiables</Link>
                                </h3>
                                <p>
                                    A practical checklist for brand-safe Apple rollouts—approved SKUs, compliant messaging, serial validation, and paperwork sequencing that keeps launches predictable.
                                </p>
                            </div>
                        </div>
                        <div className={`${twocol ? "col-md-6" : "col-md-6 col-lg-4"}  mesonry-item operations`}>
                            <div className={`single-blog ${blogSm ? "blog-sm" : "blog-md"} `}>
                                <div className="blog-img">
                                    <Link href="/single-1"><img src="/assets/img/blog/blog4.png" alt="" /></Link>
                                </div>
                                <ul className="blog-tags">
                                    <li><Link href="#">Operations</Link></li>
                                </ul>
                                <h3>
                                    <Link href="/single-1">From PO to Handover: How to Keep Device Supply Calm</Link>
                                </h3>
                                <p>
                                    The essential milestones—allocation, documents, customs, and handover—and how a single operating playbook reduces exceptions and last-minute escalations.
                                </p>
                            </div>
                        </div>
                        <div className={`${twocol ? "col-md-6" : "col-md-6 col-lg-4"}  mesonry-item devices`}>
                            <div className={`single-blog ${blogSm ? "blog-sm" : "blog-md"} `}>
                                <div className="blog-img">
                                    <Link href="/single-1"><img src="/assets/img/blog/blog5.png" alt="" /></Link>
                                </div>
                                <ul className="blog-tags">
                                    <li><Link href="#">Devices</Link></li>
                                </ul>
                                <h3>
                                    <Link href="/single-1">Building Program-Ready Kits for Education and Enterprise</Link>
                                </h3>
                                <p>
                                    Selecting tablets, wearables, and accessories that actually fit use cases—plus pairing, labeling, and replenishment tactics that keep deployments on schedule.
                                </p>
                            </div>
                        </div>
                        <div className={`${twocol ? "col-md-6" : "col-md-6 col-lg-4"}  mesonry-item export`}>
                            <div className={`single-blog ${blogSm ? "blog-sm" : "blog-md"} `}>
                                <div className="blog-img">
                                    <Link href="/single-1"><img src="/assets/img/blog/blog6.png" alt="" /></Link>
                                </div>
                                <ul className="blog-tags">
                                    <li><Link href="#">Export</Link></li>
                                </ul>
                                <h3>
                                    <Link href="/single-1">Cross-Border Without Friction: Documents That Clear Fast</Link>
                                </h3>
                                <p>
                                    HS codes, COO, packing lists, and IMEI files—how to prepare destination-ready documents so intakes, audits, and transfers move smoothly across regions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
