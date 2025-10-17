'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useEffect } from "react"

export default function Menu() {
    const routerPath = usePathname()
    useEffect(() => {
        if (routerPath == "/index-rtl-1") {
            document.documentElement.lang = "ar"
            document.documentElement.dir = "rtl"
            document.body.classList.add("rtl-version")
        } else {
            document.documentElement.lang = "en"
            document.documentElement.dir = ""
            document.body.classList.remove("rtl-version")
        }
    })
    return (
        <>

            <ul className="menu_list scroll">
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/about">ABOUT US</Link></li>
                <li><Link href="/service">SERVICE</Link></li>
                <li><Link href="/blog">BLOG</Link></li>
                <li><Link href="/partners">PARTNERS</Link></li>
                <li><Link href="/contact">CONTACT</Link></li>
            </ul>
        </>
    )
}
