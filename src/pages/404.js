import React from "react"
import { graphql } from "gatsby"
import {withPrefix} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <main className="page-wrapper page-error">
            {/* <!-- Start Page Error Area  --> */}
            <div className="axil-error-not-found fullscreen d-flex align-items-center theme-gradient-7 list-active">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="axil-error text-center">
                                <div className="inner">
                                    <h1 className="title mb--20">Page not Found</h1>
                                    <p className="subtitle-2 mb--30">You have landed on the page path which is not desired <br /> However, you may go to the respective pages by going to home page.</p>
                                        <a className="axil-button btn-large btn-transparent" href="/"><span
                                            className="button-text">Go Back</span><span className="button-icon"></span></a>
                                        <img className="text-image" src={withPrefix("/images/others/404.svg")} alt="404 Images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-group">
                    <div className="shape shape-01">
                        <img src={withPrefix("/images/shape/404-01.svg")} alt="Shape Images"/>
                    </div>
                    <div className="shape shape-02">
                        <img src={withPrefix("/images/shape/404-01.svg")} alt="Shape Images"/>
                    </div>
                    <div className="shape shape-03">
                        <img src={withPrefix("/images/shape/404-02.svg")} alt="Shape Images"/>
                    </div>
                    <div className="shape shape-04">
                        <img src={withPrefix("/images/shape/404-03.svg")} alt="Shape Images"/>
                    </div>
                </div>
            </div>
            {/* <!-- End Page Error Area  --> */}
        </main>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
