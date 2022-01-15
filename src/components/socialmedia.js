import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram, faTwitch } from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  return (
    <div className="social-container">
      <div className="social_media">
      <a href="https://www.youtube.com/raystratos" target="_blank"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube}/>
</a>
<a href="https://www.facebook.com/raystratos1/" target="_blank"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} />
</a>
<a href="https://www.twitter.com/raystratos" target="_blank" 
className="twitter social">
  <FontAwesomeIcon icon={faTwitter}/>
</a>
<a href="https://www.instagram.com/ray_stratos" target="_blank"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram}/>
</a>
<a href="https://www.twitch.com/raystratos" target="_blank"
  className="instagram social">
  <FontAwesomeIcon icon={faTwitch}/>
</a>
    </div>
    
    </div>
  )
}