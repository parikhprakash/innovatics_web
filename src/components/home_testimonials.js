import React from 'react'
import {withPrefix} from 'gatsby'
import JSONData from "../../content/homePage/testimony.json"
const HomeTestimonials = ({})=>{
    return (
            <div className="axil-testimonial-area ax-section-gap bg-color-lightest">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="sub-title extra05-color wow" data-splitting>testimonials</span>
                                <h2 className="title wow" data-splitting>{JSONData.title}</h2>
                                <p className="subtitle-2 wow" data-splitting>{JSONData.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-activation">
                        <div className="row axil-testimonial-single">
                            <div className="col-lg-6 mt--60">
                                <div className="axil-testimonial testimonial active move-up wow">
                                    <div className="inner">
                                        <div className="clint-info-wrapper">
                                            <div className="thumb">
                                                <img src={JSONData.testimonials[0].image} alt="Clint Images"/>
                                            </div>
                                            <div className="client-info">
                                                <h4 className="title">{JSONData.testimonials[0].name}</h4>
                                                <span>{JSONData.testimonials[0].title}</span>
                                            </div>
                                        </div>
                                        <div className="description">
                                            <p className="subtitle-3">{JSONData.testimonials[0].short_desc}</p>
                                            <a className="axil-link-button" href={JSONData.testimonials[0].link}>Read Project Case Study</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6 mt--60">
                                <div className="axil-testimonial testimonial active move-up wow">
                                    <div className="inner">
                                        <div className="clint-info-wrapper">
                                            <div className="thumb">
                                                <img src={JSONData.testimonials[0].image} alt="Clint Images"/>
                                            </div>
                                            <div className="client-info">
                                                <h4 className="title">{JSONData.testimonials[0].name}</h4>
                                                <span>{JSONData.testimonials[0].title}</span>
                                            </div>
                                        </div>
                                        <div className="description">
                                            <p className="subtitle-3">{JSONData.testimonials[0].short_desc}</p>
                                            <a className="axil-link-button" href={JSONData.testimonials[0].link}>Read Project Case Study</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
           
    );
}

export default HomeTestimonials