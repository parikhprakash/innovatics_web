import React from 'react'
import HomeCTA from '../components/home_cta'
import SEO from '../components/seo'
import Layout from '../components/layout'
import {withPrefix} from 'gatsby'

const BlogTagPage = ({data,location})=>{
    console.log(data);
    return (
      <Layout location={location} title="Blogs">
      <SEO title="Blogs" />
      <main className="page-wrappper">
            <div className="axil-blog-area ax-section-gap bg-color-white">
                <div className="container">
                    <div className="row row--40">
                       
                        <div className="col-lg-8 col-md-12 col-12">
                        {
                            data.allMarkdownRemark.edges.map((item,index)=>{
                                return (
                                <div className="axil-blog-list wow move-up">
                                <div className="blog-top">
                                    <h3 className="title"><a href={withPrefix("blogs"+item.node.fields.slug)}>{item.node.frontmatter.title}</a></h3>
                                    <div className="author">
                                        <div className="author-thumb">
                                            <img src={withPrefix(item.node.frontmatter.authorImage)} alt="Blog Author"/>
                                        </div>
                                        <div className="info">
                                            <h6>{item.node.frontmatter.author}</h6>
                                            <ul className="blog-meta">
                                                <li>{item.node.frontmatter.date}</li>
                                                {/* <li>9 min to read</li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumbnail">
                                    <a href={withPrefix("blogs"+item.node.fields.slug)}>
                                        {/* {console.log(item.node.frontmatter.blogImage)} */}
                                        <img className="w-100" src={withPrefix(item.node.frontmatter.blogImage)} alt="Blog Images"/>
                                    </a>
                                </div>
                                <div className="content">
                                    <p>{item.node.excerpt}</p>
                                    <a className="axil-button btn-large btn-transparent" href={withPrefix("blogs"+item.node.fields.slug)}><span
                                            className="button-text">Read More</span><span className="button-icon"></span></a>
                                </div>
                            </div>)
                            })
                        }
                            

                        </div>
                        <div className="col-lg-4 col-md-12 col-12 mt_md--40 mt_sm--40">
                            
                            <div className="axil-blog-sidebar">

                                
                                {/* <div className="axil-single-widget search">
                                    <h4 className="title mb--30">Search</h4>
                                    <div className="inner">
                                        <form action="#" className="blog-search">
                                            <input type="text" placeholder="Search…">
                                            <button className="search-button"><i className="fal fa-search"></i></button>
                                        </form>
                                    </div>
                                </div> */}
                                
                                <div className="axil-single-widget category mt--80 mt_sm--30 mt_md--30 mt_lg--40">
                                    <h4 className="title mb--30">Categories</h4>
                                    <div className="inner">
                                        <ul className="category-list">
                                            {
                                                data.tags.group.map((item,index)=>{
                                                    return(
                                                        <li><a href={withPrefix("blogs/tags/"+item.tag)}>{item.tag + "(" + item.totalCount  +")"}</a></li>
                                                    )
                                                })
                                            }
                                            
                                            {/* <li><a href="#">Blog</a></li>
                                            <li><a href="#">Information technology</a></li>
                                            <li><a href="#">New ideas</a></li>
                                            <li><a href="#">Uncategorized</a></li>
                                            <li><a href="#">Marketing & branding</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="axil-single-widget share mt--80 mt_sm--30 mt_md--30 mt_lg--40">
                                    <div className="inner">
                                        <div className="blog-share d-flex flex-wrap">
                                            <span>Follow:</span>
                                            <ul className="social-list d-flex">
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="axil-single-widget small-post-wrapper mt--80 mt_sm--30 mt_md--30 mt_lg--40">
                                    <h4 className="title mb--30">Recent post</h4>
                                    <div className="inner">
                                    {data.allMarkdownRemark.edges.slice(0,3).map((item,index)=>{
                                        return(
                                        <div className="small-post">
                                            <div className="thumbnail">
                                                <a href={withPrefix("blogs"+item.node.fields.slug)}>
                                                    <img src={withPrefix(item.node.frontmatter.blogImage)} alt="Blog Image"/>
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h6><a href={withPrefix("blogs"+item.node.fields.slug)}>
                                                {item.node.frontmatter.title}
                                                    </a></h6>
                                                <ul className="blog-meta">
                                                    <li>{item.node.frontmatter.date}</li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                        )
                                    })}
                                        
                                        
                                        
                                        
                                    </div>
                                </div>
                              
                                
                                

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            
            

        </main>
      <HomeCTA></HomeCTA>
    </Layout>
    )
}

export default BlogTagPage

export const pageQuery = graphql`
  query blogs($tag:[String!]) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
        filter:{
            frontmatter:{tags:{in:$tag}}
          }
        
        ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
            authorImage
            blogImage
          }
        }
      }
    }
    tags:allMarkdownRemark {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    
  }
`
// query MyQuery {


    
     