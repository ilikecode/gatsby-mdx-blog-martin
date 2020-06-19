import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const query = graphql`
  {
    hero: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = ({ showHero }) => {
  const { hero } = useStaticQuery(query)
  return (
    <>
      {showHero && (
        <Image fluid={hero.childImageSharp.fluid}  />
      )}
    </>
  )
}

export default Hero
