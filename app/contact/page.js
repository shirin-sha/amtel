
import Layout from "@/components/layout/Layout"
import Faq1 from "@/components/elements/Faq1"
import Link from "next/link"
export default function Page() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONTACT">
                <div>
                    <div className="main-contact-form section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="main-form lg-mr-15">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <input type="text" name="fname" placeholder="First Name" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input type="text" name="lname" placeholder="Last Name" />
                                                </div>
                                                <div className="col-12">
                                                    <input type="email" name="email" placeholder="Email Address" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input type="text" name="products" placeholder="Products Interested In" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input type="text" name="subject" placeholder="Subject" />
                                                </div>
                                                <div className="col-12">
                                                    <textarea name="message" cols={30} rows={5} placeholder="Tell Us About Your Project" />
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="full-btn theme-btn-11">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="lg-ml-15">
                                        <div className="single-contact-box mb-30">
                                            <div className="contact-box-icon">
                                                <img src="/assets/img/icons/contact-1.svg" alt="" />
                                            </div>
                                            <div className="contact-box-content">
                                                <p className="font-f-3">CALL US</p>
                                                <Link className="font-f-3" href="tel:+97140000000">+971 4 000 0000</Link>
                                            </div>
                                        </div>
                                        <div className="single-contact-box mb-30">
                                            <div className="contact-box-icon">
                                                <img src="/assets/img/icons/contact-2.svg" alt="" />
                                            </div>
                                            <div className="contact-box-content">
                                                <p className="font-f-3">EMAIL US</p>
                                                <Link className="font-f-3" href="mailto:info@amtelintnl.com">info@amtelintnl.com</Link>
                                            </div>
                                        </div>
                                        <div className="single-contact-box">
                                            <div className="contact-box-icon">
                                                <img src="/assets/img/icons/contact-1.svg" alt="" />
                                            </div>
                                            <div className="contact-box-content">
                                                <p className="font-f-3">SALES & SUPPORT</p>
                                                <Link className="font-f-3" href="tel:+965123456">+965 123 456</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====Contact Form End=======*/}
                    {/*=====Office-area start=======*/}
                    <div className="office-area section-padding2 bg-13 inner-font-1 _relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center">
                                        <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Our Success in Numbers</small>
                                        <h2>Our Offices Across the Region</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>
                                            <Link href="#">UAE — Head Office</Link>
                                        </h3>
                                        <p>
                                            M-04, Bin Jaffar Building,<br />
                                            Eyal Nasser, Naif, Deira,<br />
                                            Dubai, UAE
                                        </p>
                                        <Link href="#" className="theme-btn-13">Get Direction
                                            <img src="/assets/img/icons/arrow-up-right-inner-1.svg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>Kuwait</h3>
                                        <p>
                                            Najma Complex, Office 10, 2nd Floor,
                                            Block-1, Ali Fahad Al Duwailah St,
                                            Farwaniya, Kuwait
                                        </p>
                                        <Link href="#" className="theme-btn-13">Get Direction
                                            <img src="/assets/img/icons/arrow-up-right-inner-1.svg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>Bahrain</h3>
                                        <p>
                                            Office B 570, Road 1807, Block 318,
                                            Al Hoora, Manama,
                                            Kingdom of Bahrain
                                        </p>
                                        <Link href="#" className="theme-btn-13">Get Direction
                                            <img src="/assets/img/icons/arrow-up-right-inner-1.svg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>Saudi Arabia</h3>
                                        <p>
                                            SQ Business Tower 2, Office 210,<br />
                                            Al Khozama, Al Khobar 34718,<br />
                                            Dammam, KSA
                                        </p>
                                        <Link href="#" className="theme-btn-13">Get Direction
                                            <img src="/assets/img/icons/arrow-up-right-inner-1.svg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>Hong Kong (Origins)</h3>
                                        <p>
                                            Established 1999<br />
                                            Corporate Registry<br />
                                            Hong Kong SAR
                                        </p>
                                      
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>Global Export Desk</h3>
                                        <p>
                                            GCC + Asia • Europe • USA<br />
                                            Documentation & Compliance<br />
                                            Support
                                        </p>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shape-007">
                            <img src="/assets/img/shapes/shape007.svg" alt="" />
                        </div>
                    </div>
                    {/*=====Office-area end=======*/}
                    {/*=====Faq start=======*/}
                    <div className="faq2 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center">
                                        <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />FAQ</small>
                                        <h2>Frequently Asked Questions</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <Faq1 />
                                </div>
                            </div>
                            <div className="space30" />
                            <div className="price-notice">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="heading4 inner-heading no-margin-heading">
                                            <h4 className="font-f-3 weight-700">Have more questions?</h4>
                                            <p>
                                                If you're a business with volume needs or a unique model, reach out—we'll suggest the most efficient, standards-led path.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-md-right">
                                        <Link href="#contact-form" className="theme-btn-11">Get In Touch</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====Faq end=======*/}
               
                </div>

            </Layout>
        </>
    )
}