import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Nav } from "react-bootstrap";
import SocialMedia from "./socialmedia"
import Hamburger from 'hamburger-react'

const Header = ({ siteTitle }) => (
  <header>
    <div className="navbar">
      <div className="main_title" style={{ margin: 0 }}>
        <Link className="title"
          to="/">
          {siteTitle}
        </Link>
      </div>
      <div className="nav">
        <Nav>
          <Nav.Item>
            <Link className="nav_link" to="/about">About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav_link" to="/demos">Demos</Link>
          </Nav.Item>
        </Nav> 

       

<Hamburger />


      </div>
    <SocialMedia />
</div>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
