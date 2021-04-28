import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Nav from 'react-bootstrap/Nav'
import SocialMedia from "./socialmedia"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `.25rem`,
    }}
  >
    <div className="navbar"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div className="main_title" style={{ margin: 0 }}>
        <Link className="title"
          to="/"
          // style={{
          //   color: `white`,
          //   textDecoration: `none`,
          // }}
        >
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
