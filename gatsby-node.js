const path = require("path")
const { create } = require("domain")

// Create MDX/Article and Category Pages 
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `)

	// Create Template for MDX Articles/Posts Page
  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/articles/${slug}`,
      component: path.resolve(`src/templates/articleTemplate.js`),
      context: {
        slug,
      },
    })
  })

  // Create Template for Filtered Categories Page
  result.data.categories.distinct.forEach(category => {
    createPage({
      path: `/articles/${category}`,
      component: path.resolve(`src/templates/categoryTemplate.js`),
      context: {
        category,
      },
    })
  })
}
