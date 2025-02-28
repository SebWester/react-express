import React from "react";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div className="footer">
      <footer>©{year}</footer>
    </div>
  );
};

export default Footer;
