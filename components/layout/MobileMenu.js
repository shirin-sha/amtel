import Link from "next/link"
import { useState } from 'react'
export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-header mobile-header-4 d-lg-none">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                {/* <Link href="/"><img src="/assets/img/logo/amtel.png" alt="" style={{maxHeight: '40px', width: 'auto'}} /></Link> */}
                            </div>
                            <div className="mobile-nav-icon" onClick={handleMobileMenu}>
                                <i className="fa-solid fa-bars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mobile-sidebar ${isMobileMenu ? "mobile-menu-active" : ""}`}>
                <div className="menu-close" onClick={handleMobileMenu}>
                    <i className="fa-solid fa-xmark" />
                </div>
                <div className="mobile-nav">
                    <ul className="mobile-nav-list">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/service">Service</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="#">Case Study</Link>
                            <span className={isActive.key == 4 ? "submenu-button submenu-opened" : "submenu-button"} onClick={() => handleToggle(4)}><em /></span>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                <li><Link href="/case-study-1">Case Study 1</Link></li>
                                <li><Link href="/case-study-2">Case Study 2</Link></li>
                                <li><Link href="/case-study-3">Case Study 3</Link></li>
                                <li><Link href="/case-study-4">Case Study 4</Link></li>
                                <li><Link href="/single-case-study-1">Single Case</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/partners">Partners</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                    <div className="mobile-contact">
                        <div className="single-footer">
                            <h3>Get in touch</h3>
                            <div className="footer-contact">
                                <div className="single-contact">
                                    <div className="contact-icon">
                                        <img src="/assets/img/icons/contact-phone4.svg" alt="" />
                                    </div>
                                    <Link href="#">USA: +91 02 2585 0556</Link>
                                    <Link href="#">UK: +61 02 2585 0556</Link>
                                </div>
                            </div>
                            <div className="footer-contact">
                                <div className="single-contact">
                                    <div className="contact-icon">
                                        <img src="/assets/img/icons/contact-email4.svg" alt="" />
                                    </div>
                                    <Link href="#">Contacthelp@Demoui.co</Link>
                                    <Link href="#">Info@consultia.co</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
