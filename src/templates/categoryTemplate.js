import React from 'react'
import { graphql } from 'gatsby'

// Import Components
import Layout from '../components/Layout'
import Articles from '../components/Articles'
import Seo from '../components/seo'

const CategoryTemplate = props => {
  const {
    pageContext: { category },
  } = props; 
  const {
    data: {
      categories: { nodes: articles },
    },
  } = props;

  return (
    <Layout>
    <Seo title="Article Categories" />
      <Articles articles={articles} title={`Category: ${category}`} />
    </Layout>
  )
}

export default CategoryTemplate

export const query = graphql`
  query GetCategories($category: String) {
    categories: allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {category: {eq: $category}}}) {
      nodes {
        id
        frontmatter {
          slug
          date(formatString: "MMMM, Do, YYYY")
          title
          author
          category
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`