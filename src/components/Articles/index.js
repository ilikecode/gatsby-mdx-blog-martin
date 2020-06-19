import React from 'react'
import styled from 'styled-components'

// Import Component and Style Elements
import Article from './Article'
import { H1 } from '../../elements'

const Articles = ({ articles, title }) => {
  return (
    <Container>
      <H1>{title}</H1>
      <ArticleWrap>
        {articles.map(article => {
          return <Article key={article.id} {...article} />
        })}
      </ArticleWrap>
    </Container>
  )
}

export default Articles

const ArticleWrap = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(340px, 1fr) );
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: .25rem;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
`