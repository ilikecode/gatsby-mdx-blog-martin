//Wrapper to include: MDXProvider, ThemeProvider, GlobalStyles, Layout
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Theme from './src/themes/theme';
import { MDXProvider } from '@mdx-js/react'

//Logic for Global Styles
const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		font-size: 1rem; 
		font-smoothing: antialiased;
  	text-rendering: optimizeLegibility;
  	height: 100%;
  	overflow-x: hidden;
  	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	@media screen and (min-width: 20rem) {
    html {
    	font-size: calc(1rem + 1.2 * ((100vw - 20rem) / 30)); 
  	} 
  }
  @media screen and (min-width: 50rem) {
    html {
      font-size: 2rem; 
    } 
  }

	body {
		margin: 0 auto;
		font-family: ${props => props.theme.fonts.main};
		background-color: ${props => props.theme.colors.white};
		line-height: 1.5rem;
  	font-weight: ${props => props.theme.fontweight.default};
  
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";

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
 		  text-decoration: none;
 		}
 		&:hover::after {
 		  transform: scaleX(1);
 		  transform-origin: left;
 		}
  }
`

//Logic for MDX Files
const components = {

}

export const wrapRootElement = ({ element }) => {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			<MDXProvider components={components}>
			{element}
			</MDXProvider>
		</ThemeProvider>
	)
}










