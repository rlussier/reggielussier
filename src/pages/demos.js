import React from "react"
import Layout from "../components/layout"
import HomeStudio from "../images/HomeStudio.jpg"
import SEO from "../components/seo"

const DemosPage = () => (
<Layout> 
<div className="container">
<SEO title="Demos" />
    <div className="main_container">
      <h1>Demos</h1>
      <div className="demo_container">
        <div className="demo_container-block">
  <h2>Character Demo</h2>

<iframe scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/705124768&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

 </div>
 <div className="demo_container-block">
 <h2>Commerical Demo</h2>

 <iframe  scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/705125593&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

 </div>
 </div>
    <h2>Home Studio Specs</h2>
    <div className="home_studio">
        <div ClassName="home_studio-container">
          <ul>
            <li>Nueman TLM103 microphone</li>
            <li>SSL2 Audio Interface</li>
            <li>Adobe Audition</li>
            <li>Sound Forge</li>
            <li>Source Connect</li>
          </ul>
          </div>
       <img src={HomeStudio} />
   
  </div>
</div>

  </div>
  </Layout>
)

export default DemosPage