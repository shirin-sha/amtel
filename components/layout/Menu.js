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
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/service">Service</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/partners">Partners</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
