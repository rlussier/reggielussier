import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
<Layout>
  {/* <div className="container"> */}
    <div className="main_container">
    <SEO title="Contact" />
    <h1>Contact</h1>
    <div class="form_container">

<form id="form" method="post" action="reggielussier-ih1ad2nop-rlussier.vercel.app">
  <label>
    <input type="text" name="name" id="name" placeholder="Name" />
  </label>
  <label>
    <input type="email" name="email" id="email" placeholder="email" />
  </label>
  <label>
    <textarea name="message" id="message" rows="5" placeholder="Message" />
  </label>
  <button type="submit">Send</button>
</form>

</div>
</div>
  {/* </div> */}
</Layout>
)
export default AboutPage