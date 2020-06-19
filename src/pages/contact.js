import React from 'react'
import styled from 'styled-components'

// Import Components and Style Elements
import Layout from '../components/layout'
import SEO from '../components/SEO'
import { H1, P } from '../elements'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container>
    <H1>Hi, say hello.</H1>
    <p>Contact Form if Required.</p>
    </Container>
  </Layout>
)

export default ContactPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: .75rem;
  height: 80vh;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
`