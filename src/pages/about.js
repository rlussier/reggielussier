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
          She has been in a variety of commercials, TV, and voice over projects. 
          When not in front of the camera, Reggie can be found working behinds
          the scenes working as a Production Assistant and Sound operator.  
          Skills include: guitar, piano, vocal range: alto, martial arts, improv, 
          and fitness. She also does her own stunts. 
          For resume check out her: <a href="https://www.imdb.com/name/nm9216180/?ref_=fn_al_nm_1" target="_blank">IMDB</a>
        </p> <br/>
        {/* <h2>To contact me:</h2>
          <ul>
            <li><a href="mailto:reganlussier@gmail.com">reganlussier@gmail.com</a></li>
            <li><a href="tel:2693706368">269-370-6368</a></li>
          </ul> */}
    </div>
     <img src={AnimatedMe} />
    </div>
</div>
  {/* </div> */}
</Layout>
)
export default AboutPage