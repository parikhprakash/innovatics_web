import React from 'react'
import {withPrefix} from 'gatsby'
import JSONData from "../../content/homePage/blog.json"
const HomeBlog =({})=>{
    return (       
            <div className="axil-blog-area ax-section-gap bg-color-lightest">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="sub-title extra04-color">what's going on</span>
                                <h2 className="title">{JSONData.title}</h2>
                                <p className="subtitle-2">{JSONData.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row blog-list-wrapper mt--20">
                        
                        <div className="col-lg-6 col-md-6 col-12 move-up wow">
                            <div className="axil-blog axil-control mt--40 active">
                                <div className="content">
                                    <div className="content-wrap paralax-image">
                                        <div className="inner">
                                            <span className="category">{JSONData.fetured_blogs[0].category}</span>
                                            <h5 className="title"><a href={JSONData.fetured_blogs[0].link}>{JSONData.fetured_blogs[0].title}</a></h5>
                                            <p>{JSONData.fetured_blogs[0].description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumbnail">
                                    <div className="image">
                                        <img src={withPrefix(JSONData.fetured_blogs[0].image_path)} alt="Blog images"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-6 col-12 move-up wow">
                            <div className="axil-blog axil-control mt--40 active">
                                <div className="content">
                                    <div className="content-wrap paralax-image">
                                        <div className="inner">
                                            <span className="category">{JSONData.fetured_blogs[1].category}</span>
                                            <h5 className="title"><a href={JSONData.fetured_blogs[1].link}>{JSONData.fetured_blogs[1].title}</a></h5>
                                            <p>{JSONData.fetured_blogs[1].description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumbnail">
                                    <div className="image">
                                        <img src={withPrefix(JSONData.fetured_blogs[1].image_path)} alt="Blog images"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
    )
}

export default HomeBlog