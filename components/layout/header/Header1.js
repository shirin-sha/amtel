import Link from "next/link"
import Menu from "../Menu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header id="header" className={`header header-2 header-absolute d-none d-lg-block ${scroll ? "sticky" : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
							<div className="header-elements" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
								<div className="header-left">
									<div className="logo">
										<Link href="/"><img src="/assets/img/logo/amtel.png" alt="" style={{maxHeight: '50px', width: 'auto'}} /></Link>
									</div>
								</div>
								<div className="header-center" style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
									<div className="main-menu">
										<div className="menu-wrap">
											<Menu />
										</div>
									</div>
								</div>
								<div className="desktop-info">
                                    <div className="quick_contact">
							<div className="quick_contact_icon bg-27">
								<i className="fa-light fa-envelope" style={{color: '#FF7A1A'}} />
							</div>
							<div className="quick_contact_content">
								<strong style={{fontSize: '15px'}}>Get in touch</strong>
								<Link href="mailto:info@amtelintnl.com">info@amtelintnl.com</Link>
							</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
