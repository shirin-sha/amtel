
'use client'
import { useState } from 'react'

export default function Faq1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleClick = (key) => {
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
            <div id="faqs">
                <div className="single-faq">
                    <h2 className={isActive.key == 1 ? "faq-heading" : "faq-heading collapsed"} onClick={() => handleClick(1)}>
                        Do you sell retail or only B2B?
                    </h2>
                    <div id="collapse1" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <p>
                            Amtel serves B2B programs—operators, retailers, resellers, and enterprise.
                        </p>
                    </div>
                </div>
                <div className="single-faq">
                    <h2 className={isActive.key == 2 ? "faq-heading" : "faq-heading collapsed"} onClick={() => handleClick(2)}>
                        Which brands do you coordinate?
                    </h2>
                    <div id="collapse2" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <p>
                            Apple (Kuwait authorized), plus Samsung, Honor, Redmi, Tecno, and Sony.
                        </p>
                    </div>
                </div>
                <div className="single-faq">
                    <h2 className={isActive.key == 3 ? "faq-heading" : "faq-heading collapsed"} onClick={() => handleClick(3)}>
                        Can you manage cross-border paperwork?
                    </h2>
                    <div id="collapse3" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <p>
                            Yes—commercial invoices, COO, packing lists, serial lists, and customs.
                        </p>
                    </div>
                </div>
                <div className="single-faq">
                    <h2 className={isActive.key == 4 ? "faq-heading" : "faq-heading collapsed"} onClick={() => handleClick(4)}>
                        What lead times should we expect?
                    </h2>
                    <div id="collapse4" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <p>
                            Allocation-dependent. We confirm timelines at PO and keep status visible.
                        </p>
                    </div>
                </div>
                <div className="single-faq">
                    <h2 className={isActive.key == 5 ? "faq-heading" : "faq-heading collapsed"} onClick={() => handleClick(5)}>
                        How do we start a partnership?
                    </h2>
                    <div id="collapse5" className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <p>
                            Share company details, target categories, and destinations. We’ll align scope and schedule.
                        </p>
                    </div>
                </div>
                <div className="single-faq">
                    <h2 className={isActive.key == 6 ? "faq-heading" : "faq-heading collapsed"} onClick={() => handleClick(6)}>
                        Do you support gaming categories?
                    </h2>
                    <div id="collapse6" className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <p>
                            Yes—PlayStation, Nintendo, Xbox, and related accessories when available.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
