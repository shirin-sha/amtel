'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import Slider from "react-slick"

const TestimonialThumbSlider1 = () => {
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const [slider1, setSlider1] = useState(null)
    const [slider2, setSlider2] = useState(null)

    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider2, slider1])

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // prevArrow: (".testimonial-prev-arrow"),
        // nextArrow: (".testimonial-next-arrow"),
        fade: true,
        loop: true,
    }

    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        loop: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
    }

    return (
        <>

            <div className="testimonial-sliders">
                <Slider
                    {...settingsThumbs}
                    asNavFor={nav1}
                    ref={(slider) => setSlider2(slider)}
                    className="testimonial-nav ">
					<div className="single-testimonial-nav">
						<span className="testimonial-icon-circle"><i className="fa-solid fa-stopwatch" /></span>
					</div>
					<div className="single-testimonial-nav">
						<span className="testimonial-icon-circle"><i className="fa-solid fa-diagram-project" /></span>
					</div>
					<div className="single-testimonial-nav">
						<span className="testimonial-icon-circle"><i className="fa-solid fa-box-open" /></span>
					</div>
                </Slider>
				<style jsx>{`
					.testimonial-icon-circle { display: inline-flex; align-items: center; justify-content: center; width: 72px; height: 72px; border-radius: 50%; background: #e9eff3; }
					.testimonial-icon-circle i { font-size: 42px; color: #ff5e14; }
				`}</style>
                <Slider
                    {...settingsMain}
                    asNavFor={nav2}
                    ref={(slider) => setSlider1(slider)}
                    className="slider-testimonial">
                    <div className="single-testimonial">
                        <h5>“Clear allocations, validated serials, and channel-ready paperwork move
together under one SOP. The result is steady timelines, clean handovers, and
launch days that feel routine across the UAE, Kuwait, Bahrain, and Saudi Arabia.
”</h5>
                        <div className="author">
                            <Link href="#">What partners notice</Link>
                            <p>Predictable schedules, accurate documents, calm projects.</p>
                        </div>
                    </div>
                    <div className="single-testimonial">
                        <h5>“From model lists to final delivery, every step is versioned, time-stamped, and
reconciled to a single shipment reference. That’s how multi-brand projects
across GCC markets stay simple and compliant.”</h5>
                        <div className="author">
                            <Link href="#">Why it works</Link>
                            <p>One source of truth, one timeline, one handover.</p>
                        </div>
                    </div>
                    <div className="single-testimonial">
                        <h5>“Allocations are confirmed, IMEIs reconciled, and documents pre-cleared before
freight moves. Apple programs in Kuwait and multi-brand channels across the
GCC follow the same disciplined cadence.”</h5>
                        <div className="author">
                            <Link href="#">What you get </Link>
                            <p>Clarity before dispatch, certainty at delivery</p>
                        </div>
                    </div>
                </Slider>
            </div>

        </>
    )
}

export default TestimonialThumbSlider1