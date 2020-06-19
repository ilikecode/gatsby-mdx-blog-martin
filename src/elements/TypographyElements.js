import styled from 'styled-components'

export const P = styled.p`
	color: ${props => props.theme.colors.grey2};
	font-size: 0.75rem;
	margin: ${props => props.margin ? props.margin : 0 };
  margin-bottom: calc((0.5rem - 0.5rem) + 0.5rem*2);
	line-height: 1.5rem;
`

export const H1 = styled.h1`
	color: ${props => props.theme.colors.purple2};
	font-weight: 300;
	line-height: 1.125rem;
	margin-top: calc((1.5rem - 1.5rem) + 1.5rem*2);
	padding-bottom: calc((.25rem - 1.5rem) + 1.5rem * 2);
	padding-left: 5px;
`

export const H2 = styled.h2`
	color: ${props => props.theme.colors.grey2};
	font-weight: 400;
	line-height: 1.25rem;
	font-size: 1.5rem;
  margin-top: calc((1.5rem - 1.5rem) + 1.5rem*2);
`

export const H4 = styled.h4`
	color: ${props => props.theme.colors.grey2};
	font-weight: 500;
	line-height: 1.25rem;
	font-size: .6rem;
`