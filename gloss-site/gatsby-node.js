var path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const docsTemplate = path.resolve(`src/pages/docs.js`)
  return graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/docs/" } }) {
        edges {
          node {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.frontmatter.title.toLowerCase()}/`,
        component: docsTemplate,
        context: node,
      })
    })
  })
}