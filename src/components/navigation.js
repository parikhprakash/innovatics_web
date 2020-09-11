import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import JSONData from "../../content/menus/header.json"
const Navigation = ({menus})=>{
    const data = useStaticQuery(graphql`
    query siteData {
      logo: file(absolutePath: { regex: "/innovatics_logo.png/" }) {
        childImageSharp {
          fixed(width: 136, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

    return (
        <div>
        <header className="ax-header haeder-default  light-logo-version header-transparent axil-header-sticky">
            <div className="header-wrapper">
                <div className="container-fluid plr--100 plr_lg--30 plr_md--30 plr_sm--10">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-8 header-left">
                            <div className="logo">
                                <a href="/">
                                    <Image fixed={data.logo.childImageSharp.fixed}></Image>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-xl-6 d-none d-lg-block">
                            <div className="mainmenu-wrapepr justify-content-center">
                                <nav className="mainmenu-nav d-none d-lg-block">
                                    <ul className="mainmenu">
                                        {JSONData.map((item,index)=>{
                                            if(item.SubMenu.length > 0){
                                                return (<li className="has-dropdown">
                                                    <a href={item.link}>{item.name}</a>
                                                    <ul className="axil-submenu">
                                                        {
                                                            item.SubMenu.map((itemInner,indexInner)=>{
                                                                return (
                                                                    <li>
                                                                        <a href={itemInner.link}>
                                                                            {itemInner.name}
                                                                        </a>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </li>
                                                )
                                            }else{
                                                return (
                                                    <li>
                                                                            <a href={item.link}>
                                                                                {item.name}
                                                                            </a>
                                                    </li>
                                                )
                                            }
                                        })}
                                        {/* <li className="has-dropdown"><a href="#">Home</a>
                                            <ul className="axil-submenu">
                                                <li><a href="home-01.html">Digital Agency</a></li>
                                                <li><a href="home-02.html">Creative Agency</a></li>
                                                <li><a href="home-03.html">Personal Portfolio</a></li>
                                                <li><a href="home-04.html">Home Startup</a></li>
                                                <li><a href="home-05.html">Corporate Agency</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown"><a href="#">Services</a>
                                            <ul className="axil-submenu">
                                                <li><a href="services.html">Services</a></li>
                                                <li><a href="service-two.html">Services Two</a></li>
                                                <li><a href="single-service.html">Services Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li className="has-dropdown"><a href="#">Blog</a>
                                            <ul className="axil-submenu">
                                                <li><a href="blog.html">Blog List</a></li>
                                                <li><a href="blog-list-two.html">Blog List Two</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown"><a href="#">Pages</a>
                                            <ul className="axil-submenu">
                                                <li><a href="button.html">Button</a></li>
                                                <li><a href="typography.html">Typography</a></li>
                                                <li><a href="testimonial.html">Testimonial</a></li>
                                                <li><a href="portfolio.html">Portfolio</a></li>
                                                <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                                <li><a href="pricing.html">Pricing</a></li>
                                                <li><a href="services.html">Services</a></li>
                                                <li><a href="team.html">Team</a></li>
                                                <li><a href="team-details.html">Team Details</a></li>
                                                <li><a href="case-study.html">Case Study</a></li>
                                                <li><a href="single-case-study.html">Case Study Details</a></li>
                                                <li><a href="comming-soon.html">Comming Soon</a></li>
                                                <li><a href="404.html">404 Page</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li> */}

                                    </ul>
                                </nav>
                                
                            </div>
                        </div>
                        <div className="col-lg-2 col-xl-3 col-md-6 col-sm-6 col-4 header-right">

                    
                            <div className="axil-header-extra d-flex align-items-center justify-content-end">
                               
                                <div className="ax-search-area ml--20">
                                    <a className="search-trigger" href="#"><i className="fas fa-search"></i></a>
                                </div>
                                
                                <div className="ax-hamburger ml--40 ml_lg--20 d-none d-lg-block">
                                    <a className="axil-menuToggle ax-hamburger-trigger" id="side-nav-toggler" href="#">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </a>
                                </div>
                                
                                <div className="ax-menubar popup-navigation-activation d-block d-lg-none ml_sm--20 ml_md--20">
                                    <div>
                                        <i></i>
                                    </div>
                                </div>
                                
                                <div className="axil-search-area">
                                    <form action="#" className="axil-searchbar">
                                        <div className="search-field">
                                            <input type="text" placeholder="Search Here..."/>
                                            <button className="navbar-search-btn" type="button"><i
                                        className="fal fa-search"></i></button>
                                        </div>
                                        <a href="#" className="navbar-search-close"><i className="fal fa-times"></i></a>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>    
        <div className="popup-mobile-manu">
            <div className="inner">
                <div className="mobileheader">
                    <div className="logo">
                        <a href="index.html">
                            <Image /></a>
                    </div>
                    <a className="close-menu" href="#"></a>
                </div>
                <div className="menu-item">
                    <ul className="mainmenu-item">
                        <li className="has-children"><a href="#">Home</a>
                            <ul className="submenu">
                                <li><a href="home-01.html">Digital Agency</a></li>
                                <li><a href="home-02.html">Creative Agency</a></li>
                                <li><a href="home-03.html">Personal Portfolio</a></li>
                                <li><a href="home-04.html">Home Startup</a></li>
                                <li><a href="home-05.html">Corporate Agency</a></li>
                            </ul>
                        </li>
                        <li className="has-children"><a href="#">Services</a>
                            <ul className="submenu">
                                <li><a href="services.html">Services</a></li>
                                <li><a href="service-two.html">Services Two</a></li>
                                <li><a href="single-service.html">Services Details</a></li>
                            </ul>
                        </li>
                        <li><a href="about.html">About Us</a></li>
                        <li className="has-children"><a href="#">Blog</a>
                            <ul className="submenu">
                                <li><a href="blog.html">Blog List</a></li>
                                <li><a href="blog-list-two.html">Blog List Two</a></li>
                                <li><a href="blog-details.html">Blog Details</a></li>
                            </ul>
                        </li>
                        <li className="has-children"><a href="#">Pages</a>
                            <ul className="submenu">
                                <li><a href="button.html">Button</a></li>
                                <li><a href="typography.html">Typography</a></li>
                                <li><a href="testimonial.html">Testimonial</a></li>
                                <li><a href="portfolio.html">Portfolio</a></li>
                                <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="team.html">Team</a></li>
                                <li><a href="team-details.html">Team Details</a></li>
                                <li><a href="case-study.html">Case Study</a></li>
                                <li><a href="single-case-study.html">Case Study Details</a></li>
                                <li><a href="comming-soon.html">Comming Soon</a></li>
                                <li><a href="404.html">404 Page</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="side-nav">
            <div class="side-nav-inner">
               
                <form action="#" class="side-nav-search-form">
                    <div class="form-group search-field">
                        <input type="text" class="search-field" name="search-field" placeholder="Search..."/>
                        <button class="side-nav-search-btn"><i class="fas fa-search"></i></button>
                    </div>
                </form>

                <div class="side-nav-content">
                    <div class="row ">
                        
                        <div class="col-lg-5 col-xl-6 col-12">
                            <ul class="main-navigation">
                                <li><a href="home-01.html">Home One</a></li>
                                <li><a href="home-02.html">Home Two</a></li>
                                <li><a href="home-03.html">Home Three</a></li>
                                <li><a href="home-04.html">Home Four</a></li>
                                <li><a href="home-05.html">Home Five</a></li>
                            </ul>
                        </div>
                        
                        <div class="col-lg-7 col-xl-6 col-12">
                            <div class="axil-contact-info-inner">

                                
                                <div class="axil-contact-info">
                                    <address class="address">
                                        <span class="title">Contact Information</span>
                                        <p>Theodore Lowe, Ap #867-859 <br/> Sit Rd, Azusa New York</p>
                                    </address>
                                    <address class="address">
                                        <span class="title">We're Available 24/ 7. Call Now.</span>
                                        <p><a class="tel" href="tel:8884562790"><i class="fas fa-phone"></i>(888)
                                                456-2790</a></p>
                                        <p><a class="tel" href="tel:12125553333"><i class="fas fa-fax"></i>(121)
                                                255-53333</a></p>
                                    </address>
                                </div>
                                
                                <div class="axil-contact-info">
                                    <h5 class="title">Find us here</h5>
                                    <div class="contact-social-share d-flex align-items-center">
                                        <ul class="social-share style-rounded">
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
               
                <div class="close-sidenav" id="close-sidenav">
                    <button class="close-button"><i class="fal fa-times"></i></button>
                </div>
            </div>
        </div>
        </div>
    )
}
        
export default Navigation;