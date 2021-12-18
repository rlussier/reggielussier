import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "./data/menudata"
import SocialMedia from "./socialmedia"
import PropTypes from "prop-types"
import Dropdown from 'react-bootstrap/Dropdown'

const Header = ({ siteTitle }) => {

  return (
  <Nav className="navbar">
    <NavLink to="/" className="title">
      {siteTitle}
    </NavLink>
    <NavMenu className="collapse dropdown">
      {menuData.map((item, index) => (
        <NavLink to={item.link} key={index} className="nav_link navbar-collapse">
          {item.title}
        </NavLink>
      ))}
    </NavMenu>

    <Dropdown>
  <Dropdown.Toggle variant="success" idName="nav">
    <Bars className="nav-toggle"/>
  </Dropdown.Toggle>
  <Dropdown.Menu>
  {menuData.map((item, index) => (
        <NavLink to={item.link} key={index} className="nav_link navbar-collapse">
          {item.title}
        </NavLink>
      ))}
  </Dropdown.Menu>
</Dropdown>

    <SocialMedia />
  </Nav>
  
    
    )
}

export default Header

const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: space-between;
padding: .5rem calc((100vw - 1300px) / 2);
z-index: 100;
position: relative;
`
const NavLink = styled(Link)`
display: flex;
aliign-items: cneter;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
`

const Bars = styled(FaBars)`
display: none;
color:#0A0A0A;
@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 35%), rotate(225deg);
  font-size: 3rem;
  cursor: pointer;
}
`

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;
@media screen and (max-width: 768px) {
  display: none;
}
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}