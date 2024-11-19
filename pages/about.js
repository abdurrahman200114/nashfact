import BlogSidebar from "@/components/elements/BlogSidebar"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import data from "@/util/blogData"


export default function AboutUs(){
    // let Router = useRouter()
    // const [item, setItem] = useState(null)
    // const { id } = Router.query

    // useEffect(() => {
    //     setItem(data.find((data) => data.id == id))
    // }, [id])
    return (
        <>

                <Layout headTitle="About - Nashfact" >
                    <>
                        <section className="pt-80 pb-100">
                            <div className="container">
                                <div className="row justify-content-center">
                                <div className="col-lg-7">
                                        <div className="about-details-wrap">

                                            <h2 className="title">Nabeil Schaik</h2>
                                            <h4>Founder of Nashfact</h4>

                                            <div className="about-details-content text-justify ">
                                                <p>Nabeel Shaikh (aka Nabeil Schaik), a seasoned financial professional, a maestro in investment banking, and a serial entrepreneur known for his startup accelerator skills, is the founder of Nashfact. This online publishing platform serves as a hub for authentic information from the business world, featuring insights into new business trends, startup stories, and other valuable learning content. </p>
                                                <p>He is the co-founder of multiple ventures and a Financial Advisor at a prominent GCC-based unicorn. He has honed his vast 18 years of diversified experience in Pakistan, including a decade in the UK and GCC. </p>
                                                <p>He is recognized for his Angel Investing, and his entrepreneurial journey has seen him Co-Found Ed-Watch (edwatch.org), an edtech startup launched in 2021. Nabeil spearheads Strategic Partnerships to expand into international markets and drives Product Development initiatives. Ed-Watch, a multi-million-dollar startup, offers specialized training specifically tailored for finance professionals. </p>
                                                <p>Adding to his entrepreneurial portfolio, Nabeil serves as the co-founder and Chief Strategic Officer at Mavens Advisors, launched in 2022. Nabeil’s primary focus as Chief Strategic Officer is on driving Product Development and refining processes for operational efficiency and client satisfaction. </p>
                                                <p>In 2013, he achieved his Chartered Accountancy qualification from the prestigious Institute of Chartered Accountants of Pakistan (ICAP) and MSc in Accounting and Finance from the University of Northampton in 2021. </p>
                                                <p>Beyond his corporate and entrepreneurial pursuits, Nabeil is a dynamic corporate trainer and engaging keynote speaker. His influence extends to social media as well, where he inspires and educates as a Top LinkedIn Voice and the first Meta-Verified Chartered Accountant from Pakistan, solidifying his status as a leader and innovator in his field.</p>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="about-img">
                                                    <img src={`/assets/img/others/founder.png`} alt="" style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center pt-100">
                                    <div className="col-lg-5">
                                        <div className="about-img">
                                                    <img src={`/assets/img/others/editor.png`} alt="" style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="about-details-wrap">

                                            <h2 className="title">Ubaid Ur Rehman</h2>
                                            <h4>Editor</h4>

                                            <div className="about-details-content">
                                                <p>Ubaid ur Rehman is the dedicated editor behind Nashfact, known for his ability to transform complex topics into engaging and accessible content. With a focus on blogs, articles, and social media, Ubaid leverages his excellent research skills to ensure readers receive informative yet meaningful insights. </p>
                                                <p>Ubaid brings to the table more than 8 years of experience in the finance sector, skillfully blending his financial acumen with content writing abilities. This unique combination empowers him to produce content that is not just informative but also engaging and accessible to readers, catering perfectly to enthusiasts of business, finance, technology, and entrepreneurship.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                </Layout>
        </>
    )
}