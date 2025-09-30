
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
                                <small data-aos="fade-up" data-aos-duration={600} className="heading-top"><img src="/assets/img/icons/hands.svg" alt="" />We Are Here For Your Tax
                                    Relief.</small>
                                <h2 data-aos="fade-up" data-aos-duration={800}><span className="heilight-left">Consultia</span> tax
                                    is built for
                                    small business.</h2>
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
                                        <h4>Operational Excellence</h4>
                                        <p>Making a mistake on your return can be costly. From missed deductions.</p>
                                        <Link href="#" className="theme-btn-7">Check out Check Study <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="single-case-study">
                                    <div className="case-study-img">
                                        <img src="/assets/img/case-study/casestudy2.jpg" alt="" />
                                    </div>
                                    <div className="case-study-content">
                                        <h4>Analytics Consulting</h4>
                                        <p>Making a mistake on your return can be costly. From missed deductions.</p>
                                        <Link href="#" className="theme-btn-7">Check out Check Study <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="single-case-study">
                                    <div className="case-study-img">
                                        <img src="/assets/img/case-study/casestudy3.jpg" alt="" />
                                    </div>
                                    <div className="case-study-content">
                                        <h4>Analytics Strategy</h4>
                                        <p>Making a mistake on your return can be costly. From missed deductions.</p>
                                        <Link href="#" className="theme-btn-7">Check out Check Study <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="single-case-study">
                                    <div className="case-study-img">
                                        <img src="/assets/img/case-study/casestudy3.jpg" alt="" />
                                    </div>
                                    <div className="case-study-content">
                                        <h4>Analytics Strategy</h4>
                                        <p>Making a mistake on your return can be costly. From missed deductions.</p>
                                        <Link href="#" className="theme-btn-7">Check out Check Study <span><i className="fa-solid fa-arrow-right" /></span></Link>
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
