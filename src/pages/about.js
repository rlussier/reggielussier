import React from "react"
import Layout from "../components/layout"
import AnimatedMe from "../images/animatedme.png"
import SEO from "../components/seo"

const AboutPage = () => (
<Layout>
  {/* <div className="container"> */}
    <div className="main_container">
    <SEO title="About" />
    <h1>About</h1>
    <div className="about_container">
      <div className="paragraph">
        <p>Reggie Lussier is an actor and producer based out of Dallas, TX.
          She's been in commercials, TV, and films. Even behind the scenes,  
          Reggie has done work as a production assistant and sound operator. 
          Working for big names like <i>ABC</i>, <i>Rooster Teeth</i>, and&nbsp; 
        <i>Amazon Prime.</i>&nbsp;
          For resume check out my <a href="https://www.imdb.com/name/nm9216180/?ref_=fn_al_nm_1" target="_blank">IMDB</a>
        </p> <br/>
        <h2>To contact me:</h2>
          <ul>
            <li><a href="mailto:ralussier@hotmail.com">ralussier@hotmail.com</a></li>
            <li><a href="tel:2693706368">269-370-6368</a></li>
          </ul>
    </div>
     <img src={AnimatedMe} />
    </div>
</div>
  {/* </div> */}
</Layout>
)
export default AboutPage