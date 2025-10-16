
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
const BlogFilter1 = dynamic(() => import('@/components/elements/BlogFilter1'), {
    ssr: false,
})
export default function Page() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="OUR BLOG">
                <BlogFilter1 />
             
            </Layout>
        </>
    )
}