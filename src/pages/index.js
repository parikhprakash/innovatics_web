import React from "react"
import { Link, graphql } from "gatsby"
import HomeHero from '../components/home_hero'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeServices from '../components/home_services'
import { rhythm } from "../utils/typography"
import HeroMovement from "../components/home_movement"
import HomeTestimonials from "../components/home_testimonials"
import HomeTeam from "../components/home_team"
import HomeBlog from "../components/home_blog"
import HomeCTA from "../components/home_cta"

const InnovaticsIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <HomeHero></HomeHero>
      <HomeServices></HomeServices>
      <HeroMovement></HeroMovement>
      <HomeTestimonials></HomeTestimonials>
      <HomeTeam></HomeTeam>
      <HomeBlog></HomeBlog>
      <HomeCTA></HomeCTA>
    </Layout>
  )
}

export default InnovaticsIndex

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
          }
        }
      }
    }
  }
`
