import React from 'react'
import styled from 'styled-components'

// Import Components
import Nav from './Nav'
import Logo from './Logo'

const Header = () => {
  return (
  <HeaderWrap>
	  <Logo />
	  <Nav />
  </HeaderWrap>
  )
}
export default Header

const HeaderWrap = styled.header`
  display: flex;
	flex-flow: row no-wrap;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.white};  
  margin: 0 auto;
  padding: .25rem;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
`