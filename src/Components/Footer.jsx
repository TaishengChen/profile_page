import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer-item">
      <a
        href="https://x.com/IstsChen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitterSquare />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61550569718472"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare />
      </a>
      <a
        href="https://www.instagram.com/ists.chen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagramSquare />
      </a>
      <a
        href="https://www.linkedin.com/in/taishengchen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/TaishengChen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare />
      </a>
    </div>
  );
};

export default Footer;
