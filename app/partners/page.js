'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function Page() {
    const [activeTab, setActiveTab] = useState('all')

    const partners = {
        all: [
            // Kuwait partners
            { src: "/assets/img/logo/stc-logo-purple.svg", alt: "stc Kuwait" },
            { src: "/assets/img/logo/ooredoo_logo.svg", alt: "Ooredoo" },
            { src: "/assets/img/logo/future.png", alt: "future" },
            { src: "/assets/img/logo/akn-logo-english.svg", alt: "AKN" },
            { src: "/assets/img/logo/arab-business-machine.png", alt: "BHG" },
            { src: "/assets/img/logo/channel-logo-color.png", alt: "Brand" },
            { src: "/assets/img/logo/Abp.png", alt: "Brand" },
            // Bahrain partners
            { src: "/assets/img/logo/SharafDG.png", alt: "SharafDG" },
            { src: "/assets/img/logo/Batelco.png", alt: "Batelco" },
            { src: "/assets/img/logo/Zain.png", alt: "Zain" },
            // Saudi Arabia partners
            { src: "/assets/img/logo/xRedington.png", alt: "xRedington" },
            { src: "/assets/img/logo/extra.png", alt: "Extra" }
        ],
        kuwait: [
            { src: "/assets/img/logo/stc-logo-purple.svg", alt: "stc Kuwait" },
            { src: "/assets/img/logo/ooredoo_logo.svg", alt: "Ooredoo" },
            { src: "/assets/img/logo/future.png", alt: "future" },
            { src: "/assets/img/logo/akn-logo-english.svg", alt: "AKN" },
            { src: "/assets/img/logo/arab-business-machine.png", alt: "BHG" },
            { src: "/assets/img/logo/channel-logo-color.png", alt: "Brand" },
            { src: "/assets/img/logo/Abp.png", alt: "Brand" }
        ],
        bahrain: [
            { src: "/assets/img/logo/SharafDG.png", alt: "SharafDG" },
            { src: "/assets/img/logo/Batelco.png", alt: "Batelco" },
            { src: "/assets/img/logo/channel-logo-color.png", alt: "Brand" },
            { src: "/assets/img/logo/stc-logo-purple.svg", alt: "stc Bahrain" },
            { src: "/assets/img/logo/Zain.png", alt: "Zain" },
            { src: "/assets/img/logo/arab-business-machine.png", alt: "Arab Business Machine" }
        ],
        saudi: [
            { src: "/assets/img/logo/akn-logo-english.svg", alt: "AKN" },
            { src: "/assets/img/logo/xRedington.png", alt: "xRedington" },
            { src: "/assets/img/logo/extra.png", alt: "Extra" }
        ]
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Partners">
                <div>
                    <div className="section-padding bg-28">
                        <div className="container">
                            {/* Tab Navigation */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="mesonry-menu">
                                        <ul id="grid-filter">
                                            <li className={activeTab === 'all' ? 'active' : ''} onClick={() => setActiveTab('all')}>All</li>
                                            <li className={activeTab === 'kuwait' ? 'active' : ''} onClick={() => setActiveTab('kuwait')}>Kuwait</li>
                                            <li className={activeTab === 'bahrain' ? 'active' : ''} onClick={() => setActiveTab('bahrain')}>Bahrain</li>
                                            <li className={activeTab === 'saudi' ? 'active' : ''} onClick={() => setActiveTab('saudi')}>Saudi Arabia</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="row justify-content-center g-2">
                                {partners[activeTab].map((partner, index) => (
                                    <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3">
                                        <div className="single-logo bg-white rounded shadow-sm p-3 mb-4" style={{height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                            <img src={partner.src} alt={partner.alt} style={{maxHeight: '90px', width: 'auto', height: 'auto', objectFit: 'contain'}} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
