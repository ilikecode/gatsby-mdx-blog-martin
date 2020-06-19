import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'

// Import Components and Style Elements
import Layout from '../components/layout'
import SEO from '../components/seo'
import Aside from "../components/Aside"
import { H1, P } from '../elements'

const ArticleTemplate = ({data}) => {
  const {
    mdx: {
      frontmatter: { title, category, date, readTime, image },
      body,
    },
  } = data;
  
  return ( 
    <Layout>
      <SEO title={title} image={image.childImageSharp.fluid.src} />        
      
      <Wrapper>
        <article>
        <H1>{title}</H1>
        <Image fluid={image.childImageSharp.fluid} />
        <div>{date}</div> 
        <div>{readTime} Minute Read</div>
        <div>{category}</div>
        <MDXRenderer>{body}</MDXRenderer>      
        </article>
        <Aside />
      </Wrapper>
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query GetSingleArticle($slug: String) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      body
      frontmatter {
        slug
        title
        category
        date(formatString: "MMMM Do YYYY")
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
`

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: grey;
      color: white;
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr 200px;
      column-gap: 4rem;
    }
  }
`