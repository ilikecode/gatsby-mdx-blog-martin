import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Footer = () => {
	return (
		<FooterWrapper>
			<FooterCopyright>
				© {new Date().getFullYear()} {` `} <Link to="/" aria-label="Home" >Martin Guzman</Link>
	     </FooterCopyright>
      <FooterLinks>
	      <ul>
	      	<li><a href="https://www.linkedin.com/in/martin-guzman-ca/" target="blank" rel="noopener noreferrer">LinkedIn</a></li>
	      	<li><a href="mailto:hello@martin-guzman.com" aria-label="Email Martin Guzman">Contact</a></li>
	      </ul>
			</FooterLinks>
		</FooterWrapper>
	)
}

export default Footer

export const FooterWrapper = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin: 0 auto;
	padding: .25rem;
	width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
`	

export const FooterCopyright = styled.div`
`	

export const FooterLinks = styled.div`
	ul {
		list-style-type: none;
		margin: 0 ;
		padding: 0;
	}	

	li {
		display: inline-block;
		padding-right: 1rem;

		&:last-child { 
			padding-right: 0; 
		} 
	}
`	