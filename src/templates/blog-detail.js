import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {withPrefix} from 'gatsby'
import HomeCTA from "../components/home_cta"
const blogDetailTemplate = ({data,pageContext,location})=>{
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  return(
        <>
            <Layout>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <main class="page-wrapper">
            
            <div class="axil-blog-area ax-section-gap bg-color-white">
                <div class="container">
                    <div class="row row--40">
                        <div class="col-lg-8 col-md-12 col-12">
                            <div class="axil-blog-details-area">
                                <div class="wrapper">
                                    <div class="blog-top">
                                        <h3 class="title">{post.frontmatter.title}</h3>
                                        <div class="author">
                                            <div class="author-thumb">
                                                <img src={withPrefix(post.frontmatter.authorImage)} alt="Blog Author"/>
                                            </div>
                                            <div class="info">
                                                <h6>{post.frontmatter.author}</h6>
                                                <ul class="blog-meta">
                                                    <li>{post.frontmatter.date}</li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="thumbnail mb--60 mb_sm--20 mb_md--20">
                                        <img class="w-100" src={withPrefix(post.frontmatter.blogImage)} alt="Blog Images"/>
                                    </div>
                                    <div class="content mb--40 mb_sm--20 mb_md--20">
                                      <section dangerouslySetInnerHTML={{ __html: post.html }} />    
                                    </div>
                                    
                                    <div class="blog-share d-flex flex-wrap align-items-center mb--80 mb_sm--30 mb">
                                        <span class="text">Share on:</span>
                                        <ul class="social-share d-flex">
                                            <li><a href="#"><i class="fab fa-facebook-f"></i>Facebook</a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i>twitter</a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i>Linkedin</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-12 col-12 mt_md--40 mt_sm--40">
                            
                            <div className="axil-blog-sidebar">
                                
                                <div className="axil-single-widget category mt--80 mt_sm--30 mt_md--30 mt_lg--40">
                                    <h4 className="title mb--30">Categories</h4>
                                    <div className="inner">
                                        <ul className="category-list">
                                            {
                                                data.tags.group.map((item,index)=>{
                                                    return(
                                                        <li><a href={"tags/"+item.tag}>{item.tag + "(" + item.totalCount  +")"}</a></li>
                                                    )
                                                })
                                            }                                            
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
        </>
    )
}

export default blogDetailTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
            authorImage
            blogImage
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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