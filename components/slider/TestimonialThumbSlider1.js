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
                        <img src="/assets/img/testimonial/author1.jpg" alt="Procurement Lead" />
                    </div>
                    <div className="single-testimonial-nav">
                        <img src="/assets/img/testimonial/author2.jpg" alt="Category Manager" />
                    </div>
                    
                    <div className="single-testimonial-nav">
                        <img src="/assets/img/testimonial/author3.jpg" alt="Operations Director" />
                    </div>
                </Slider>
                <Slider
                    {...settingsMain}
                    asNavFor={nav2}
                    ref={(slider) => setSlider1(slider)}
                    className="slider-testimonial">
                    <div className="single-testimonial">
                        <h5>“Confirmations arrived fast, documents were complete, and the rollout stayed exactly
                            on schedule. Coordination was steady and professional from first brief to delivery.”</h5>
                        <div className="author">
                            <Link href="#">Procurement Lead</Link>
                            <p>National Telecom (KSA)</p>
                        </div>
                    </div>
                    <div className="single-testimonial">
                        <h5>“Amtel aligned assortments and serial lists early, so our promotions launched cleanly
                            with no last-minute changes. Communication was clear, concise, and timely.”</h5>
                        <div className="author">
                            <Link href="#">Category Manager</Link>
                            <p>Major Retail Group (Kuwait)</p>
                        </div>
                    </div>
                    <div className="single-testimonial">
                        <h5>“Cross-border paperwork and courier handoffs were handled flawlessly. Tracking,
                            updates, and issue flags were consistent—our team could plan with confidence.”</h5>
                        <div className="author">
                            <Link href="#">Operations Director</Link>
                            <p>Regional Distributor (UAE)</p>
                        </div>
                    </div>
                </Slider>
            </div>

        </>
    )
}

export default TestimonialThumbSlider1