
'use client'
import Isotope from "isotope-layout"
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from "react"

export default function CaseStudyFilter1({ twocol, blogSm }) {
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
        

            <div className="blog-area inner-blog-1 casestudy-2 section-padding inner-font-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mesonry-menu">
                                <ul id="grid-filter">
                                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All</li>
                                    <li className={activeBtn("lifestyle")} onClick={handleFilterKeyChange("lifestyle")}>Lifestyle</li>
                                    <li className={activeBtn("stories")} onClick={handleFilterKeyChange("stories")}>Stories</li>
                                    <li className={activeBtn("design")} onClick={handleFilterKeyChange("design")}>Design</li>
                                    <li className={activeBtn("marketing")} onClick={handleFilterKeyChange("marketing")}>Marketing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="masonry-grid">
                        <div className="col-md-6 col-lg-4 mesonry-item design marketing stories lifestyle">
                            <div className="single-case-study">
                                <div className="case-study-img">
                                    <img src="/assets/img/case-study/case-1.jpg" alt="" />
                                </div>
                                <div className="case-study-contents">
                                    <ul className="case-categories">
                                        <li>
                                            <Link href="/single-case-study-1">HUMAN RESOURCES</Link>
                                        </li>
                                    </ul>
                                    <h4>
                                        <Link href="/single-case-study-1">Kinabalu National Forest Human resoucres management</Link>
                                    </h4>
                                    <Link href="#" className="theme-btn-7">Learn More
                                        <img src="/assets/img/icons/arrow-up-right.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mesonry-item design marketing">
                            <div className="single-case-study">
                                <div className="case-study-img">
                                    <img src="/assets/img/case-study/case-2.jpg" alt="" />
                                </div>
                                <div className="case-study-contents">
                                    <ul className="case-categories">
                                        <li>
                                            <Link href="/single-case-study-1">HUMAN RESOURCES</Link>
                                        </li>
                                    </ul>
                                    <h4>
                                        <Link href="/single-case-study-1">Kinabalu National Forest Human resoucres management</Link>
                                    </h4>
                                    <Link href="#" className="theme-btn-7">Learn More
                                        <img src="/assets/img/icons/arrow-up-right.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mesonry-item design marketing stories">
                            <div className="single-case-study">
                                <div className="case-study-img">
                                    <img src="/assets/img/case-study/case-3.jpg" alt="" />
                                </div>
                                <div className="case-study-contents">
                                    <ul className="case-categories">
                                        <li>
                                            <Link href="/single-case-study-1">HUMAN RESOURCES</Link>
                                        </li>
                                    </ul>
                                    <h4>
                                        <Link href="/single-case-study-1">Kinabalu National Forest Human resoucres management</Link>
                                    </h4>
                                    <Link href="#" className="theme-btn-7">Learn More
                                        <img src="/assets/img/icons/arrow-up-right.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mesonry-item design marketing stories">
                            <div className="single-case-study">
                                <div className="case-study-img">
                                    <img src="/assets/img/case-study/case-4.jpg" alt="" />
                                </div>
                                <div className="case-study-contents">
                                    <ul className="case-categories">
                                        <li>
                                            <Link href="/single-case-study-1">HUMAN RESOURCES</Link>
                                        </li>
                                    </ul>
                                    <h4>
                                        <Link href="/single-case-study-1">Kinabalu National Forest Human resoucres management</Link>
                                    </h4>
                                    <Link href="#" className="theme-btn-7">Learn More
                                        <img src="/assets/img/icons/arrow-up-right.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mesonry-item design lifestyle stories">
                            <div className="single-case-study">
                                <div className="case-study-img">
                                    <img src="/assets/img/case-study/case-5.jpg" alt="" />
                                </div>
                                <div className="case-study-contents">
                                    <ul className="case-categories">
                                        <li>
                                            <Link href="/single-case-study-1">HUMAN RESOURCES</Link>
                                        </li>
                                    </ul>
                                    <h4>
                                        <Link href="/single-case-study-1">Kinabalu National Forest Human resoucres management</Link>
                                    </h4>
                                    <Link href="#" className="theme-btn-7">Learn More
                                        <img src="/assets/img/icons/arrow-up-right.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mesonry-item design markering">
                            <div className="single-case-study">
                                <div className="case-study-img">
                                    <img src="/assets/img/case-study/case-6.jpg" alt="" />
                                </div>
                                <div className="case-study-contents">
                                    <ul className="case-categories">
                                        <li>
                                            <Link href="/single-case-study-1">HUMAN RESOURCES</Link>
                                        </li>
                                    </ul>
                                    <h4>
                                        <Link href="/single-case-study-1">Kinabalu National Forest Human resoucres management</Link>
                                    </h4>
                                    <Link href="#" className="theme-btn-7">Learn More
                                        <img src="/assets/img/icons/arrow-up-right.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mesonry-item design lifestyle">
                            <div className="single-case-study">
                                <div className="case-study-img">
                                    <img src="/assets/img/case-study/case-7.jpg" alt="" />
                                </div>
                                <div className="case-study-contents">
                                    <ul className="case-categories">
                                        <li>
                                            <Link href="/single-case-study-1">HUMAN RESOURCES</Link>
                                        </li>
                                    </ul>
                                    <h4>
                                        <Link href="/single-case-study-1">Kinabalu National Forest Human resoucres management</Link>
                                    </h4>
                                    <Link href="#" className="theme-btn-7">Learn More
                                        <img src="/assets/img/icons/arrow-up-right.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mesonry-item design lifestyle stories">
                            <div className="single-case-study">
                                <div className="case-study-img">
                                    <img src="/assets/img/case-study/case-8.jpg" alt="" />
                                </div>
                                <div className="case-study-contents">
                                    <ul className="case-categories">
                                        <li>
                                            <Link href="/single-case-study-1">HUMAN RESOURCES</Link>
                                        </li>
                                    </ul>
                                    <h4>
                                        <Link href="/single-case-study-1">Kinabalu National Forest Human resoucres management</Link>
                                    </h4>
                                    <Link href="#" className="theme-btn-7">Learn More
                                        <img src="/assets/img/icons/arrow-up-right.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mesonry-item design lifestyle marketing">
                            <div className="single-case-study">
                                <div className="case-study-img">
                                    <img src="/assets/img/case-study/case-9.jpg" alt="" />
                                </div>
                                <div className="case-study-contents">
                                    <ul className="case-categories">
                                        <li>
                                            <Link href="/single-case-study-1">HUMAN RESOURCES</Link>
                                        </li>
                                    </ul>
                                    <h4>
                                        <Link href="/single-case-study-1">Kinabalu National Forest Human resoucres management</Link>
                                    </h4>
                                    <Link href="#" className="theme-btn-7">Learn More
                                        <img src="/assets/img/icons/arrow-up-right.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
