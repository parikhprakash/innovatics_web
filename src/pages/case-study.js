import React from 'react'
import HomeCTA from '../components/home_cta'
import SEO from '../components/seo'
import Layout from '../components/layout'
import {withPrefix} from 'gatsby'
import JSONData from '../../content/casestudy/case-studies.json'
const CaseStudyPage = ({data,location})=>{
    return(
        <>
        <Layout location={location} title="Case Study">
            <SEO title="Case Studies" />
      
            <div className="axil-breadcrumb-area breadcrumb-style-2 single-service pt--170 pb--70 theme-gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1 mt_md--30 mt_sm--30">
                            <div className="inner">
                                <h2 className="title">{JSONData.title}</h2>
                                <p>{JSONData.descriptions}</p>
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
            
            <div className="axil-featured-area ax-section-gap bg-color-lightest">
                <div className="container">

                    {
                        JSONData.case_studies.map((item,index)=>{
                            if(index%2 == 0){
                                return(
                                    <div className="row d-flex flex-wrap axil-featured row--0">
                                    <div className="col-lg-6 col-xl-6 col-md-12 col-12">
                                        <div className="thumbnail">
                                            <a href={withPrefix("/case-study/"+item.slug)}>
                                                <img className="image w-100 paralax-image" src={withPrefix(item.project_brief_image)} alt="Featured Images"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xl-5 offset-xl-1 col-md-12 col-12 mt_md--40 mt_sm--40">
                                        <div className="inner">
                                            <div className="section-title text-left">
                                                <span className="sub-title extra04-color wow">featured case study</span>
                                                <h2 className="title wow"><a href={withPrefix("/case-study/"+item.slug)}>{item.title}</a></h2>
                                                <p className="subtitle-2 wow" dangerouslySetInnerHTML={{ __html:item.problem_statement, }}/>
                                                <a className="axil-button btn-large btn-transparent" href={withPrefix("/case-study/"+item.slug)}><span
                                                        className="button-text">Read
                                                        Case Study</span><span className="button-icon"></span></a>
                                            </div>
                                            <div className="axil-counterup-area d-flex flex-wrap separator-line-vertical">
                                                {
                                                    item.results.map((result_item,ind)=>{
                                                        return(
                                                                <div className="single-counterup counterup-style-1">
                                                                    <h3 className="count">{result_item.metric_value}</h3>
                                                                    <p>{result_item.metric_name}</p>
                                                                </div>
                                                        )
                                                    })
                                                }
                                                
                                                
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    
                                )
                            }
                            else{
                                return(
                                    <div className="row d-flex flex-wrap axil-featured axil-featured-left row--0  ax-section-gapTop">
                                        <div className="col-lg-6 col-xl-5 col-md-12 col-12 mt_md--40 mt_sm--40 order-2 order-lg-1">
                                            <div className="inner">
                                                <div className="section-title text-left">
                                                    <span className="sub-title extra04-color wow">featured case study</span>
                                                    <h2 className="title wow"><a href={withPrefix("/case-study/"+item.slug)}>{item.title}</a></h2>
                                                    <p className="subtitle-2 wow" dangerouslySetInnerHTML={{ __html:item.problem_statement, }}/>
                                                    <a className="axil-button btn-large btn-transparent" href={withPrefix("/case-study/"+item.slug)}><span
                                                            className="button-text">Read
                                                            Case Study</span><span className="button-icon"></span></a>
                                                </div>
                                                <div className="axil-counterup-area d-flex flex-wrap separator-line-vertical">
                                                    
                                                {
                                                    item.results.map((result_item,ind)=>{
                                                        return(
                                                                <div className="single-counterup counterup-style-1">
                                                                    <h3 className="count">{result_item.metric_value}</h3>
                                                                    <p>{result_item.metric_name}</p>
                                                                </div>
                                                        )
                                                    })
                                                }
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-xl-6 offset-xl-1 col-md-12 col-12 order-1 order-lg-2">
                                            <div className="thumbnail">
                                                <a href={withPrefix("/case-study/"+item.slug)}>
                                                    <img className="image w-100 paralax-image" src={withPrefix(item.project_brief_image)} alt="Featured Images"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                    
                                )
                            }
                        })
                    }

                </div>
            </div>
            <HomeCTA></HomeCTA>
        </Layout>    
        </>
    )
}

export default CaseStudyPage