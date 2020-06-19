import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

// Import Style Elements
import { H4 } from '../../elements'

const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
      nodes {
        id
        frontmatter {
          slug
          date(formatString: "MMMM, Do, YYYY")
          title
          category
        }
      }
    }
  }
`

const Recent = () => {
  const data = useStaticQuery(query);
  const {allMdx: {nodes: articles}} = data;
  
  return (
    <Wrapper>
      <H4 title="Recent Articles">Recent Articles</H4>
      {articles.map(article => {
        const {
          title,
          slug,
        } = article.frontmatter
        return <Link to={`/articles/${slug}`} key={article.id} style={linkStyles} >{title}</Link>
      })}
  </Wrapper>
  )
}

export default Recent

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
    
  @media () {
    & {

    }
  }
`

const linkStyles = {
  fontSize: '.6rem',
}