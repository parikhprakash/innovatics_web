import React from 'react'
import {withPrefix} from 'gatsby'
import JSONData from "../../content/homePage/team.json"
const HomeTeam = ({})=>{
    return (
            <div className="axil-team-area shape-position ax-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6">
                            <div className="thumbnail">
                                <div className="image">
                                    <img src={withPrefix("/images/team/team-group.png")} alt="Team Images"/>
                                </div>
                                <div className="total-team-button">
                                    <a href={JSONData.teamLink}><span>20+</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-5 offset-xl-1 mt_md--40 mt_sm--40">
                            <div className="content">
                                <div className="inner">
                                    <div className="section-title text-left">
                                        <span className="sub-title extra08-color wow" data-splitting>our team</span>
                                        <h2 className="title wow" data-splitting>{JSONData.title}</h2>
                                        <p className="subtitle-2 wow pr--0" data-splitting>{JSONData.description}</p>
                                        <div className="axil-button-group mt--40">
                                            <a className="axil-button btn-large btn-transparent" href={JSONData.teamLink}><span
                                                    className="button-text">Our Team</span><span
                                                    className="button-icon"></span></a>
                                            <a className="axil-button axil-link-button" href={JSONData.careerLink}>Careers</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-group">
                    <div className="shape shape-1 customOne">
                        <i className="icon icon-shape-06"></i>
                    </div>
                    <div className="shape shape-2">
                        <i className="icon icon-shape-13"></i>
                    </div>
                    <div className="shape shape-3">
                        <i className="icon icon-shape-14"></i>
                    </div>
                </div>
            </div>
        
    )
}
export default HomeTeam