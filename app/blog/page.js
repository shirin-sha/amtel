
import Layout from "@/components/layout/Layout"
import BlogFilter1 from "@/components/elements/BlogFilter1"

export default function Page() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="OUR BLOG" showSubscribe={false}>
                <BlogFilter1 />
             
            </Layout>
        </>
    )
}