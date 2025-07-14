import React from "react";
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <button onClick={scrollToTop} className="restart-btn">Restart Journey</button>
      <p>
        Created by Satwika | <a href="satwikakakarla123@gmail.com">Contact Me</a> | <a href="https://github.com/Satwikakakarla" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </footer>
  );
};

export default Footer;