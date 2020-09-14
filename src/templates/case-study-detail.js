import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {withPrefix} from 'gatsby'
const caseStudyDetailTemplate = ({data,pageContext,location})=>{
    return(
        <>
        <Layout>
            <SEO></SEO>
            {console.log(pageContext.slug)}
        </Layout>
        </>
    )
}
export default caseStudyDetailTemplate