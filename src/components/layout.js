import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 import Header from "./header"
 // import "./layout.css"
 import Footer from "./footer"
 import "../scss/styles.scss"
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
     <>
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
 
       <div className="container"
         style={{
           margin: '0 auto',
           maxWidth: 960,
           padding: `1rem`,
         }}
       >
         <main>{children}</main>
         <Footer />
       </div>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout