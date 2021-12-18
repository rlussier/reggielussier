import React from "react"
import Layout from "../components/layout"
import AnimatedMe from "../images/animatedme.png"
// import SEO from "../components/seo"

const AboutPage = () => (
<Layout>
  {/* <div className="container"> */}
    <div className="main_container">
    {/* <SEO title="About" /> */}
    <h1>About</h1>
    <div className="about_container">
      <div className="paragraph">
        <p>Born in New Orleans and raised in Michigan, Reggie Lussier is an actor, 
           writer, and producer. She always loved telling stories, whether it's 
           writing, producing, or acting the story. She Loves to be a part of the process.</p>
           <p>
           Reggie started out as a production assistant for a variety of indie and network 
           projects. From there, she caught the acting bug and now has done on-camera and voice over.</p>
           <p>For a list of credits, check out:<a href="https://www.imdb.com/name/nm9216180/?ref_=fn_al_nm_1" 
           target="_blank">IMDB</a>
        </p> <br/>
        <h2>To contact me:</h2>
          <ul>
            <li><a href="mailto:reganlusier@gmail.com">reganlussier@gmail.com</a></li>
          </ul>
    </div>
     <img src={AnimatedMe} />
    </div>
</div>
  {/* </div> */}
</Layout>
)
export default AboutPage