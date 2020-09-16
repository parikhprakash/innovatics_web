import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import {withPrefix} from 'gatsby'
import JSONData from '../../content/team/team-details.json'
import SEO from '../components/seo'
const TeamPage = ({data, location})=>{
    return(
         <Layout location={location} title="Team">
            <SEO title="Team Innovatics" />
            <main className="page-wrapper page-team">

            {/* <!-- Start Breadcrumb Area --> */}
            <div className="axil-breadcrumb-area breadcrumb-style-2 team-group-thumb pt--170 pb--70 theme-gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 order-2 order-lg-1 mt_md--30 mt_sm--30">
                            <div className="inner">
                                <h2 className="title">{JSONData.title}</h2>
                                <p>{JSONData.description}</p>
                            </div>
                        </div>
                        <div className="col-lg-7 order-1 order-lg-2">
                            <div className="thumbnail text-left text-lg-right">
                                <div className="image-group">
                                    <img className="image-1" src={withPrefix("/images/slider/white-shape.png")} alt="Slider images"/>
                                </div>
                                <div className="shape-group">
                                    <div className="shape shape-1">
                                        <img src={withPrefix("/images/slider/human-1.svg")} alt="Shape Images"/>
                                    </div>
                                    <div className="shape shape-2">
                                        <img src={withPrefix("/images/slider/human-2.svg")} alt="Shape Images"/>
                                    </div>
                                    <div className="shape shape-3">
                                        <img src={withPrefix("/images/slider/human-3.svg")} alt="Shape Images"/>
                                    </div>
                                    <div className="shape shape-4">
                                        <img src={withPrefix("/images/slider/human-4.svg")} alt="Shape Images"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Breadcrumb Area --> */}

            {/* <!-- Start Counterup Area  --> */}
            <div className="axil-counterup-area ax-section-gap bg-color-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="content-wrapper">
                                <div className="inner">
                                    <div className="section-title text-left">
                                        <span className="sub-title extra08-color wow" data-splitting>experts in field</span>
                                        <h2 className="title wow" data-splitting><span dangerouslySetInnerHTML={{__html:JSONData.team_description_title}}></span>
                                        </h2>
                                        <p className="subtitle-2 wow mb--40" data-splitting dangerouslySetInnerHTML={{__html:JSONData.team_description}}></p>
                                        <a className="axil-button btn-large btn-transparent" href="#"><span
                                                className="button-text">Careers</span><span className="button-icon"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="axil-counter-wrapper mt_md--40 mt_sm--40">
                                <div className="row">
                                    {
                                        JSONData.metrics.map((item,index)=>{
                                            return(
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                                    {/* <!-- Start Counterup --> */}
                                                    <div className="axil-counterup text-center">
                                                        <div className="icon">
                                                            <img src={withPrefix("/images/counterup/shape-01.png")} alt="Shape Images"/>
                                                        </div>
                                                        <h3 className="count">{item.value}</h3>
                                                        <p>{item.name}</p>
                                                    </div>
                                                    {/* <!-- End Counterup --> */}
                                                </div>
                                            )
                                        })
                                    }
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Counterup Area  --> */}

            {/* <!-- Start Team Area  --> */}
            <div className="axil-team-area ax-section-gap bg-color-lightest">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-12 col-xl-4">
                            <div className="section-title text-left">
                                <h2 className="title wow mb--0" data-splitting><span>Select department:</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-8 mt_lg--30 mt_md--30 mt_sm--30">
                            <ul className="nav nav-tabs team-nab-tabs justify-content-start justify-content-xl-end" id="myTab" role="tablist">
                                {
                                    JSONData.departments.map((item,index)=>{
                                        return(
                                            <li className="nav-item">
                                                <a className={(index>0)?"nav-link":"nav-link active"} id={item.id + "-tab"} data-toggle="tab" href={"#" + item.id} role="tab" aria-controls={item.id} aria-selected="true">{item.name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        {
                            JSONData.departments.map((dept,index)=>{
                                return (
                                        
                                        <div className={(index > 0)?"tab-pane fade":"tab-pane fade show active"} id={dept.id} role="tabpanel" aria-labelledby={dept.id + "-tab"}>
                                            <div className="row">
                                                {/* <!-- Start Single Team  --> */}
                                                {
                                                    dept.persons.map((person,indexPerson)=>{
                                                        return (
                                                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mt--60 mt_sm--30 mt_md--30">
                                                                <div className="axil-team">
                                                                    <div className="inner">
                                                                        <div className="thumbnail paralax-image">
                                                                            {/* <a href="team-details.html"> */}
                                                                                <img className="w-100" src={withPrefix(person.image)} alt="Team Images"/>
                                                                            {/* </a> */}
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">
                                                                                {/* <a href="team-details.html"> */}
                                                                                {person.name}
                                                                                {/* </a> */}
                                                                            </h4>
                                                                            <p className="subtitle">{person.title}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                
                                                {/* <!-- End Single Team  --> */}

                                                
                                                
                                            </div>
                                        </div>

                                    
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* <!-- End Team Area  --> */}

        </main>
        </Layout>
    )
}

export default TeamPage;