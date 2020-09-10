import React from 'react'
import HomeCTA from '../components/home_cta'
import SEO from '../components/seo'
import Layout from '../components/layout'
import {withPrefix} from 'gatsby'
const BlogPage = ({data,location})=>{
    console.log(data);
    return (
      <Layout location={location} title="Blogs">
      <SEO title="Blogs" />
      <main class="page-wrappper">
            <div class="axil-blog-area ax-section-gap bg-color-white">
                <div class="container">
                    <div class="row row--40">
                       
                        <div class="col-lg-8 col-md-12 col-12">
                        {
                            data.allMarkdownRemark.edges.map((item,index)=>{
                                return (
                                <div class="axil-blog-list wow move-up">
                                <div class="blog-top">
                                    <h3 class="title"><a href={withPrefix("blogs"+item.node.fields.slug)}>{item.node.frontmatter.title}</a></h3>
                                    <div class="author">
                                        <div class="author-thumb">
                                            <img src={withPrefix(item.node.frontmatter.authorImage)} alt="Blog Author"/>
                                        </div>
                                        <div class="info">
                                            <h6>{item.node.frontmatter.author}</h6>
                                            <ul class="blog-meta">
                                                <li>{item.node.frontmatter.date}</li>
                                                {/* <li>9 min to read</li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="thumbnail">
                                    <a href={withPrefix("blogs"+item.node.fields.slug)}>
                                        {console.log(item.node.frontmatter.blogImage)}
                                        <img class="w-100" src={withPrefix(item.node.frontmatter.blogImage)} alt="Blog Images"/>
                                    </a>
                                </div>
                                <div class="content">
                                    <p>{item.node.excerpt}</p>
                                    <a class="axil-button btn-large btn-transparent" href={withPrefix("blogs"+item.node.fields.slug)}><span
                                            class="button-text">Read More</span><span class="button-icon"></span></a>
                                </div>
                            </div>)
                            })
                        }
                            

                        </div>
                        <div class="col-lg-4 col-md-12 col-12 mt_md--40 mt_sm--40">
                            
                            <div class="axil-blog-sidebar">

                                
                                {/* <div class="axil-single-widget search">
                                    <h4 class="title mb--30">Search</h4>
                                    <div class="inner">
                                        <form action="#" class="blog-search">
                                            <input type="text" placeholder="Search…">
                                            <button class="search-button"><i class="fal fa-search"></i></button>
                                        </form>
                                    </div>
                                </div> */}
                                
                                <div class="axil-single-widget category mt--80 mt_sm--30 mt_md--30 mt_lg--40">
                                    <h4 class="title mb--30">Categories</h4>
                                    <div class="inner">
                                        <ul class="category-list">
                                            {
                                                data.tags.group.map((item,index)=>{
                                                    return(
                                                        <li><a href={"tags/"+item.tag}>{item.tag + "(" + item.totalCount  +")"}</a></li>
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
                                
                                <div class="axil-single-widget share mt--80 mt_sm--30 mt_md--30 mt_lg--40">
                                    <div class="inner">
                                        <div class="blog-share d-flex flex-wrap">
                                            <span>Follow:</span>
                                            <ul class="social-list d-flex">
                                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="axil-single-widget small-post-wrapper mt--80 mt_sm--30 mt_md--30 mt_lg--40">
                                    <h4 class="title mb--30">Recent post</h4>
                                    <div class="inner">
                                    {data.allMarkdownRemark.edges.slice(0,3).map((item,index)=>{
                                        return(
                                        <div class="small-post">
                                            <div class="thumbnail">
                                                <a href={withPrefix("blogs"+item.node.fields.slug)}>
                                                    <img src={withPrefix(item.node.frontmatter.blogImage)} alt="Blog Image"/>
                                                </a>
                                            </div>
                                            <div class="content">
                                                <h6><a href={withPrefix("blogs"+item.node.fields.slug)}>
                                                {item.node.frontmatter.title}
                                                    </a></h6>
                                                <ul class="blog-meta">
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

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
// query MyQuery {


    
     