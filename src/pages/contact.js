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
    <form id="form" method="post" action="../form.php" enctype="text/plain">
  <label>

    <input type="text" name="name" id="name" placeholder="Name" />
  </label>
  <label>

    <input type="email" name="email" id="email" rows="10" cols="50" placeholder="Email" />
  </label>
  <label>

    <textarea name="message" id="message" rows="20" cols="25" placeholder="Message..." />
  </label>
  <button  type="submit">Send</button>
  <button type="reset" value="Clear">Reset</button>
</form>

{/* <div className="contact_paragraph">
  <p>Le's connect. For Projects or inquiries.</p>
</div> */}
</div>
</div>
  {/* </div> */}
</Layout>
)
export default AboutPage
