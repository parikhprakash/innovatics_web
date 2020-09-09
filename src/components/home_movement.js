import React from 'react'
import {withPrefix} from 'gatsby'
import JSONData from "../../content/homePage/movement.json"
const HeroMovement = ({}) =>{
    return (
         <div className="axil-counterup-area ax-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="sub-title extra08-color wow" data-splitting>experts in field</span>
                                <h2 className="title wow" data-splitting>{JSONData.title}</h2>
                                <p className="subtitle-2 wow" data-splitting>{JSONData.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                       
                        {/* <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="axil-counterup mt--60 text-center counter-first move-up wow">
                                <div className="icon">
                                    <img src="assets/images/counterup/shape-01.png" alt="Shape Images">
                                </div>
                                <h3 className="count">15</h3>
                                <p>Years of operation</p>
                            </div>
                        </div> */}
                        
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <div className="axil-counterup mt--60 text-center counter-second move-up wow">
                                <div className="icon">
                                    <img src={withPrefix("/images/counterup/shape-02.png")} alt="Shape Images"/>
                                </div>
                                <h3 className="count">{JSONData.numProjects}</h3>
                                <p>Projects deliverd</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <div className="axil-counterup mt--60 mt_md--30 mt_sm--30 text-center counter-third move-up wow">
                                <div className="icon">
                                    <img src={withPrefix("/images/counterup/shape-03.png")} alt="Shape Images"/>
                                </div>
                                <h3 className="count">{JSONData.numSpecialists}</h3>
                                <p>Specialist</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 4col-md-6 col-sm-6 col-6">
                            <div className="axil-counterup mt--60 text-center counter-four move-up wow">
                                <div className="icon">
                                    <img src={withPrefix("/images/counterup/shape-04.png")} alt="Shape Images"/>
                                </div>
                                <h3 className="count">{JSONData.numExperience}</h3>
                                <p>Years of operation</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}
export default HeroMovement;