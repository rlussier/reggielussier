import * as React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="wrapper container">
    <Jumbotron fluid>
      <div className="sub_container">

      </div>
    </Jumbotron>
  </div>
 </Layout>
)

export default IndexPage
