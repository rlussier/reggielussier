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
    {/* <form id="form" method="post" action="/form.php" enctype="text/plain">
  <label>
    <input type="text" name="name" id="name" placeholder="Name" />
  </label>
  <label>
    <input type="email" name="email" id="email" rows="10" cols="50" placeholder="Email" />
  </label>
  <label>
    <textarea name="message" id="message" rows="15" placeholder="Message..." />
  </label>
  <button  type="submit">Send</button>
  <button type="reset" value="Clear">Reset</button>
</form> */}

<form id="form" method="post" action="../handleForm.js">
  <label>
    <input type="text" name="name" id="name" placeholder="Name" />
  </label>
  <label>
    <input type="email" name="email" id="email" placeholder="email" />
  </label>
  {/* <label>
    Subject
    <input type="text" name="subject" id="subject" />
  </label> */}
  <label>
    <textarea name="message" id="message" rows="5" placeholder="Message" />
  </label>
  <button type="submit">Send</button>
  {/* <input type="reset" value="Clear" /> */}
</form>

</div>
</div>
  {/* </div> */}
</Layout>
)
export default AboutPage