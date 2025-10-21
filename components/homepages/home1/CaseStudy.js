
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}
export default function CaseStudy() {
    return (
        <>
            <div className="case-study-1 section-padding bg6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <div className="heading2 white-heading text-center">
                                <small data-aos="fade-up" data-aos-duration={600} className="heading-top">Why partners choose Amtel</small>
                                <h2 data-aos="fade-up" data-aos-duration={800}>Consistent Results,<br />Project After Project.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Swiper {...swiperOptions} className="case-studes owl-carousel" data-aos="fade-up" data-aos-duration={1200}>
                                <SwiperSlide className="single-case-study">
                                    <div className="case-study-img">
                                        <img src="/assets/img/case-study/casestudy1.jpg" alt="" />
                                    </div>
                                    <div className="case-study-content">
                                        <h4>Assortment Planning</h4>
                                        <p>Model lists aligned to timelines and demand—so allocations, colours, and storage
                                            options match what stores and programs actually need.</p>
                                        {/* <Link href="#" className="theme-btn-7">Check out Check Study <span><i className="fa-solid fa-arrow-right" /></span></Link> */}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="single-case-study">
                                    <div className="case-study-img">
                                        <img src="/assets/img/case-study/casestudy2.jpg" alt="" />
                                    </div>
                                    <div className="case-study-content">
                                        <h4>Launch Readiness</h4>
                                        <p>Stock, documents, and messaging confirmed before day one. Clean handovers keep
                                            promotions and store rollouts smooth and on schedule.</p>
                                        {/* <Link href="#" className="theme-btn-7">Check out Check Study <span><i className="fa-solid fa-arrow-right" /></span></Link> */}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="single-case-study">
                                    <div className="case-study-img">
                                        <img src="/assets/img/case-study/casestudy3.jpg" alt="" />
                                    </div>
                                    <div className="case-study-content">
                                        <h4>Continuity & Refill</h4>
                                        <p>Steady availability for core lines with early updates and sensible alternates—so shelves
                                            stay balanced and programs don’t stall.</p>
                                        {/* <Link href="#" className="theme-btn-7">Check out Check Study <span><i className="fa-solid fa-arrow-right" /></span></Link> */}
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
