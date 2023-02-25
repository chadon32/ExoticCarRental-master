import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faTiktok
    
  } from "@fortawesome/free-brands-svg-icons";



  const SocialFollow = () => {
    return (
      <div class="social-container">
    
      <a href="https://www.youtube.com/channel/UCroh5XA7gJWrzmD-7MjuSmw"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="1" />
      </a>
      <a href="https://www.facebook.com/Dogeex0tics"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="1" />
      </a>
      <a href="https://www.twitter.com/doge_exotics" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="1" />
      </a>
      <a href="https://www.instagram.com/doge_exotics"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="1" />
      </a>

      <a href="https://www.tiktok.com/@dogexotics0"
        className="instagram social">
        <FontAwesomeIcon icon={faTiktok} size="1" />
      </a>
      
            <Link to="./contact">Contact
            </Link>
           


</div>
    );
  };



export default SocialFollow;