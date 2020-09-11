import React from 'react'
import JSONData from '../../content/menus/footer.json'
const Footer = ({menuItems})=>{
    return (
         <footer className="axil-footer footer-default theme-gradient-2">
            <div className="bg_image--2">
                
                <div className="ft-social-icon-wrapper ax-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="ft-social-share d-flex justify-content-center liststyle flex-wrap">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-top ax-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget-item axil-border-right">
                                    <h2>Get in touch!</h2>
                                    <p>Fusce varius, dolor tempor interdum tristique, dui urna <br /> bibendum magna, ut ullamcorper purus</p>
                                        <div className="axil-newsletter">
                                            <form className="newsletter-form" action="#">
                                                <input type="email" placeholder="Email"/>
                                                <a className="axil-button btn-transparent" href="#"><span className="button-text">Subscribe</span><span className="button-icon"></span></a>
                                            </form>
                                        </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                                <div className="footer-widget-item">
                                    <h6 className="title">Services</h6>
                                    <div className="footer-menu-container">
                                        <ul className="ft-menu liststyle link-hover">
                                            {
                                                JSONData.services.map((item,index)=>{
                                                    return (
                                                        <li><a href={item.link}>{item.name}</a></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-12 mt_lg--30 mt_md--30 mt_sm--30">
                                <div className="footer-widget-item">
                                    <h6 className="title">Resourses</h6>
                                    <div className="footer-menu-container">
                                        <ul className="ft-menu liststyle link-hover">
                                        {
                                                JSONData.resources.map((item,index)=>{
                                                    return (
                                                        <li><a href={item.link}>{item.name}</a></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-1 col-lg-6 col-md-6 col-sm-6 col-12 mt_lg--30 mt_md--30 mt_sm--30">
                                <div className="footer-widget-item widget-support">
                                    <h6 className="title">Support</h6>
                                    <div className="footer-menu-container">
                                        <ul className="ft-menu liststyle link-hover">
                                        {
                                                JSONData.support.map((item,index)=>{
                                                    return (
                                                        <li><a href={item.link}>{item.name}</a></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                
                <div className="copyright copyright-default">
                    <div className="container">
                        <div className="row row--0 ptb--20 axil-basic-thine-line">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="inner text-center text-md-left">
                                    <p>© 2020. All rights reserved by Your Company.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="quick-contact">
                                    <ul className="link-hover d-flex justify-content-center justify-content-md-end liststyle">
                                        <li><a data-hover="Privacy Policy" href="privacy-policy.html">Privacy Policy</a></li>
                                        <li><a href="#">Terms of Use</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </footer>
    )
}

export default Footer;