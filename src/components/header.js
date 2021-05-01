import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "./data/menudata"
import SocialMedia from "./socialmedia"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => {
  return (
  <Nav className="navbar">
    <NavLink to="/" className="title">
      {siteTitle}
    </NavLink>
    <Bars />
    <NavMenu>
      {menuData.map((item, index) => (
        <NavLink to={item.link} key={index} className="nav_link">
          {item.title}
        </NavLink>
      ))}
    </NavMenu>
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
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
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
