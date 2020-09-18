import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {withPrefix} from 'gatsby'
import JSONData from "../../content/service-details/service.json"
import ServiceProcess from '../components/service-process'
import HomeCTA from "../components/home_cta"
const caseStudyDetailTemplate = ({data,pageContext,location})=>{
    var serviceData = null;
    JSONData.forEach((item,index)=>{
    if(item.slug === pageContext.slug)
    {
        serviceData = item;
    }
    })
    return(
        <>
        <Layout>
            <SEO></SEO>
            <div className="main-wrapper">
            {/* <!-- Start Breadcrumb Area --> */}
                <div className="axil-breadcrumb-area breadcrumb-style-2 single-service pt--170 pb--70 theme-gradient">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-2 order-lg-1 mt_md--30 mt_sm--20">
                                <div className="inner">
                                    <h2 className="title">{serviceData.service_title}</h2>
                                    <p dangerouslySetInnerHTML={{__html:serviceData.service_description}}></p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="thumbnail text-left text-lg-right">
                                    <div className="image-group">
                                        <img className="image-1 paralax-image" src={withPrefix(serviceData.service_image)} alt="Slider images"/>
                                        <img className="image-2 paralax-image" src={withPrefix("/images/slider/single-service-01.svg")} alt="Slider images"/>
                                    </div>
                                    <div className="shape-group">
                                        <div className="shape shape-1">
                                            <i className="icon icon-breadcrumb-1"></i>
                                        </div>
                                        <div className="shape shape-2">
                                            <i className="icon icon-breadcrumb-2"></i>
                                        </div>
                                        <div className="shape shape-3 customOne">
                                            <i className="icon icon-breadcrumb-3"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* <!-- End Breadcrumb Area --> */}

            {/* <!-- Start About Area  --> */}
            <div className="axil-about-area ax-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12 col-xl-5 offset-xl-2 col-md-12 col-12 mt_md--40 mt_sm--40">
                            <div className="axil-about-inner">
                                <div className="section-title text-left">
                                    <span className="sub-title extra08-color">About Service</span>
                                    <h2 className="title">{serviceData.about_service_title}</h2>
                                        <p className="subtitle-2" dangerouslySetInnerHTML={{__html:serviceData.about_service_description}}></p>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End About Area  --> */}

            {/* <!-- Start Working Process  --> */}
            <ServiceProcess serviceProcess={serviceData.process}/>
            
            {/* <!-- End Working Process  --> */}

            {/* <!-- Start Portfolio Area --> */}
            
            {/* <!-- End Portfolio Area --> */}

            {/* <!-- Start Call To Action --> */}
            
            {/* <!-- End Call To Action --> */}

        </div>
        <HomeCTA></HomeCTA>
        </Layout>
        </>
    )
    
}
export default caseStudyDetailTemplate