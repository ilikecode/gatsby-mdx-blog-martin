import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Article = ({ frontmatter }) => {
  const { title, slug, category } = frontmatter;

  return (
  	<Link to={`/articles/${slug}`}>
    <Card>
    	<CardBorder />
      <CardCategory>{category}</CardCategory>
      <CardTitle>{title}</CardTitle>
		  <CardReadMoreWrap>
		    <CardReadMore>Read Article</CardReadMore>
		    <CardReadMoreIcon>
          <svg x="0px" y="0px" viewBox="0 0 50 30" >
            <defs/>
            <line fill="none" stroke-width="2" x1="3.5" y1="11" x2="23.2" y2="11"/>
            <line fill="none" stroke-width="2" x1="15.8" y1="3.8" x2="23.5" y2="11.4"/>
            <line fill="none" stroke-width="2" x1="15.8" y1="18.2" x2="23.5" y2="10.6"/>
          </svg>
		    </CardReadMoreIcon>
		  </CardReadMoreWrap>
    </Card>
    </Link>
  )
}

export default Article

// <Image fluid={image.childImageSharp.fluid} />

const Card = styled.article`
  height:340px;
	padding: 1rem;
	display: flex;
	align-items: flex-end;
  position: relative;
  cursor: pointer;
  background: white;
  box-shadow: ${props => props.theme.shadows.shadow1};
`		

const CardCategory = styled.div`
  color: ${props => props.theme.colors.grey3};
  font-size: 14px;
	font-weight: 600;
  letter-spacing: .08em;
  position: absolute;
	top: 32px;
	left: 32px;
  z-index: 3;
  transition: color 300ms ease-in-out; 
  
  ${Card}:hover & {
    color: ${props => props.theme.colors.grey5};
    opacity: .9;
		transition: color 100ms ease-in-out;
	}
`

const CardTitle = styled.div`
  color: ${props => props.theme.colors.grey1};
  font-size: 26px;
  padding-right: 32px;
  position: absolute;
	top: 100px;
	left: 32px;
  z-index: 3;
  transition: color 300ms ease-in-out; 
  ${Card}:hover & {
    color: ${props => props.theme.colors.grey5};
    opacity: .9;
    transition: color 400ms ease-in-out,
                opacity 600ms ease-in-out;
	}
`

const CardReadMoreWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;  
  width: 100%;
  z-index: 3;
`

const CardReadMore = styled.div`
  color: ${props => props.theme.colors.grey3};
  font-size: 18px;
  font-weight: 400;
  letter-spacing: .06em;
  padding-right: 10px;
  z-index: 3;
  line-height: 22px;

  ${Card}:hover & {
    color: ${props => props.theme.colors.grey5};
    opacity: .9;
    transition: color 500ms ease-in-out,
                opacity 500ms ease-in-out;
	}
`
const CardReadMoreIcon = styled.div`
  stroke: ${props => props.theme.colors.grey3};
  z-index: 3;
  transition: all 300ms ease-in-out;
  height: 30px;
  width: 50px;
	
	${Card}:hover & {
    fill: ${props => props.theme.colors.grey5};
    stroke: ${props => props.theme.colors.grey5};
		transform: translateX(30px) ;
    transition: all 600ms ease-in-out;
	}
`

const CardBorder = styled.div`
  position: absolute;
	top: 0;
	left: 0;
  height: 3px;
  width: 100%;
  z-index: 2;
  background-color: ${props => props.theme.colors.purple2};
  transform-origin: top;
  transition: all 600ms ease-in-out;
		
	${Card}:hover & {
    height: 100%;
    transform: height(1);
    background-color:  ${props => props.theme.colors.grey1};
    transition: height 600ms ease-in-out,
                background-color 500ms ease-in-out;
  }
`