import React from 'react'
import JSONData from '../../content/homePage/hero.json'
const HomeHero = ({})=>{
    return (
            <div className="axil-slider-area axil-slide-activation position-relative">
                <div className="axil-slide slide-style-5 theme-gradient-8 d-flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center w-100">
                            <div className="col-lg-6 col-12">
                                <div className="content">
                                    <div className="inner">
                                        <h2 className="axil-display-1 mb--40 wow slideFadeInUp" data-wow-duration="1s" data-wow-delay="500ms">{JSONData.heroTitleLine1} <br /> {JSONData.heroTitleLine2}</h2>
                                            <a className="axil-button  btn-large btn-transparent wow slideFadeInUp" data-wow-duration="1s" data-wow-delay="800ms" href={JSONData.buttonLink}><span
                                                className="button-text">{JSONData.buttonText}</span><span
                                                className="button-icon"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-form-wrapper">
                        <div className="axil-contact-form contact-form-style-1">
                            <h3 className="title">{JSONData.formTitle1}<br/>{JSONData.formTitle2}</h3>
                            <form action="#">
                                <div className="form-group">
                                    <input type="text"/>
                                    <label>Name</label>
                                    <span className="focus-border"></span>
                                </div>
                                <div className="form-group">
                                    <input type="email"/>
                                    <label>Email</label>
                                    <span className="focus-border"></span>
                                </div>
                                <div className="form-group">
                                    <input type="text"/>
                                    <label>Company</label>
                                    <span className="focus-border"></span>
                                </div>
                                <div className="form-group">
                                    <input type="text"/>
                                    <label>Phone</label>
                                    <span className="focus-border"></span>
                                </div>
                                <div className="form-group">
                                    <button className="axil-button btn-large btn-transparent w-100">
                                        <span className="button-text">Get Pricing Now</span><span
                                            className="button-icon"></span>
                                    </button>
                                </div>
                            </form>
                            <div className="callto-action-wrapper text-center">
                                <span className="text">Or call us now</span>
                                <span><i className="fal fa-phone-alt"></i> <a href="#">{JSONData.phoneNumber}</a></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
    )
}
export default HomeHero;