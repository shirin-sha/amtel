import Link from "next/link"
export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <div className="mobile-header mobile-header-4 d-lg-none">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link href="/"><img src="/assets/img/logo/amtel.png" alt="" style={{maxHeight: '40px', width: 'auto'}} /></Link>
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
                        <li><Link href="/">HOME</Link></li>
                        <li><Link href="/about">ABOUT US</Link></li>
                        <li><Link href="/service">SERVICE</Link></li>
                        <li><Link href="/blog">BLOG</Link></li>
                        <li><Link href="/partners">PARTNERS</Link></li>
                        <li><Link href="/contact">CONTACT</Link></li>
                    </ul>
                    <div className="mobile-contact">
                        <div className="single-footer">
                            <h3>Get in touch</h3>
                            <div className="footer-contact">
                                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <span style={{width: '40px', height: '40px', borderRadius: '50%', background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <i className="fa-light fa-envelope" style={{color: '#ff6b35', fontSize: '18px'}} />
                                    </span>
                                    <Link href="mailto:info@amtelintnl.com" style={{color: '#ffffff', fontSize: '16px'}}>info@amtelintnl.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}