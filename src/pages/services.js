import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {withPrefix} from 'gatsby'
import JSONData from '../../content/services/service.json'
import HomeCTA from '../components/home_cta'
const InnovaticServices = ({ data, location }) => {
    // const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={location} title="Services">
        <SEO title="Services" />
        <main className="page-wrappper">           
            <div className="axil-breadcrumb-area breadcrumb-style-2 pt--170 pb--70 theme-gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 order-2 order-lg-1 mt_md--30 mt_sm--30">
                            <div className="inner">
                                <div className="content">
                                    <h1 className="page-title mb--20">Best solutions for your business</h1>
                                    <p className="subtitle-2">A quick view of industry specific problems solved with design
                                        by the awesome team at Keystroke.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 order-1 order-lg-2">
                            <div className="breadcrumb-thumbnail-group with-image-group text-left text-lg-right">
                                <div className="thumbnail">
                                    <img className="paralax-image" src={withPrefix("/images/others/keystoke-image-1.png")} alt="Keystoke Images"/>
                                </div>
                                <div className="image-group">
                                    <img className="paralax-image" src={withPrefix("/images/others/keystoke-image-2.svg")} alt="Keystoke Images"/>
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
            <div className="axil-scroll-navigation-area axil-scroll-navigation position-relative bg-color-white">
               
                <nav className="axil-scroll-nav navbar navbar-example2">
                    <ul className="nav nav-pills justify-content-center sidebar__inner">
                        {
                            JSONData.sections.map((item,index)=>{
                                return (
                                    <li className="nav-item"><a className="nav-link smoth-animation active" href={"#" + item.name}>{item.title}</a></li>
                                )
                            })
                        }
                    </ul>
                </nav>
                {
                    JSONData.sections.map((item,index)=>{
                        return(
                            <div id={item.name} className="section axil-service-area bg-color-white ax-section-gap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="section-title text-left">
                                                <span className="sub-title extra04-color wow" data-splitting>{item.title}</span>
                                                <h2 className="title wow" data-splitting>{item.title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="row">
                                        {
                                            item.subServices.map((itemSubService,innerIndex)=>{
                                                return(
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="axil-service text-left axil-control paralax-image active">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <div className="icon-inner">
                                                            <img src={withPrefix("/images/icons/layer.svg")} alt="Icon Images"/>
                                                            <div className="image-2"><img src={itemSubService.image} alt="Shape Images"/></div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title"><a href={itemSubService.link}>{itemSubService.title}</a></h4>
                                                        <p>{itemSubService.description}</p>
                                                        <a className="axil-button" data-hover="Learn More" href={itemSubService.link}>Learn More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                )
                                            })
                                        }
                                    </div>                                   
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
            <div className="axil-call-to-action-area shape-position ax-section-gap theme-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="axil-call-to-action">
                                <div className="section-title text-center">
                                    <span className="sub-title extra04-color wow" data-splitting>Let's work together</span>
                                    <h2 className="title wow" data-splitting>Need a successful project?</h2>
                                    <a className="axil-button btn-large btn-transparent" href="#"><span
                                className="button-text">Estimate Project</span><span className="button-icon"></span></a>
                                    <div className="callto-action">
                                        <span className="text wow" data-splitting>Or call us now</span>
                                        <span className="wow" data-splitting><i className="fal fa-phone-alt"></i> <a href="#">(123)
                                    456 7890</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-group">
                    <div className="shape shape-01">
                        <i className="icon icon-shape-14"></i>
                    </div>
                    <div className="shape shape-02">
                        <i className="icon icon-shape-09"></i>
                    </div>
                    <div className="shape shape-03">
                        <i className="icon icon-shape-10"></i>
                    </div>
                    <div className="shape shape-04">
                        <i className="icon icon-shape-11"></i>
                    </div>
                </div>
            </div>
        </main>
        <HomeCTA></HomeCTA>
      </Layout>
    )
  }
  
  export default InnovaticServices