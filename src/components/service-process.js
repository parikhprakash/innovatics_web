import { withPrefix } from 'gatsby'
import React from 'react'

const ServiceProcess = ({serviceProcess})=>{
    if (serviceProcess.steps.length > 0){
        return(
                <div className="axil-working-process-area ax-section-gap theme-gradient-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--100 mb_sm--40 mb_md--40">
                                    <span className="sub-title extra08-color wow" data-splitting>process</span>
                                    <h2 className="title wow" data-splitting>{serviceProcess.process_title}</h2>
                                    <p className="subtitle-2 wow" data-splitting>{serviceProcess.process_description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">

                                {/* <!-- Start Working Process  --> */}
                                {
                                    serviceProcess.steps.map((item,index)=>{
                                        if (index %2 === 0){
                                            return(
                                                <div className="axil-working-process mb--100 mb_md--50 mb_sm--40">
                                                    <div className="thumbnail">
                                                        <div className="image paralax-image">
                                                            <img src={withPrefix(item.image)} alt="Process Images"/>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <div className="section-title">
                                                                <span className="process-step-number">{index+1}</span>
                                                                <span className="sub-title extra04-color">our process</span>
                                                                <h2 className="title">{item.name}</h2>
                                                                <p className="subtitle-2">{item.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        else{
                                            return(
                                                <div className="axil-working-process mb--100 text-left mb_md--50 mb_sm--40">
                                                    <div className="content order-2 order-lg-1">
                                                        <div className="inner">
                                                            <div className="section-title">
                                                                <span className="process-step-number">{index+1}</span>
                                                                <span className="sub-title extra05-color">our process</span>
                                                                <h2 className="title">{item.name}</h2>
                                                                <p className="subtitle-2">{item.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="thumbnail order-1 order-lg-2">
                                                        <div className="image paralax-image">
                                                            <img src={withPrefix(item.image)} alt="Process Images"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            
            )
    }else{
        return (<></>)
    }
    
}

export default ServiceProcess