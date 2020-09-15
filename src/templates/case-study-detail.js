import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {withPrefix} from 'gatsby'
import JSONData from "../../content/casestudy/case-studies.json"

const caseStudyDetailTemplate = ({data,pageContext,location})=>{
    var caseStudyData = null;
    JSONData.case_studies.forEach((item,index)=>{
        if(item.slug === pageContext.slug)
        {
            caseStudyData = item;
        }
    })

    return(
        <>
        <Layout>
            <SEO></SEO>
            {/* {console.log(pageContext.slug)} */}
            {/* <!-- Start Page Wrapper --> */}
                    <main className="page-wrapper">
                        {/* <!-- Start Breadcrumb Area --> */}
                        <div className="axil-breadcrumb-area breadcrumb-style-2 single-service pt--170 pb--70 theme-gradient">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 order-2 order-lg-1 mt_md--30 mt_sm--20">
                                        <div className="inner">
                                            <h2 className="title">Case study</h2>
                                            <p>A quick view of industry specific problems solved with design by the awesome team at
                                                Innovatics.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2">
                                        <div className="thumbnail text-left text-lg-right">
                                            <div className="image-group text-right">
                                                <img className="image-1 paralax-image" src={withPrefix("/images/slider/breadcrumb-4.jpg")} alt="Slider images"/>
                                                <img className="image-2 paralax-image" src={withPrefix("/images/slider/single-service-01.svg")} alt="Slider images"/>
                                            </div>
                                            <div className="shape-group">
                                                <div className="shape shape-1">
                                                    <i className="icon icon-breadcrumb-1"></i>
                                                </div>
                                                <div className="shape shape-2">
                                                    <i className="icon icon-breadcrumb-2"></i>
                                                </div>
                                                <div className="shape shape-3">
                                                    <i className="icon icon-breadcrumb-3"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Breadcrumb Area --> */}

                        {/* <!-- Start Project Brief  --> */}
                        <div className="axil-project-brief project-bief-styles ax-section-gap bg-color-white">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-xl-6 col-md-12 col-12">
                                        <div className="thumbnail position-relative">
                                            <img className="image w-100 paralax-image" src={withPrefix(caseStudyData.project_brief_image)} alt="Featured Images"/>
                                            
                                            <div className="shape-group shape-01">
                                                <img src={withPrefix("/images/others/contact-01.svg")} alt=""/>
                                            </div>
                                            <div className="shape-group shape-02">
                                                <img src={withPrefix("/images/others/contact-03.svg")} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xl-5 offset-xl-1 col-md-12 col-12">
                                        <div className="content mt_md--30 mt_sm--30">
                                            <div className="inner move-up wow">
                                                <h2 className="title mb--20">Project brief</h2>
                                                <p dangerouslySetInnerHTML={{__html:caseStudyData.project_brief}}/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <!-- End Project Brief  --> */}

                        {/* <!-- Start Project Brief  --> */}
                        <div className="axil-project-brief project-bief-styles order-style-2 ax-section-gap bg-color-lightest">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-xl-5 col-md-12 col-12 order-2 order-lg-1 mt_md--30 mt_sm--30">
                                        <div className="content">
                                            <div className="inner move-up wow">
                                                <h2 className="title mb--20">Problem Statement</h2>
                                                <p dangerouslySetInnerHTML={{__html:caseStudyData.problem_statement}}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xl-6 offset-xl-1 col-md-12 col-12 order-1 order-lg-2">
                                        <div className="thumbnail position-relative">
                                            <img className="image w-100 paralax-image" src={withPrefix(caseStudyData.problem_statement_image)} alt="Featured Images"/>
                                            <div className="shape-group shape-01">
                                                <img src={withPrefix("/images/others/contact-01.svg")} alt=""/>
                                            </div>
                                            <div className="shape-group shape-02">
                                                <img src={withPrefix("/images/others/contact-03.svg")} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <!-- End Project Brief  --> */}

                        {/* <!-- Start Project Solutions Area  --> */}
                        <div className="axil-project-solutions-area shape-group-position ax-section-gap bg-color-white">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2">
                                        <div className="content">
                                            <div className="section-title-inner text-left">
                                                <h2 className="title mb--20 move-up wow">Solutions</h2>
                                                <p dangerouslySetInnerHTML={{__html:caseStudyData.solution}}/>
                                            </div>
                                            <div className="thumbnail mt--60 move-up wow">
                                                <img className="w-100 paralax-image" src={withPrefix(caseStudyData.solution_image)} alt="Featured Images"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shape-group">
                                <div className="shape">
                                    <i className="icon icon icon-shape-19"></i>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Project Solutions Area  -->

                        <!-- Start Working Process  --> */}
                        <div className="axil-working-process-area ax-section-gap theme-gradient-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title text-center mb--100 mb_sm--40 mb_md--40">
                                            <h2 className="title wow" data-splitting>Our work process</h2>
                                            <p className="subtitle-2 wow" data-splitting>Our comprehensive  strategy ensures
                                                a
                                                perfectly solution for your business.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        {/* <!-- Start Working Process  --> */}
                                        {
                                            caseStudyData.process.map((item,index)=>{
                                                if(index %2 === 0){
                                                    return (
                                                        <div className="axil-working-process mb--100 mb_md--50 mb_sm--40">
                                                            <div className="thumbnail">
                                                                <div className="image paralax-image">
                                                                    <img src={withPrefix(item.step_image)} alt="Process Images"/>
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <div className="inner">
                                                                    <div className="section-title">
                                                                        <span className="process-step-number">{index +1}</span>
                                                                        <span className="sub-title extra04-color">our process</span>
                                                                        <h2 className="title">{item.step_title}</h2>
                                                                        <p className="subtitle-2" dangerouslySetInnerHTML={{__html:item.step_description}}></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>          
                                                    )
                                                }
                                                else{
                                                    return (
                                                        <div className="axil-working-process mb--100 text-left mb_md--50 mb_sm--40">
                                                            <div className="content order-2 order-lg-1">
                                                                <div className="inner">
                                                                    <div className="section-title">
                                                                        <span className="process-step-number">2</span>
                                                                        <span className="sub-title extra05-color">our process</span>
                                                                        <h2 className="title">{item.step_title}</h2>
                                                                        <p className="subtitle-2" dangerouslySetInnerHTML={{__html:item.step_description}}></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="thumbnail order-1 order-lg-2">
                                                                <div className="image paralax-image">
                                                                    <img src={withPrefix(item.step_image)} alt="Process Images"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                        
                                        {/* <!-- End Working Process  -->

                                        <!-- Start Working Process  --> */}
                                        
                                        {/* {/* <!-- End Working Process  --> */}


                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Working Process  -->

                        <!-- Start Counterup Area --> */}
                        <div className="axil-counterup-area ax-section-gap bg-color-white">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title text-center">
                                            <h2 className="title wow" data-splitting>See the results</h2>
                                            <p className="subtitle-2 wow" data-splitting>In vel varius turpis, non dictum sem. Aenean in
                                                efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-9 offset-lg-1">
                                        <div className="row">
                                            {/* <!-- Start Counterup Area --> */}
                                                {
                                                caseStudyData.results.map((itemResult,index)=>{
                                                    return(
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                            <div className="axil-counterup mt--60 text-center counter-first">
                                                                <h3 className="count primary-color">{itemResult.metric_value}</h3>
                                                                <p dangerouslySetInnerHTML={{__html:itemResult.metric_description}} />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    {/* <!-- End Page Wrapper --> */}
        </Layout>
        </>
    )
}
export default caseStudyDetailTemplate