import React from "react"
import HomeCTA from "../components/home_cta"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CaseStudyJSON from "../../content/casestudy/case-studies.json"
import JSONData from "../../content/about-us/about.json"
import {withPrefix} from 'gatsby'
import HomeTeam from "../components/home_team"
const AboutUsPage = ({data,location})=>{
    return(
        <Layout>
            <SEO></SEO>
            <main class="page-wrapper">
            {/* <!-- Start Breadcrumb Area --> */}
                    <div class="axil-breadcrumb-area breadcrumb-style-2 single-service pt--170 pb--70 theme-gradient">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-6 order-2 order-lg-1 mt_md--30 mt_sm--30">
                                    <div class="inner">
                                        <h1 class="title">{JSONData.title}</h1>
                                        <p dangerouslySetInnerHTML={{__html:JSONData.description}}></p>
                                    </div>
                                </div>
                                <div class="col-lg-6 order-1 order-lg-2">
                                    <div class="thumbnail text-left text-lg-right">
                                        <div class="image-group text-right">
                                            <img class="image-1 paralax-image" src={withPrefix(JSONData.image)} alt="Slider images"/>
                                            <img class="image-2 paralax-image" src={withPrefix("/images/slider/banner-about.svg")} alt="Slider images"/>
                                        </div>
                                        <div class="shape-group">
                                            <div class="shape shape-1">
                                                <i class="icon icon-breadcrumb-1"></i>
                                            </div>
                                            <div class="shape shape-2">
                                                <i class="icon icon-breadcrumb-2"></i>
                                            </div>
                                            <div class="shape shape-3 customOne">
                                                <i class="icon icon-breadcrumb-3"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Breadcrumb Area --> */}

                    {/* <!-- Start Featured Area -->
                    <div class="axil-featured-area ax-section-gap bg-color-white">
                        <div class="container">
                            <!-- Start Single Feature  -->
                            <div class="row d-flex flex-wrap axil-featured row--40">
                                <div class="col-lg-6 col-xl-6 col-md-12 col-12">
                                    <div class="thumb-inner">
                                        <div class="thumbnail">
                                            <img class="image w-100" src="assets/images/featured/featured-image-02.jpg" alt="Featured Images">
                                        </div>
                                        <div class="shape-group">
                                            <div class="shape">
                                                <i class="icon icon-breadcrumb-2"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-xl-6 col-md-12 col-12 mt_md--40 mt_sm--40">
                                    <div class="inner">
                                        <div class="section-title text-left">
                                            <span class="sub-title extra04-color wow">featured case study</span>
                                            <h2 class="title wow"><a href="single-case-study.html">Building software for world changers </a></h2>
                                            <p class="subtitle-2 wow">Donec metus lorem, vulputate at sapien sit amet, auctor
                                                iaculis
                                                lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique
                                                libero
                                                at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id
                                                dignissim et, imperdiet vitae mauris.</p>
                                            <a class="axil-button btn-large btn-transparent" href="single-case-study.html"><span
                                                    class="button-text">Read
                                                    Case Study</span><span class="button-icon"></span></a>
                                        </div>
                                        <div class="axil-counterup-area d-flex flex-wrap separator-line-vertical">
                                            <!-- Start Counterup -->
                                            <div class="single-counterup counterup-style-1">
                                                <h3 class="count">15</h3>
                                                <p>ROI increase</p>
                                            </div>
                                            <!-- End Counterup -->

                                            <!-- Start Counterup -->
                                            <div class="single-counterup counterup-style-1">
                                                <h3 class="count counter-k">60</h3>
                                                <p>Monthly website visits</p>
                                            </div>
                                            <!-- End Counterup -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Feature  -->
                        </div>
                    </div>
                    <!-- End Featured Area --> */}

                    {/* <!-- Start Our Service Area  --> */}
                    <div class="axil-service-area ax-section-gap bg-color-lightest">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="section-title text-center">
                                        <span class="sub-title extra08-color wow" data-splitting>our values</span>
                                        <h2 class="title wow" data-splitting>{JSONData.values_title}</h2>
                                        <p class="subtitle-2 wow" data-splitting>{JSONData.values_description}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {
                                    JSONData.values.map((item,index)=>{
                                        return(
                                            <div class="col-lg-4 col-md-6 col-12 mt--90 mt_md--40 mt_sm--30">
                                                <div class="axil-service-style--3 move-up wow">
                                                    <div class="icon">
                                                        <img src={withPrefix("/images/icons/layer.svg")} alt="Icon Images"/>
                                                        <div class="text">{index+1}</div>
                                                    </div>
                                                    <div class="content">
                                                        <h4 class="title">{item.title}</h4>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                
                                
                                

                                

                            </div>
                        </div>
                    </div>
                    {/* <!-- End Our Service Area  --> */}
                    <HomeTeam></HomeTeam>          

        </main>
            <HomeCTA></HomeCTA>
        </Layout>
    )
}

export default AboutUsPage