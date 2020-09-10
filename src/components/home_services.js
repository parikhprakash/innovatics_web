import React from 'react'
import {withPrefix} from 'gatsby'
import JSONData from '../../content/homePage/service.json'
const HomeServices = ({})=>{
    return (
        
            <div className="axil-service-area ax-section-gap bg-color-white">
                <div className="container pt--110 pt_md--0 pt_sm--0">
                    <div className="row">
                        <div className="col-lg-8 col-xl-6">
                            <div className="section-title text-left mb--120 mb_md--5 mb_sm--5">
                                <span className="sub-title extra08-color wow" data-splitting>what we can do for you</span>
                                <h2 className="title wow" data-splitting><span>{JSONData.title1} <br /> {JSONData.title2}</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            JSONData.services.map((item,index)=>{
                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 move-up wow">
                                        <div className="axil-service text-center axil-control paralax-image service-bg-gray">
                                            <div className="inner">
                                                <div className="icon gradient-color-04">
                                                    <div className="icon-inner">
                                                        <img src={withPrefix("/images/icons/layer.svg")} alt="Icon Images"/>
                                                        <div className="image-2"><img src={withPrefix(item.imagePath)} alt="Shape Images"/></div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title wow"><a href={item.link}>{item.title}</a></h4>
                                                    <p className="wow">{item.description} </p>
                                                    <a className="axil-button" data-hover="Learn More" href={item.link}>Learn
                                                        More</a>
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
}

export default HomeServices;