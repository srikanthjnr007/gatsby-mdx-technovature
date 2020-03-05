import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import Logo from './images/logo.png';


const Header = styled('header')`
  background: white;
  width: 100%;
  padding: 1.5rem 1.0875rem;
  margin-bottom: 2rem;
`

const Nav = styled('nav')`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: #a9a9a9;
    font-weight: 600;
    font-family: montserrat, 'sans-serif';
    transition: all 0.2s;
    &:hover {
      color: black;
      text-decoration: underline;
    }
  }
`

const activeLinkStyle = {
  color: 'black',
}


const Header1 = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
            <img src={Logo} alt="Technovature Software" width="120" />
            </Link>
          </li>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
             HOME 
            </Link>
          </li>
          <li>
            <Link to="/blog/" activeStyle={activeLinkStyle}>
              BLOG
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
             CONTACT 
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
 }

Header1.propTypes = {
  siteTitle: PropTypes.string,
}

Header1.defaultProps = {
  siteTitle: '',
}

export default Header1
