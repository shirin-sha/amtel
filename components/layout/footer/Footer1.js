import Link from "next/link"
export default function Footer1() {
    return (
        <>
            <footer className="footer-area padding-top footer-2 bg9">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer mr50">
                                <Link href="/" className="footer-logo"> <img src="/assets/img/logo/site-logo-3.svg" alt="" /></Link>
                                <div className="space20" />
                                <p><strong>AMTEL GROUP OF COMPANIES</strong><br />
                                    We distribute mobiles, tablets, wearables, and gaming for regional channels.<br />
                                    Four GCC entities with export reach across MEA, Asia, Europe, and the USA.</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-6">
                            <div className="single-footer">
                                <h3>Learn</h3>
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link href="#">Services</Link></li>
                                        <li><Link href="#">Brands &amp; Categories</Link></li>
                                        <li><Link href="#">Operating Standard</Link></li>
                                        <li><Link href="#">Case Snapshots</Link></li>
                                        <li><Link href="#">Insights / Blog</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-md-6">
                            <div className="single-footer">
                                <h3>Our Company</h3>
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link href="#">About Us</Link></li>
                                        <li><Link href="#">Governance &amp; Quality</Link></li>
                                        <li><Link href="#">Careers</Link></li>
                                        <li><Link href="#">Privacy Policy</Link></li>
                                        <li><Link href="#">Terms of Use</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer">
                                <h3>Get in touch</h3>
                                <div className="footer-contact">
                                    <div className="single-contact">
                                        <div className="contact-icon">
                                            <img src="/assets/img/icons/contact-email2.svg" alt="" />
                                        </div>
                                        <Link href="mailto:sales@amtelintnl.com">sales@amtelintnl.com</Link>
                                        <Link href="https://amtelintnl.com" target="_blank">amtelintnl.com</Link>
                                    </div>
                                </div>
                                <div className="footer-contact">
                                    <div className="single-contact">
                                        <div className="contact-icon">
                                            <img src="/assets/img/icons/contact-phone2.svg" alt="" />
                                        </div>
                                        <Link href="#">UAE — +971 12345678</Link>
                                        <Link href="#">Kuwait — +965 12345678</Link>
                                        <Link href="#">Bahrain — +975 12345678</Link>
                                        <Link href="#">Saudi Arabia — +966 12345678</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center copyright2">
                        <div className="col-lg-6">
                            <p>© 2025 Amtel Group of Companies. All rights reserved.</p>
                        </div>
                        <div className="col-lg-6 text-right">
                            <div className="social social2">
                                <ul>
                                    <li><Link data-bs-toggle="tooltip" title="LinkedIn" href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                    </li>
                                    <li><Link data-bs-toggle="tooltip" title="Instagram" href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                    <li><Link data-bs-toggle="tooltip" title="Facebook" href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                    <li><Link data-bs-toggle="tooltip" title="X" href="#"><i className="fa-brands fa-x-twitter" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
