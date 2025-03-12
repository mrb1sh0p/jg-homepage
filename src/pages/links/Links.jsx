import React from "react";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import "./Links.css";

const Links = () => {
  return (
    <div className="links-container">
      <h1 className="links-title">Social</h1>
      <div className="links-list">
        <a
          href="https://instagram.com/seu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="link-item"
        >
          <FaInstagram size={32} />
          <span>Instagram</span>
        </a>
        <a
          href="https://youtube.com/seu-canal"
          target="_blank"
          rel="noopener noreferrer"
          className="link-item"
        >
          <FaYoutube size={32} />
          <span>YouTube</span>
        </a>
        <a
          href="https://twitter.com/seu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="link-item"
        >
          <FaTwitter size={32} />
          <span>Twitter</span>
        </a>
        <a
          href="https://facebook.com/seu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="link-item"
        >
          <FaFacebook size={32} />
          <span>Facebook</span>
        </a>
      </div>
    </div>
  );
};

export default Links;
