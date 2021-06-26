import React from "react"
import Layout from "../components/layout"
import AnimatedMe from "../images/animatedme.png"
import SEO from "../components/seo"

const AboutPage = () => (
<Layout>
  {/* <div className="container"> */}
    <div className="main_container">
    <SEO title="Contact" />
    <h1>Contact</h1>
    {/* <div class="form_container"> */}
    <form id="form" method="post" action="../form.php" enctype="text/plain">
  <label>
    Name
    <input type="text" name="name" id="name" />
  </label>
  <label>
    Email
    <input type="email" name="email" id="email" rows="10" cols="50" />
  </label>
  <label>
    Message
    <textarea name="message" id="message" rows="10" cols="25" />
  </label>
  <button type="submit">Send</button>
  <button type="reset" value="Clear">Reset</button>
</form>
</div>
{/* </div> */}
  {/* </div> */}
</Layout>
)
export default AboutPage
