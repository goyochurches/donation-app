import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-auto py-3 bg-light fixed-bottom">
      <div className="container">
        <span className="text-muted">
          © {currentYear} DONA POR UNA BUENA RAZÓN
        </span>
      </div>
    </footer>
  );
};

export default Footer;
