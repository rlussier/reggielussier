import * as React from "react"

const Footer = ({ siteTitle }) => (
 <footer
         style={{
            position: 'absolute',
            bottom: 0,
            height: '2.5rem',
            fontFamily: 'Spartan, sans-serif'
      }}
       >
       © {new Date().getFullYear()} Reggie Lussier

 </footer> 
)

export default Footer