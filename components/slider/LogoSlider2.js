'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
}

export default function LogoSlider2() {
    return (
        <>
            <Swiper {...swiperOptions} className="logos owl-carousel">
                <SwiperSlide className="single-logo" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src="/assets/img/logo/stc-logo-purple.svg" alt="" style={{maxHeight: '80px', width: 'auto', height: 'auto', objectFit: 'contain', opacity: '1'}} className="logo-slider-img" />
                </SwiperSlide>
                <SwiperSlide className="single-logo" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src="/assets/img/logo/ooredoo_logo.svg" alt="" style={{maxHeight: '120px', width: 'auto', height: 'auto', objectFit: 'contain', opacity: '1'}} className="logo-slider-img" />
                </SwiperSlide>
                <SwiperSlide className="single-logo" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src="/assets/img/logo/Zain.png" alt="" style={{maxHeight: '120px', width: 'auto', height: 'auto', objectFit: 'contain', opacity: '1'}} className="logo-slider-img" />
                </SwiperSlide>
                <SwiperSlide className="single-logo" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src="/assets/img/logo/lulu.png" alt="" style={{maxHeight: '120px', width: 'auto', height: 'auto', objectFit: 'contain', opacity: '1'}} className="logo-slider-img" />
                </SwiperSlide>
                <SwiperSlide className="single-logo" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src="/assets/img/logo/arab-business-machine.png" alt="" style={{maxHeight: '120px', width: 'auto', height: 'auto', objectFit: 'contain', opacity: '1'}} className="logo-slider-img" />
                </SwiperSlide>
                <SwiperSlide className="single-logo" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src="/assets/img/logo/binhindi.png" alt="" style={{maxHeight: '120px', width: 'auto', height: 'auto', objectFit: 'contain', opacity: '1'}} className="logo-slider-img" />
                </SwiperSlide>
                <SwiperSlide className="single-logo" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src="/assets/img/logo/Abp.png" alt="" style={{maxHeight: '120px', width: 'auto', height: 'auto', objectFit: 'contain', opacity: '1'}} className="logo-slider-img" />
                </SwiperSlide>
               
            </Swiper>
        </>
    )
}
