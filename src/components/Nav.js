import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import styled from 'styled-components'

const Nav = () => {
	const { menuLinks } = useSiteMetadata()

	return (
		<NavLinks>
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.slug} activeStyle={activeLinkStyle}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </NavLinks>
	)
}

export default Nav

const NavLinks = styled.nav`
  ul {
    display: flex;
    flex-flow: row no-wrap;
    flex-flow: column no-wrap;
  }
  li {
    display: inline-block;
    margin-left: 1em;

    &:first-of-type {
      display: none
    }
  }
  a {
  	color: ${props => props.theme.colors.purple2};
		font-size: 0.8rem;
    text-decoration: none;
    position: relative;
    transition: all 0.2s ease-in-out;

		&::after {
		  position: absolute;
		  content: "";
		  width: 100%;
		  height: 2px;
		  top: 100%;
		  left: 0;
		  background: ${props => props.theme.colors.purple2};
		  transition: transform 0.5s;
		  transform: scaleX(0);
		  transform-origin: right;
		}
		&:hover {
		  color: ${props => props.theme.colors.purple2};
		}
		&:hover::after {
		  transform: scaleX(1);
		  transform-origin: left;
		}
  }
}
`
const activeLinkStyle = {
  color: `${props => props.theme.colors.purple2}`,
	borderBottom: '2px solid',
	borderColor: `${props => props.theme.colors.purple3}`,
}
