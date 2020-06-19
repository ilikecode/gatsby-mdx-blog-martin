import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Import Components and Style Elements
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/Hero'
import { H1, P } from '../elements'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Container>    
        <Hero showHero />
        <H1>Homepage</H1>
        <P>Hello, I'm Martin.</P>
        <P>I'm a SoCal-based security analyst that's good at finding holes and things. Previously I knew nothing, but then I looked some stuff up on the internet and went to college. Now I got the smarts.</P>
    </Container>
  </Layout>
)

export default IndexPage

const Container = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: .25rem;
  display: flex;
  flex-direction: column;
`