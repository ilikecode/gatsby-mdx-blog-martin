import React from 'react'
import { graphql } from 'gatsby'

// Import Components
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Articles from '../components/Articles'

const ArticlePage = ({data}) => {
  const {allMdx:{nodes:articles}} =  data;
  return (
    <Layout>
      <SEO title="Articles" />
      <Articles articles={articles} title="Articles" />
    </Layout>
  )
}

export default ArticlePage

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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