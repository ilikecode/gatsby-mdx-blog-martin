import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`
const Categories = () => {
  const { 
    allMdx: { distinct },
  } = useStaticQuery(query)

  return (
    <ul>
      {distinct.map((category, index) => {
        return (
          <li key={index}>
            <Link to={`/articles/${category}`} >
              {category}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories
