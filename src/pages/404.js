import React from 'react'
import styled from 'styled-components'

// Import Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
    </Container>
  </Layout>
)

export default NotFoundPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: .75rem;
  height: 80vh;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
`
