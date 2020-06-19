import React from 'react'
import styled from 'styled-components'

// Import Components and Style Elements
import Categories from '../Categories'
import Recent from './Recent'
import { H4 } from '../../elements'

const Aside = () => {
  return (
    <Wrapper>
      <Recent />
      <H4 title="Categories">Article Categories</H4>
      <Categories />
    </Wrapper>
  )
}
export default Aside

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  
  @media () {
    & {

    }
  }
`