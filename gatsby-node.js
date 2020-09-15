const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const caseStudyData = require('./content/casestudy/case-studies.json')
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const caseStudyPage = path.resolve(`./src/templates/case-study-detail.js`)
  const blogPost = path.resolve(`./src/templates/blog-detail.js`)
  const blogTagPost = path.resolve(`./src/templates/blog-tag.js`)
  const tagResult = await graphql(
    `
    {
      tags:allMarkdownRemark {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
    `
  )
  
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges
  const caseStudies = caseStudyData.case_studies
  const tags = tagResult.data.tags.group


  caseStudies.forEach((cs,index)=>{
    const path = "case-study/" + cs.slug + "/";
    createPage({
      path: path,
      component: caseStudyPage,
      context:{
        slug:cs.slug
      }
    })
  })

  tags.forEach((tag,index)=>{
    const path = "blogs/tags/" + tag.tag + "/"
    createPage({
      path: path,
      component: blogTagPost,
      context:{
        tag:tag.tag
      }
    })
  })
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const path = "blogs" + post.node.fields.slug;
    createPage({
      path:  path,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
