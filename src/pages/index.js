import * as React from "react"
// import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../scss/styles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="wrapper container">
    {/* <Jumbotron fluid> */}
      <div className="sub_container">
        <p className="main_paragraph">Reggie Lussier is an actor, voice actor, and production assistant.</p>
        <a href='https://ko-fi.com/I3I27NPZU' target='_blank'>
          <img height='48' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' />
        </a>

      </div>
    {/* </Jumbotron> */}
  </div>
 </Layout>
);
export default IndexPage