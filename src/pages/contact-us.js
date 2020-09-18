import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JSONData from "../../content/contact-us/contact.json"
import {withPrefix} from "gatsby"
const ContactUsPage = ({data,location})=>{
    return(
        <Layout>
            <SEO></SEO>
            <main className="main-wrapper">

            {/* <!-- Start Contact Area  --> */}
            <div className="axil-contact-area axil-shape-position ax-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-xl-5 col-12">
                            <div className="contact-form-wrapper">
                                {/* <!-- Start Contact Form --> */}
                                <div className="axil-contact-form contact-form-style-1">
                                    <h3 className="title">{JSONData.title_form}</h3>

                                    <form id="contact-form" method="POST" action="mail.php">
                                        <div className="form-group">
                                            <input name="con_name" type="text"/>
                                            <label>Name</label>
                                            <span className="focus-border"></span>
                                        </div>
                                        <div className="form-group">
                                            <input name="con_email" type="email"/>
                                            <label>Email</label>
                                            <span className="focus-border"></span>
                                        </div>
                                        <div className="form-group">
                                            <input type="text"/>
                                            <label>Phone</label>
                                            <span className="focus-border"></span>
                                        </div>
                                        <div className="form-group">
                                            <textarea name="con_message"></textarea>
                                            <label>Your message</label>
                                            <span className="focus-border"></span>
                                        </div>

                                        <div className="form-group">
                                            <input type="submit" value="Send message"/>
                                            <p className="form-messege"></p>
                                        </div>
                                    </form>

                                </div>
                                {/* <!-- End Contact Form --> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-xl-6 offset-xl-1 col-12 mt_md--40 mt_sm--40">
                            <div className="axil-address-wrapper">
                                {/* <!-- Start Single Address  --> */}
                                <div className="axil-address wow move-up">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Phone</h4>
                                            <p>{JSONData.phone_number_desc}</p>
                                            <p><a className="axil-link" href={"tel:"+ JSONData.phone_number}>{JSONData.phone_number}</a></p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single Address  --> */}
                                {/* <!-- Start Single Address  --> */}
                                <div className="axil-address wow move-up mt--60 mt_sm--30 mt_md--30">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="fal fa-envelope"></i>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Email</h4>
                                            <p>{JSONData.email_desc}</p>
                                            <p><a className="axil-link" href={"mailto:"+JSONData.email}>{JSONData.email}</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single Address  --> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-group">
                    <div className="shape shape-01">
                        <i className="icon icon-contact-01"></i>
                    </div>
                    <div className="shape shape-02">
                        <i className="icon icon-contact-02"></i>
                    </div>
                    <div className="shape shape-03">
                        <i className="icon icon-contact-03"></i>
                    </div>
                </div>
            </div>
            {/* <!-- End Contact Area  --> */}

            {/* <!-- Start Office Location  --> */}
            <div className="axil-office-location-area ax-section-gap bg-color-lightest">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="sub-title extra04-color wow" data-splitting>who we are</span>
                                <h2 className="title wow mb--0" data-splitting>Our office</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--30">

                        {/* <!-- Start Single Location  --> */}
                        {
                            JSONData.offices.map((item,index)=>{
                                    return(
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                            <div className="axil-office-location mt--30 wow move-up">
                                                <div className="thumbnail">
                                                    <img src={withPrefix(item.image)} alt="Location Images"/>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">{item.location}</h4>
                                                    <p dangerouslySetInnerHTML={{__html:item.address}}></p>
                                                        <a className="axil-button btn-transparent" href={item.maps_url}><span className="button-text">View on
                                                            Map</span><span className="button-icon"></span></a>
                                                </div>
                                            </div>
                                        </div>
                        
                                    )
                            })
                        }
                        

                        
                    </div>
                </div>
            </div>
            {/* <!-- End Office Location  --> */}
            </main>

        </Layout>
    )
}

export default ContactUsPage