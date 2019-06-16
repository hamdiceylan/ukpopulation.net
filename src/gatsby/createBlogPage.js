const path = require(`path`)

async function createBlogPage(graphql, createPage) {
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const pageData = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              id
              wordCount {
                paragraphs
                sentences
                words
              }
              fields {
                slug
              }
              internal {
                content
              }
            }
          }
        }
      }
    `
  )

  if (pageData.errors) {
    throw pageData.errors
  }

  const posts = pageData.data.allMarkdownRemark.edges

  posts.forEach(post => {
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
    })
  })

  return null
}

module.exports = createBlogPage
